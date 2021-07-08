import { ReactNode } from 'react';
import { Container, QuestionContainer } from './styles'; 

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
    <QuestionContainer isHighlighted={isHighlighted} className="question">
      <article className="highlight">
        
      </article>

      <Container 
        isLiked={liked}
        isHighlighted={isHighlighted} 
        isAnswered={isAnswered} 
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
    </QuestionContainer>
    
  );
}