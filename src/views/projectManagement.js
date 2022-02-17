import { useEffect, useState } from 'react';
import { Container, Card, Button, CardGroup, Image } from 'react-bootstrap';

export function ProjectManagement() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect (() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/jufb/jufb.github.io/main/src/views/projectMgmt.json")
      .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(setData)
      .then (() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading)
    return <h3>Loading...</h3>;

  if(error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (data) {
    return (
    <main id="ProjectManagement" role="main" className='bg-dark text-center'>
      <Container className='jumbotron text-light'>
        <h1>Project Mgmt.</h1>
        This content was collected and produced in an academic environment.
      </Container>
      <Container fluid>
        <CardGroup>
          {data.map((element) => (
            <Card key={element.id} style={{margin: 5}}>
              <Card.Body>
                <Image alt={element.imgalt} roundedCircle src={element.img} />
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.text}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer-transparent">
                <Button variant="dark" href={element.url} target="_blank" >
                  Open
                  <span className='sr-only'>{element.screenreader}</span>
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </main> 
    );
  }
  
  return <div>No Projects Available. Try again later.</div>;
}