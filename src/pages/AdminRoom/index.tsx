import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'

import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { Button } from '../../components/Button';

import { useRoom } from '../../hooks/useRoom';
import { Container } from './styles';
import { useState } from 'react';
import { DeleteQuestionModal } from '../../components/DeleteQuestionModal';
import { useEffect } from 'react';
import toast from 'react-hot-toast';


type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const [modalQuestionId, setModalQuestionId] = useState('');

  function handleDeleteQuestion() {   

    setModalQuestionId("");
    toast.success("Pergunta Removida!")
  }

  return (
    <Container> 

      <DeleteQuestionModal isOpen={modalQuestionId === "" ? false : true}>
        <button type="button" onClick={() => setModalQuestionId("")}>Cancelar</button>
        <button type="button" onClick={handleDeleteQuestion}>Sim, excluir</button>
      </DeleteQuestionModal>

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
              <Question key={question.id} content={question.content} author={question.author}>
                <button type="button" onClick={() => setModalQuestionId(question.id)}>
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            )
          }) }
        </div>

      </main>       

    </Container>
  );
}