import { Container, Card, Button, CardGroup
      } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export let Projects = () => {
  return (
    <main id="Projects" role="main" className='bg-warning text-center'>
      <Container className='jumbotron'>
        <h1 style={{padding: 0}}>Coding Projects</h1>
        View all my projects on<Button variant="link" href="https://github.com/jufb?tab=repositories" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>GitHub<ChevronRight color="currentColor" size="10" /></Button>
      </Container>
      <Container fluid style={{paddingBottom: 15}}>
        <Card bg="light" style={{margin: 5}}>
          <Card.Header as="h4">Featured</Card.Header>
          <Card.Body>
            <Card.Title>My Portfolio</Card.Title>
            <Card.Text>
              How I structured this website using React and Bootstrap.
            </Card.Text>
            <Button variant="primary" href="https://jufb.github.io" target="_blank">View Live</Button>&nbsp;
            <Button variant="dark" href="https://github.com/jufb/jufb.github.io" target="_blank">Open Code</Button>
          </Card.Body>
        </Card>
        <CardGroup>
          <Card style={{margin: 5}}>
            <Card.Body>
              <Card.Title>Lighthouse Python Course</Card.Title>
              <Card.Text>
                Coding tests executed during a Python Course.
              </Card.Text>
              <Button variant="outline-dark" href="https://github.com/jufb/LighthousePythonCourse" target="_blank" >
                Open <span className='sr-only'>Python</span>
                Code</Button>
            </Card.Body>
          </Card>
          <Card style={{margin: 5}}>
            <Card.Body>
              <Card.Title>C# Solutions</Card.Title>
              <Card.Text>
                Solving challenges on LeetCode and HackerRank.
              </Card.Text>
              <Button variant="outline-dark" href="https://github.com/jufb/C-Solutions" target="_blank" >
                Open <span className='sr-only'>C Sharp</span>
                Code</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </main> 
  );
}