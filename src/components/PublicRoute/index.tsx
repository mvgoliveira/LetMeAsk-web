import { Redirect, Route } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useRoom } from '../../hooks/useRoom';
import { LoadingContainer } from './styles';

const PublicRoute = ({...rest}) => {
  const roomCode = rest.location.pathname.replace('/rooms/', '');
  const { author } = useRoom(roomCode);

  if (!author) {
    return (
      <LoadingContainer>
        <AiOutlineLoading3Quarters/>
        <p>loading...</p>
      </LoadingContainer>
    )
  }
  
  if (author === " ") {
    return (
      <Redirect to={{pathname: "/403"}}/>
    )
  } else {  
    return (
      <Route {...rest}/>
    )
  }
};

export default PublicRoute;