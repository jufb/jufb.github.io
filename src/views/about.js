import { Container, Image, Row, Col, Button, Badge } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import dataSkills from './skills.json';

export function About() {
  return (
    <main id="About" role="main" className='bg-light'>
        <Container className='text-center jumbotron'>
        <h1>About</h1>
          <h4>Software Engineer.&nbsp;
          <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmgqchpz1XjfWcoUWXwA" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
              Open my resume/CV <BoxArrowUpRight color="currentColor" size="12" />
          </Button>
          </h4>
        </Container>
        <Container>
        <Row>
            <Col>
            <h4>Hi, my name is Juliana...</h4>
              And I live in Ontario, Canada.<br/>
              I am a passionate Software Engineer with 10+ years of experience in the IT industry, with solid knowledge in front-end and back-end applications such as .NET C#, React, and Python. Plus, I also hold knowledge in Business Analysis and Project Management.
              <p>Opportunities that promote diversity, equality, and inclusion are my goals.</p>
            </Col>
            <Col className='text-center'>
              <Image className="figure-img" roundedCircle src="https://static.wixstatic.com/media/249783_9be0ce1d760d45af9206292fff26a7c1~mv2.jpg" alt='Juliana F. Borges picture.' />
            </Col>
            <Col>
              {dataSkills.map((array, i) => (
                <div key={i}>
                  <br/> <h4>{array.title}</h4>
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
        
        <blockquote><h4>“Leaders must inspire and motivate to raise new leaders.”</h4></blockquote>
        <cite>― Juliana</cite>
        
        </Container>
    </main>
  );
}