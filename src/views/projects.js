import { Container, Card, Button, CardGroup
      } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export let Projects = () => {
  return (
    <main id="Projects" role="main">
      <Container className='jumbotron'>
        <h1>Coding Projects</h1>

        View all my projects on
        <Button variant="link" className='text-dark' href="https://github.com/jufb?tab=repositories" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
          GitHub <BoxArrowUpRight color="currentColor" size="17" />
        </Button>
      </Container>

      <Container fluid>
        <CardGroup>
          <Card className="card-project card-project-portfolio" style={{margin: 5}}>
            <Card.Title><h4>My Portfolio</h4></Card.Title>
            <Card.Body>
              <Card.Text>
                How I structured this website using React and Bootstrap.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer-transparent">
              <Button variant="dark" href="https://github.com/jufb/jufb.github.io" target="_blank">Open Code</Button>
            </Card.Footer>
          </Card>

          <Card className="card-project" style={{margin: 5}}>
            <Card.Title><h4>Python for C# Developer Course</h4></Card.Title>
            <Card.Body>
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
          <Card className="card-project" style={{margin: 5}}>
            <Card.Title><h4>Python Course</h4></Card.Title>
            <Card.Body>
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
          <Card className="card-project" style={{margin: 5}}>
            <Card.Title><h4>C# Solutions</h4></Card.Title>
            <Card.Body>
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
    </main> 
  );
}