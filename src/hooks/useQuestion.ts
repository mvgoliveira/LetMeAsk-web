import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type AnswerType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  likeCount: number;
  likeId: string | undefined;
  content: string;
}

type FirebaseAnswers = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  likes: Record<string, {
    authorId: string;
  }>
  content: string;
}>

export function useQuestion(roomId: string, questionId: string) {
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const AnswersRef = database.ref(`rooms/${roomId}/questions/${questionId}/answers`);
    
    AnswersRef.on('value', answer => {
      const databaseAnswer = answer.val();      
      
      const firebaseAnswers: FirebaseAnswers = databaseAnswer ?? {};
      
      const parsedAnswers = Object.entries(firebaseAnswers).map(([key, value]) => {
        return {
          id: key,
          author: value.author,
          content: value.content,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
        }
      });    
      
      setAnswers(parsedAnswers);
      
      return () => {
        AnswersRef.off('value');
      }
    })
  }, [questionId, roomId, user])

  return {answers} 
}
