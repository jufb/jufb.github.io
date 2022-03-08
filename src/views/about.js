import { useEffect, useState } from 'react';
import { Container, Image, Row, Col, Button, Badge } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export function About() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect (() => {
      setLoading(true);
      fetch("https://raw.githubusercontent.com/jufb/jufb.github.io/main/src/views/skills.json")
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
      <main id="About" role="main" className='bg-light'>
          <Container className='text-center jumbotron'>
          <h1>About</h1>
          Software Engineer. 
          <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmrBEq6lEqC-qJ5gzS" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
              Open my resume/CV <BoxArrowUpRight color="currentColor" size="16" />
          </Button>
          </Container>
          <Container>
          <Row>
              <Col>
              <h4>Hi, my name is Juliana...</h4>
              And Ontario, Canada is my home.<br/>
              I have accumulated 10+ years of experience as a Software Engineer.<br/>
              In my career, I was involved in the Project Life Cycle Phases. Consequently, Business Analysis and Project Management were also part of my experience.
              <p>Opportunities that promote diversity, equality, and inclusion are my goals.</p>
              </Col>
              <Col>
                <Image fluid="true" className="figure-img" roundedCircle src="jufb-pic.jpg" alt='Juliana F. Borges picture.' />
              </Col>
              <Col className="text-right">
                {data.map((array, i) => (
                  <div key={i}>
                    <h5>{array.title}</h5>
                    {array.skills.map((subarray, x) => (
                      <Badge key={x} bg="secondary">
                        {subarray}
                      </Badge>
                    ))}
                  </div>
                ))}
              </Col>
          </Row>
          <hr /> 
          <blockquote className="blockquote">
              <h3 className="font-italic">"Leaders must inspire and motivate to raise new leaders."</h3>
              <h3 className="blockquote-footer">Juliana</h3>
          </blockquote>
          </Container>
      </main>
    );
  }
  
  return <div>No data available. Try again later.</div>;
}