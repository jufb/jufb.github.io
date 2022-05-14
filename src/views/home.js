import { Button, Container } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';

export function Home() {
  return (
    <main role="main" id="Home">
      <Container className='jumbotron'>
        <h1>Hi! I am Juliana!</h1>
        <h4>
          I have been a technology enthusiast since childhood. <br />
          My academic background is a bachelor's degree in Computer Science and two graduate certificates in Software Engineering and Project Management.
          <p>
          <Button href="#About" variant="link">
            Learn more <ChevronDown color="currentColor" size="15" />
          </Button>
          </p>
        </h4>
      </Container>
   </main>
  );
}