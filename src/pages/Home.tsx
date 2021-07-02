import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Container } from '../styles/auth';
import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';

//webpack - Module Bundler (todas as importações passam pelo webpack e transforma em algo utilizável pela aplicação )

export function Home() {
  const history = useHistory();
  const { singInWithGoogle, user } = useAuth();

  function handleCreateRoom() {    
    if (!user) {
      singInWithGoogle();
    }

    history.push('/rooms/new');    
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
          <img src={logoImg} alt="LetMeAsk" /> 

          <button className="create-room" onClick={handleCreateRoom} type="button">
            <img src={googleIconImg} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          
          <div className="separator">ou entre em uma sala</div>
          
          <form action="">
          
            <input 
              type="text" 
              placeholder="Digite o código da sala" 
              name="" 
              id=""
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