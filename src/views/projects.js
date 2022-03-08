import { useEffect, useState } from 'react';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export function Projects() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect (() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/jufb/jufb.github.io/main/src/views/projects.json")
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

  if(loading) {
    return (
      <center><img src="spinner.svg" width="80" height="80" alt='Loading...' /></center>
    );
  }

  if(error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (data) {
    return (
      <main id="Projects" role="main">
        <Container className='jumbotron'>
          <h1>Projects</h1>

          View all my projects on
          <Button variant="link" className='text-dark' href="https://github.com/jufb?tab=repositories" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
            GitHub <BoxArrowUpRight color="currentColor" size="17" />
          </Button>
        </Container>

        <Container fluid>
          <CardGroup>
            {data.map(element => (
              <Card key={element.id} style={{margin: 10}}>
                <Card.Title>{element.title}</Card.Title>
                <Card.Body>
                  <Card.Text>{element.text}</Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer-transparent">
                  <Button variant="dark" href={element.url} target="_blank">
                    Open <span className='sr-only'>{element.screenreader}</span>Code
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </Container>
      </main> 
    );
  }
  
  return <div>No data available. Try again later.</div>;
}