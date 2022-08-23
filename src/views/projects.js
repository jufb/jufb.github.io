import { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import dataProjects from './projects.json';
import dataProjectSkills from './projectSkills.json';

export function Projects() {
  const [view, setView] = useState('Show more');
  const [moreProjects, setMoreProjects] = useState(false);
  const onClick = () => {
    if (moreProjects) {
      setMoreProjects(false);
      setView('Show more');
    }
    else {
      setMoreProjects(true);
      setView('Show less');
    }
  }
  
  return (
    <main id="Projects" role="main">

      <Container className='jumbotron text-light'>
        <h1>Projects</h1>
        <h5>View all my projects on
        <Button variant="link" href="https://github.com/jufb?tab=repositories" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
          GitHub <BoxArrowUpRight color="currentColor" size="20" />
        </Button>
        </h5>
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
                  <Button variant="secondary" href={element.url} target="_blank">
                    View <span className='sr-only'>{element.screenreader}</span> Live
                  </Button>
                }

              </Card.Footer>
            </Card>

          ))}
        </div>
        
        {moreProjects ?
          <div className="group-card">

            {dataProjectSkills.map(element => (
              <Card key={element.id}>
                <span className='sr-only'>Open {element.screenreader}</span>
                <Card.Link href={element.url} target="_blank">
                  <div className="image-box">
                    <Card.Img alt={element.imgalt} src={element.img} />
                  </div>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Body>
                    <Card.Text>{element.text}</Card.Text>
                  </Card.Body>
                </Card.Link>
              </Card>
            ))}

          </div>
          : null }

        <p></p><Button onClick={onClick} variant="primary">{view}</Button>

      </Container>

    </main> 
  );
}