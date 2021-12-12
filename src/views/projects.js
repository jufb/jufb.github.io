import { Container, Card, Button, CardGroup
      } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export let Projects = () => {
  return (
    <main role="main" className='bg-warning'>
      <a id="Projects"></a>
      <Container fluid className="jumbotron text-center">
        <h1>Coding Projects</h1>
          <h5>View all my projects on<Button variant="link" href="https://github.com/jufb?tab=repositories" target='_blank'>GitHub<ChevronRight color="currentColor" size="12" /></Button></h5>

        <Card bg="light" className="text-center" style={{margin: 5}}>
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
          <Card style={{margin: 5}}>
            <Card.Body>
              <Card.Title>Lighthouse Python Course</Card.Title>
              <Card.Text>
                Coding tests executed during a Python Course.
              </Card.Text>
              <Button variant="outline-secondary" href="https://github.com/jufb/LighthousePythonCourse" target="_blank" >Open Code</Button>
            </Card.Body>
          </Card>
          <Card style={{margin: 5}}>
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
    </main> 
  );
}