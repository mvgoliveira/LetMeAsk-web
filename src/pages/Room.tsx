import { Container } from '../styles/room';

import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button';

export function Room() {
  return (
    <Container>
      <header>
        <section>
          <img src={logoImg} alt="LetMeAsk" />
          <div> CÓDIGO DA SALA </div>
        </section>
      </header>

      <main>
        <div>
          <h1>Sala React</h1>
          <span>4 Perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?"/>

          <div>
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>       

    </Container>
  );
}