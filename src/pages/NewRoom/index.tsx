import { useContext, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Container } from '../Home/styles';
import { Button } from '../../components/Button';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../services/firebase';

export function NewRoom() {
  const { user } = useContext(AuthContext);
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

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

          <form onSubmit={handleCreateRoom} >
            <input 
              type="text" 
              placeholder="Nome da sala" 
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button type="submit"> Criar sala </Button>
          </form>

          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>

        </div>
      </main>
    </Container>
  )
}