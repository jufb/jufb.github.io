import { Container, Card, Button, CardGroup, Alert
      } from 'react-bootstrap';

export let Projects = () => {
  return (
    <main role="main">
      <div className="notso-transparent jumbotron jumbotron-fluid">
      <Container>
        <a id="Projects"><h1>Coding Projects</h1></a>
        <Alert variant="primary">
          View all my projects on <Alert.Link href="https://github.com/jufb?tab=repositories">Github</Alert.Link>.
        </Alert>
        <Card className="text-center">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>My Portfolio</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">React-Bootstrap</Card.Subtitle>
            <Card.Text>
              How I structured this website.
            </Card.Text>
            <Button variant="primary" href="https://jufb.github.io" target="_blank">View Live</Button>&nbsp;
            <Button variant="secondary" href="https://github.com/jufb/jufb.github.io" target="_blank">Open Code</Button>
          </Card.Body>
        </Card>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Lighthouse Python Course</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">A Lighthouse Labs Course</Card.Subtitle>
              <Card.Text>
                Coding tests executed during a Python Course.
              </Card.Text>
              <Button variant="outline-secondary" href="https://github.com/jufb/LighthousePythonCourse" target="_blank" >Open Code</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>C# Solutions</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">C# challenges</Card.Subtitle>
              <Card.Text>
                Solving challenges on LeetCode and HackerRank.
              </Card.Text>
              <Button variant="outline-secondary" href="https://github.com/jufb/C-Solutions" target="_blank" >Open Code</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      </div>
    </main> 
  );
}