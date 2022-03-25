import { Container, Card, Button } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import dataProjects from './projects.json';

export function Projects() {  
  return (
    <main id="Projects" role="main">

      <Container className='jumbotron text-light'>
        <h1>Projects</h1>
        View all my projects on
        <Button variant="link" href="https://github.com/jufb?tab=repositories" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
          GitHub <BoxArrowUpRight color="currentColor" size="12" />
        </Button>
      </Container>

      <Container fluid>

        <div className="group-card">
          {dataProjects.map(element => (
            
            <Card key={element.id} className={element.featured ? 'featured' : undefined}>
              {element.img.length > 0 &&
                <div className="image-box">
                  <Card.Img alt={element.imgalt} src={element.img} />
                </div>
              }
              <Card.Title>{element.title}</Card.Title>
              <Card.Body>
                <Card.Text>{element.text}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer-transparent">
                <Button variant="dark" href={element.github} target="_blank">
                  Open <span className='sr-only'>{element.screenreader}</span> Code
                </Button>&nbsp;

                {element.url &&
                  <Button variant="primary" href={element.url} target="_blank">
                    View <span className='sr-only'>{element.screenreader}</span> Live
                  </Button>
                }

              </Card.Footer>
            </Card>

          ))}
        </div>

      </Container>

    </main> 
  );
}