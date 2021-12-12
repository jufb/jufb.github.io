import { Button, Container
      } from 'react-bootstrap';
import { ChevronRight, Github } from 'react-bootstrap-icons';

export const Home = () => {
  return (
    <main role="main">

    <a id="Home"></a>
    <Container className="jumbotron" style={{paddingBottom: 0, marginBottom: 0}}>
      
      <h1>Hello! Olá!</h1>

      <p>Do you offer innovation, new opportunities, and challenging projects?</p>
      <p>Here I am!</p>
      <p>
        I have been a technology enthusiast since childhood. My educational background is bachelor's degree in Computer Science, two graduate certificates in Software Engineering, and Project Management.
        <Button variant="link" href="#About" style={{paddingTop: 6}}>Learn more<ChevronRight color="currentColor" size="10" /></Button>
      </p>

      <h4>View my profile on<Button variant="link" href="https://github.com/jufb" target="_blank"> <Github color="black" size="30" /></Button></h4>
    </Container>

    </main>
  );
}