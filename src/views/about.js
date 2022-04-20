import { Container, Image, Row, Col, Button, Badge } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import dataSkills from './skills.json';

export function About() {
  return (
    <main id="About" role="main" className='bg-light'>
        <Container className='text-center jumbotron'>
        <h1>About</h1>
          Software Engineer. 
          <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmgqchpz1XjfWcoUWXwA" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
              Open my resume/CV <BoxArrowUpRight color="currentColor" size="12" />
          </Button>
        </Container>
        <Container>
        <Row>
            <Col>
            <h3>Hi, my name is Juliana...</h3>
              And I live in Ontario, Canada.<br/>
              I have accumulated 10+ years of experience as a Software Engineer.<br/>
              In my career, I was involved in the Project Life Cycle Phases. Consequently, Business Analysis and Project Management were also part of my experience.
              <p>Opportunities that promote diversity, equality, and inclusion are my goals.</p>
            </Col>
            <Col className='text-center'>
              <Image className="figure-img" roundedCircle src="https://static.wixstatic.com/media/249783_9be0ce1d760d45af9206292fff26a7c1~mv2.jpg" alt='Juliana F. Borges picture.' />
            </Col>
            <Col>
              {dataSkills.map((array, i) => (
                <div key={i}>
                  <h3>{array.title}</h3>
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
        
        <blockquote><h3>“Leaders must inspire and motivate to raise new leaders.”</h3></blockquote>
        <cite>― Juliana</cite>
        
        </Container>
    </main>
  );
}