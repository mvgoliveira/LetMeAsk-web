import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type QuestionType = {
  id: string;
  author: {
    name: string,
    avatar: string;
  }
  content: string;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
  answersCount: number; 
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string;
  },
  content: string;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
  answers: Record<string, {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
  }>
}>

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isEnded, setIsEnded] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);
    
    roomRef.on('value', room => {
      const databaseRoom = room.val();

      if (!databaseRoom) {
        setAuthor(" ");
        return;
      }

      setAuthor(databaseRoom.authorId);
      setIsEnded(databaseRoom.closedAt || false);
      
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          likeCount: Object.values(value.likes ?? {}).length,
          answersCount: Object.values(value.answers ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
        }
      });    

      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);

      return () => {
        roomRef.off('value');
      }
    })
  }, [roomId, user?.id])

  return { questions, title, author, isEnded } 
}
