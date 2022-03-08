import { useEffect, useState } from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';

export function Skills() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect (() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/jufb/jufb.github.io/main/src/views/projectSkills.json")
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
    <main id="Skills" role="main" className='bg-dark text-center'>
      <Container className='jumbotron text-light'>
        <h1>Skills</h1>
        Prototyping, Agile, UML, Project Management. See below for some examples of skills I acquired throughout my career.
      </Container>
      <Container fluid>
        <CardGroup>
          {data.map(element => (
            <Card key={element.id} style={{margin: 10}}>
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
        </CardGroup>
      </Container>
    </main> 
    );
  }
  
  return <div>No data available. Try again later.</div>;
}