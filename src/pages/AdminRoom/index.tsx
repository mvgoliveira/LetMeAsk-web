import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'

import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { Button } from '../../components/Button';

import { useRoom } from '../../hooks/useRoom';
import { Container } from './styles';


type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  return (
    <Container> 
      <header>
        <section>
          <img src={logoImg} alt="LetMeAsk" />
          <div>
            <RoomCode code={params.id}/>
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </section>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          
          { questions.length > 1 || questions.length === 0 
            ? <span>{questions.length} perguntas</span> 
            : <span>{questions.length} pergunta</span> 
          }
          
        </div>
        
        <div className="question-list">
          { questions.map(question => {
            return (
              <Question key={question.id} content={question.content} author={question.author}/>
            )
          }) }
        </div>

      </main>       

    </Container>
  );
}