import { FormEvent, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {IoChevronBack} from 'react-icons/io5';
import {RiAdminFill} from 'react-icons/ri';
import {ImReply} from 'react-icons/im';
import toast from "react-hot-toast";

import { useQuestion } from "../../hooks/useQuestion";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import logoWhiteImg from '../../assets/images/logo-white.svg';
import logoImg from '../../assets/images/logo.svg';

import { Question } from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { Answer } from "../../components/Answer";
import { Button } from "../../components/Button";

import { database } from "../../services/firebase";

import { Container, Form, UserInfoContainer, UserDropMenu } from "./styles";

type RoomParams = {
  roomId: string;
  questionId: string;
}

export function QuestionPage() {
  const params = useParams<RoomParams>();
  const questionId = params.questionId;
  const roomId = params.roomId;
  
  const { title, questions, isEnded, author } = useRoom(roomId);
  const { answers } = useQuestion(roomId, questionId);
  const { user, signInWithGoogle, logOut } = useAuth();
  const { isDarkMode } = useTheme();
  const history = useHistory();

  const question = questions.find(question => question.id === questionId);
  const questionIndex = questions.findIndex(question => question.id === questionId) + 1;
  
  const [newAnswer, setNewAnswer] = useState('');
  const [isAnswerFormOpen, setIsAnswerFormOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  if (!question) {
    return (
      <div></div>
    );
  }
    
    async function handleSignIn() {
      if (!user) {
        await signInWithGoogle()
      }
    }

    async function handleLogout() {
      setIsProfileMenuOpen(false);
      logOut();
    }

    async function handleSendAnswer(event: FormEvent) {
    event.preventDefault();

    if (newAnswer.trim() === '' ) {
      return;
    }

    if (!user) {
      toast.error('You must be logged in');
      return;
    }

    const answer = {
      content: newAnswer,
      author: {
        name: user.name,
        avatar: user.avatar
      }
    }

    await database.ref(`rooms/${roomId}/questions/${questionId}/answers`).push(answer);

    setNewAnswer('');
    setIsAnswerFormOpen(false);
  }
  
  async function handleLikeAnswer(answerId: string, likeId: string) {
    if (!user) {
      toast.error('You must be logged in');
      return;
    }

    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/answers/${answerId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/answers/${answerId}/likes`).push({
        authorId: user?.id
      })
    }
  }

  async function handleBackToRoomPage() {
    history.push(`/rooms/${roomId}`);
  }

  return (
    <Container>
      <header>
        <section>
          <img src={isDarkMode ? logoWhiteImg : logoImg} alt="LetMeAsk" />
          <article>
            <RoomCode code={params.roomId}/>
            { !user 
                ? (<></>) 
                
                : <UserDropMenu isOpen={isProfileMenuOpen}>
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    />

                    <section>
                      <article className="userInfos">
                        <img src={user.avatar} alt={user.name} />
                        <p>{user.name}</p>
                      </article>

                      { user.id === author && (
                        <article>
                          <Link to={`/admin/rooms/${roomId}`}><RiAdminFill/> <p>visualizar como administrador</p></Link>
                        </article>
                      )}

                      <button type="button" onClick={handleLogout}>Sair</button>

                    </section>
                  </UserDropMenu>
            }
          </article>
        </section>
      </header>
      
      <main>
        <div className="room-title">
          <button onClick={handleBackToRoomPage}> <IoChevronBack size={30}/> </button>
          <h1>Sala {title} / Pergunta #<span>{questionIndex}</span></h1>
          
          { question.answersCount > 1 || question.answersCount === 0 
            ? <span>{question.answersCount} respostas</span> 
            : <span>{question.answersCount} pergunta</span> 
          }

          { isEnded && (
              <span className="ended-room-shield">
                sala encerrada
              </span>
            )
          }
        </div>

        <Question 
          roomId={roomId}
          questionId={question.id}
          key={question.id} 
          content={question.content} 
          author={question.author}
          liked={question.likeId !== undefined}
          isHighlighted={false}
          isAnswered={false}
        >
          <button onClick={() => setIsAnswerFormOpen(!isAnswerFormOpen)}><ImReply color="var(--text-100)" size={36}/></button>
        </Question>
        
        <Form onSubmit={handleSendAnswer} isAnswerFormOpen={isAnswerFormOpen}>
          <textarea 
            placeholder="O que você quer responder?"
            onChange={event => setNewAnswer(event.target.value)}
            value={newAnswer}
          />

          <section>
            { !user 
              ? (<span>Para enviar uma pergunta, <button onClick={handleSignIn}>faça seu login</button>.</span>) 
              
              : <UserInfoContainer>
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </UserInfoContainer> 
            }
            
            <article>
              <button type="button" onClick={() => setIsAnswerFormOpen(false)}>Cancelar</button>
              <Button type="submit" disabled={!user || isEnded}>Enviar resposta</Button>
            </article>
          </section>
        </Form>

        { answers.map(answer => {
          return (
            <Answer 
              author={answer.author} 
              content={answer.content} 
              liked={answer.likeId !== undefined}
              key={answer.id}
            >
              <button 
                className="like-button" 
                type="button" 
                aria-label="Marcar como gostei"
                onClick={() => handleLikeAnswer(answer.id, answer.likeId ?? "")}
              >
                { answer.likeCount > 0 && <span>{ answer.likeCount }</span> }

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
              </button>
            </Answer>
          );
        })}

      </main>
    </Container>
  );
}