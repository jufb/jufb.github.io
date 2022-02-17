import { Button, Container
      } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';

export function Home() {
  return (
    <main role="main" id="Home">
      <Container className='jumbotron'>
        <h1>Hi! I am Juliana!</h1>

        <p>Do you offer innovation, new opportunities, and challenging projects?</p>
        <p>Here I am!</p>
        <p>
          I have been a technology enthusiast since childhood. My academic background is composed of a bachelor's degree in Computer Science, two graduate certificates in Software Engineering, and Project Management.
        </p>

        <Button href="#About">
          Learn more <ChevronDown color="currentColor" size="15" />
        </Button>
      </Container>
   </main>
  );
}