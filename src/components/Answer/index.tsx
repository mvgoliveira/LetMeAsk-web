import { ReactNode } from 'react';
import { Container } from './styles'; 

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  liked: boolean;
  children?: ReactNode;
}

export function Answer({
  content, 
  author, 
  children, 
  liked
}: QuestionProps) {

  return (
    <Container isLiked={liked}>
      <div className="answer-line"></div>

      <article>
        <p> {content} </p>

        <footer>
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <span> {author.name} </span>
          </div>
          
          <div> 
            {children} 
          </div>
        </footer>
      </article>
    </Container>
  );
}