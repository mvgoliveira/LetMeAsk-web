import blockImg from '../../assets/images/block.svg'
import {Container} from './styles'

export function Forbidden() {
  return (
    <Container>
      <div className="imgContainer">
        <img src={blockImg} alt="Astronaut lost in space" />
      </div>
      
      <div className="textContainer">
        <section>
          <h1>403</h1>
          <span>Acesso Negado</span>
        </section>
      </div>
    </Container>
  );
}