import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles'; 

type QuestionProps = {
  roomId: string;
  questionId: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  liked?: boolean;
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  roomId,
  questionId,
  content, 
  author, 
  children, 
  liked, 
  isHighlighted = false
}: QuestionProps) {

  return (
    <Container 
      isLiked={liked}
      isHighlighted={isHighlighted} 
      className="question"
    >
      <Link to={`/rooms/${roomId}/${questionId}`} > {content} </Link>
      
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span> {author.name} </span>
        </div>
        
        <div> 
          {children} 
        </div>
      </footer>
    </Container>
  );
}