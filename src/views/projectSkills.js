import { Container, Card } from 'react-bootstrap';
import dataProjectSkills from './projectSkills.json';

export function Skills() {
  return (
    <main id="Skills" role="main" className='bg-dark text-center'>

      <Container className='jumbotron text-light'>
        <h1>Skills</h1>
        <h4>Prototyping, Agile, UML, Project Management. See below for some <strong>more examples</strong> of skills I acquired throughout my career.</h4>
      </Container>

      <Container fluid>

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
  
      </Container>
  
    </main> 
  );
}