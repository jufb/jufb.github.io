import { Button, Container
      } from 'react-bootstrap';

export const Home = () => {
  return (
    <div className="bg-white jumbotron jumbotron-fluid">
    <Container>
      <a id="Home"><h1>Hello! Olá!</h1></a>
      <p>Do you offer innovation, new opportunities, and challenging projects?</p>
      <p>Here I am!</p>
      <p>
        I have been a technology enthusiast since childhood. My educational background is bachelor's degree in Computer Science, two graduate certificates in Software Engineering, and Project Management.
      </p>
      <h4>View my profile on <Button variant="primary" href="https://github.com/jufb" target="_blank">Github</Button></h4>
    </Container>
    </div>
  );
}