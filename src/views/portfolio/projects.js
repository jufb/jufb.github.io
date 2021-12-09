import { Container, Card, Button, CardGroup, Alert
      } from 'react-bootstrap';

export let Projects = () => {
  return (
    <main role="main">
      <div className="bg-white jumbotron jumbotron-fluid">
      <Container>
        <a id="Projects"><h1>Coding Projects</h1></a>
        <Alert variant="secondary">
          View all my projects on <Alert.Link href="https://github.com/jufb?tab=repositories">Github</Alert.Link>.
        </Alert>
        <Card border="primary" bg="light" className="text-center">
          <Card.Header as="h4">Featured</Card.Header>
          <Card.Body>
            <Card.Title>My Portfolio</Card.Title>
            <Card.Text>
              How I structured this website using React and Bootstrap.
            </Card.Text>
            <Button variant="primary" href="https://jufb.github.io" target="_blank">View Live</Button>&nbsp;
            <Button variant="secondary" href="https://github.com/jufb/jufb.github.io" target="_blank">Open Code</Button>
          </Card.Body>
        </Card>
        <CardGroup className="text-center">
          <Card>
            <Card.Body>
              <Card.Title>Lighthouse Python Course</Card.Title>
              <Card.Text>
                Coding tests executed during a Python Course.
              </Card.Text>
              <Button variant="outline-secondary" href="https://github.com/jufb/LighthousePythonCourse" target="_blank" >Open Code</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>C# Solutions</Card.Title>
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