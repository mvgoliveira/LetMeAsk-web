import { ReactNode } from 'react';
import { Container } from './styles'; 

type QuestionProps = {
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
  content, 
  author, 
  children, 
  liked, 
  isAnswered = false, 
  isHighlighted = false
}: QuestionProps) {

  return (
    <Container 
      isLiked={liked}
      isHighlighted={isHighlighted && !isAnswered} 
      isAnswered={isAnswered} 
      className="question"
    >
      <p> {content} </p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span> {author.name} </span>
        </div>
        
        <div> {children} </div>
      </footer>
    </Container>
  );
}