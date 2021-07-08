import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { Button } from '../../components/Button';

import { useRoom } from '../../hooks/useRoom';
import { Container } from './styles';
import { useState } from 'react';
import { DeleteQuestionModal } from '../../components/DeleteQuestionModal';
import toast from 'react-hot-toast';
import { database } from '../../services/firebase';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const [modalQuestionId, setModalQuestionId] = useState('');
  const history = useHistory();

  async function handleDeleteQuestion() {   
    toast.promise(
      database.ref(`rooms/${roomId}/questions/${modalQuestionId}`).remove(), {
        loading: 'Removendo...',
        success: <b>Pergunta Removida</b>,
        error: <b>Não foi possível remover a pergunta</b>
      }
    )
    setModalQuestionId("");
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    })
    history.replace("/");
  }
  
  async function handleHighlightQuestion(questionId: string, highlighted: boolean) {
    database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !highlighted
    })
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  return (
    <Container verticalScroll={modalQuestionId !== ""}> 
      <DeleteQuestionModal isOpen={modalQuestionId === "" ? false : true}>
        <button type="button" onClick={() => setModalQuestionId("")}>Cancelar</button>
        <button type="button" onClick={handleDeleteQuestion}>Sim, excluir</button>
      </DeleteQuestionModal>

      <header>
        <section>
          <img src={logoImg} alt="LetMeAsk" />
          <div>
            <RoomCode code={params.id}/>
            <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
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
              <Question 
                key={question.id} 
                content={question.content} 
                author={question.author} 
                isHighlighted={question.isHighlighted}
                isAnswered={question.isAnswered} 
              >
                <button type="button" onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}>
                  <img src={checkImg} alt="Marcar pergunta como respondida"/>
                </button>

                <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                  <img src={answerImg} alt="Destacar pergunta"/>
                </button>

                <button type="button" onClick={() => setModalQuestionId(question.id)}>
                  <img src={deleteImg} alt="Remover pergunta"/>
                </button>
              </Question>
            )
          }) }
        </div>
      </main>    
    </Container>
  );
}