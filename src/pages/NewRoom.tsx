import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Container } from '../styles/auth';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <aside>
        <img src={ illustrationImg } alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas {user?.name}</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          
          <h2>Criar uma nova sala</h2>

          <form action="">
            <input 
              type="text" 
              placeholder="Nome da sala" 
              name="" 
              id=""
            />

            <Button type="submit"> Criar sala </Button>
          </form>

          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>

        </div>
      </main>
    </Container>
  )
}