import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import logoWhiteImg from '../../assets/images/logo-white.svg';
import deleteImg from '../../assets/images/delete.svg';
import emptyQuestionImg from '../../assets/images/empty-questions.svg';

import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { Button } from '../../components/Button';

import { useTheme } from '../../hooks/useTheme';
import { useRoom } from '../../hooks/useRoom';

import { Container } from './styles';
import { DeleteQuestionModal, EndRoomModal } from '../../components/Modals';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions, isEnded } = useRoom(roomId);
  const [modalQuestionId, setModalQuestionId] = useState('');
  const [modalRoomId, setModalRoomId] = useState('');
  const history = useHistory();
  const { isDarkMode } = useTheme();

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
    toast.promise(
      database.ref(`rooms/${roomId}`).update({
        closedAt: new Date(),
      }), {
        loading: 'Encerrando...',
        success: <b>Sala encerrada</b>,
        error: <b>Não foi possível encerrar a sala</b>
      }
    )
    history.replace("/");
  }
  
  async function handleHighlightQuestion(questionId: string, highlighted: boolean) {
    database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !highlighted
    })
  }

  return (
    <Container verticalScroll={modalQuestionId !== ""}> 
      <DeleteQuestionModal isOpen={modalQuestionId === "" ? false : true}>
        <button type="button" onClick={() => setModalQuestionId("")}>Cancelar</button>
        <button type="button" onClick={handleDeleteQuestion}>Sim, excluir</button>
      </DeleteQuestionModal>

      <EndRoomModal isOpen={modalRoomId === "" ? false : true}>
        <button type="button" onClick={() => setModalRoomId("")}>Cancelar</button>
        <button type="button" onClick={handleEndRoom}>Sim, encerrar</button>
      </EndRoomModal>

      <header>
        <section>
          <img src={isDarkMode ? logoWhiteImg : logoImg} alt="LetMeAsk" />
          <div>
            <RoomCode code={params.id}/>
            { !isEnded && 
              <Button isOutlined onClick={() => setModalRoomId(roomId)}>
                Encerrar Sala
              </Button>
            }
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

          {
            isEnded && (
              <span className="ended-room-shield">
                sala encerrada
              </span>
            )
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

          { questions.map((question, index) => {
            return (
              <Question 
                roomId={roomId}
                questionId={question.id}
                key={question.id} 
                content={question.content} 
                author={question.author} 
                isHighlighted={question.isHighlighted}
              >
                <button type="button" className="highlight-button" onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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