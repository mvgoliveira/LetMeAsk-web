import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import emptyQuestionImg from '../../assets/images/empty-questions.svg';

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

  async function handleCheckQuestionAsAnswered(questionId: string, isAnswered: boolean) {
    database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: !isAnswered
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
          {questions.length === 0 
            ? <div className="emptyQuestions">
              <img src={emptyQuestionImg} alt="balão de perguntas" />
                <span>Nenhuma pergunta por aqui...</span>
                <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
              </div> 
            
            : <></>}
          { questions.map(question => {
            return (
              <Question 
                key={question.id} 
                content={question.content} 
                author={question.author} 
                isHighlighted={question.isHighlighted}
                isAnswered={question.isAnswered} 
              >
                <button type="button" className="highlight-button" onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>

                <button type="button" className="answered-button" onClick={() => handleCheckQuestionAsAnswered(question.id, question.isAnswered)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
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