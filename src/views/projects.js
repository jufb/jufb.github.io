import { Container, Card, Button, CardGroup
      } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export let Projects = () => {
  return (
    <main id="Projects" role="main" className='coding-projects'>
    <div className='notso-transparent'>
      <Container className='jumbotron'>
        <h1>Coding Projects</h1>
        View all my projects on<Button variant="link" className='text-dark' href="https://github.com/jufb?tab=repositories" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>GitHub<ChevronRight color="currentColor" size="11" /></Button>
      </Container>
      <Container fluid>
        <Card bg="light" style={{margin: 5, padding: 20}}>
          <Card.Body>
            <Card.Title><h4>My Portfolio</h4></Card.Title>
            <Card.Text>
              How I structured this website using React and Bootstrap.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer-transparent">
            <Button variant="primary" href="https://jufb.github.io" target="_blank">View Live</Button>&nbsp;
            <Button variant="dark" href="https://github.com/jufb/jufb.github.io" target="_blank">Open Code</Button>
          </Card.Footer>
        </Card>
        <CardGroup>
          <Card style={{margin: 5, padding: 20}}>
            <Card.Body>
              <Card.Title>Python for C# Developer Course</Card.Title>
              <Card.Text>
                Coding tests executed during the course.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer-transparent">
              <Button variant="outline-dark" href="https://github.com/jufb/Python_C_Dev" target="_blank" >
                Open <span className='sr-only'>Python</span>
                Code</Button>
            </Card.Footer>
          </Card>
          <Card style={{margin: 5, padding: 20}}>
            <Card.Body>
              <Card.Title>Python Course</Card.Title>
              <Card.Text>
                Coding tests executed during a python course.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer-transparent">
              <Button variant="outline-dark" href="https://github.com/jufb/LighthousePythonCourse" target="_blank" >
                Open <span className='sr-only'>Python</span>
                Code</Button>
            </Card.Footer>
          </Card>
          <Card style={{margin: 5, padding: 20}}>
            <Card.Body>
              <Card.Title>C# Solutions</Card.Title>
              <Card.Text>
                Solving challenges on LeetCode and HackerRank.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer-transparent">
              <Button variant="outline-dark" href="https://github.com/jufb/C-Solutions" target="_blank" >
                Open <span className='sr-only'>C Sharp</span>
                Code</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
      </div>
    </main> 
  );
}