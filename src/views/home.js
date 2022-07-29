import { Button, Container } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';

export function Home() {
  return (
    <main role="main" id="Home">
      <Container>
        <div className='hero'>
        <h1>Hi! Olá!<br />
        I am <span className='name'>Juliana</span>!</h1>
        <h5>
          I have been a technology enthusiast since childhood. <br />
          My academic background is a bachelor's degree in Computer Science and two graduate certificates in Software Engineering and Project Management.
        </h5>
        <Button href="#About" variant="primary">
          Learn more <ChevronDown color="currentColor" size="15" />
        </Button>
        </div>
      </Container>
   </main>
  );
}