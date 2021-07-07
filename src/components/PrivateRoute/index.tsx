import { Redirect, Route } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { LoadingContainer } from './styles';

const PrivateRoute = ({...rest}) => {
  const { user } = useAuth();
  const roomCode = rest.location.pathname.replace('/admin/rooms/', '');
  const { author } = useRoom(roomCode);

  if (!author) {
    return (
      <LoadingContainer>
        <AiOutlineLoading3Quarters/>
        <p>loading...</p>
      </LoadingContainer>
    )
  }
  
  if (user?.id === author) {
    return (
      <Route {...rest}/>
    )
  } else {  
    return (
      <Redirect to={{pathname: "/403"}}/>
    )
  }
};

export default PrivateRoute;