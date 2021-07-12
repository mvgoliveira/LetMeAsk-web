import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import logoWhiteImg from '../../assets/images/logo-white.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { Container } from './styles';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../../services/firebase';
import toast from 'react-hot-toast';
import { useTheme } from '../../hooks/useTheme';

//webpack - Module Bundler (todas as importações passam pelo webpack e transforma em algo utilizável pela aplicação )

export function Home() {
  const history = useHistory();
  const { singInWithGoogle, user } = useAuth();
  const { isDarkMode } = useTheme();
  
  const [roomCode, setRoomCode] = useState('');
  
  async function handleCreateRoom() {    
    if (!user) {
      await singInWithGoogle();
    }

    history.push('/rooms/new');    
  }

  async function handleJoinRoom(event: FormEvent) {
    
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Room does not exists")
      return;
    }

    if (roomRef.val().closedAt) {
      toast.error("Room already closed")
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <aside>
        <img src={ illustrationImg } alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={ isDarkMode ? logoWhiteImg : logoImg} alt="LetMeAsk" /> 

          <button className="create-room" onClick={handleCreateRoom} type="button">
            <img src={googleIconImg} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          
          <div className="separator">ou entre em uma sala</div>
          
          <form onSubmit={handleJoinRoom}>
          
            <input 
              type="text" 
              placeholder="Digite o código da sala" 
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">
              Entrar na sala
            </Button>

          </form>
        </div>
      </main>
    </Container>
  )
}