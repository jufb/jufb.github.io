import { Button, Container
      } from 'react-bootstrap';
import { ChevronRight, Github } from 'react-bootstrap-icons';

export const Home = () => {
  return (
    <main role="main" id="Home">
      <Container className='text-center jumbotron'>
        <h1 style={{padding: 0}}>Hello! Olá!</h1>
      </Container>
      <Container style={{paddingBottom: 15}}>
        <p>Do you offer innovation, new opportunities, and challenging projects?</p>
        <p>Here I am!</p>
        <p>
          I have been a technology enthusiast since childhood. My academic background is composed of a bachelor's degree in Computer Science, two graduate certificates in Software Engineering, and Project Management.
          <Button variant="link" href="#About" style={{paddingTop: 5, paddingLeft: 4}}>Learn more<ChevronRight color="currentColor" size="10" /></Button>
        </p>

        <h4>View my profile on
          <Button variant="link" href="https://github.com/jufb" target="_blank">
            <span className='sr-only'>GitHub</span>
            <Github color="black" size="30" />
          </Button>
        </h4>
      </Container>
    </main>
  );
}