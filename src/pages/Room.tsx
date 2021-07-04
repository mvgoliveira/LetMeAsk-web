import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import { Container, UserInfoContainer } from '../styles/room';
import { useEffect } from 'react';


type RoomParams = {
  id: string;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string;
  },
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

type Question = {
  id: string;
  author: {
    name: string,
    avatar: string;
  },
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

export function Room() {
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { user } = useAuth();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);
    
    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered
        }
      });

      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    })


  }, [roomId])

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '' ) {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <Container>
      <header>
        <section>
          <img src={logoImg} alt="LetMeAsk" />
          <RoomCode code={params.id}/>
        </section>
      </header>

      <main>
        <div>
          <h1>Sala {title}</h1>
          
          { questions.length > 1 || questions.length === 0 
            ? <span>{questions.length} perguntas</span> 
            : <span>{questions.length} pergunta</span> 
          }
          
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea 
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <section>
            { !user 
              ? (<span>Para enviar uma pergunta, <button>faça seu login</button>.</span>) 
              
              : <UserInfoContainer>
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </UserInfoContainer> 
            }

            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </section>
        </form>
      </main>       

    </Container>
  );
}