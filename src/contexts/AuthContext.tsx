import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth, firebase } from '../services/firebase';


type AuthContextType = {
  user: UserType | undefined;
  singInWithGoogle: () => Promise<void>;
}

type UserType = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

declare var google: any

export function AuthContextProvider(props: AuthContextProviderProps) {

  const [ user, setUser ] = useState<UserType>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL ) {
          toast.error("Missing information from Google Account");
          return;
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      } else {
        google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,
          callback: singInWithGoogleOneTap
        });
        google.accounts.id.prompt((notification: any) => {
          console.log(notification);
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function singInWithGoogleOneTap(response:any) {
    const authCredential = firebase.auth.GoogleAuthProvider.credential(response.credential);

    const res = await auth.signInWithCredential(authCredential);

    if (res.user) {
      const { displayName, photoURL, uid } = res.user;

      if (!displayName || !photoURL ) {
        toast.error("Missing information from Google Account");
        return;
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }  
  }

  async function singInWithGoogle() {    
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await auth.signInWithPopup(provider);

      if (res.user) {
        const { displayName, photoURL, uid } = res.user;

        if (!displayName || !photoURL ) {
          toast.error("Missing information from Google Account");
          return;
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }  
    } catch (error) {
      toast.error(error);
      return;
    }
  }

  return (
    <AuthContext.Provider value={{ user, singInWithGoogle }}>
      { props.children }
    </AuthContext.Provider>
  );
}