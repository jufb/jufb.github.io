import { Container, Image, Row, Col, Button
} from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export const About = () => {
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
            And I live in Ontario, Canada. I have accumulated 10+ years of experience as a Software Engineer, with an emphasis on Business Analysis.
            <p>What I am looking right now are opportunities that promote diversity, equality, and inclusion.</p>
          </Col>
          <Col className="text-center">
            <Image fluid="true" className="figure-img" roundedCircle src="jufb-pic.jpg" alt='Juliana F. Borges picture.' />
          </Col>
          <Col>
            <h5>My Soft Skills</h5>
            <ul>
              <li>Proactive Self-Starter;</li>
              <li>Detail-Oriented;</li>
              <li>Critical Thinker;</li>
              <li>Organization Skills;</li>
              <li>Leadership;</li>
              <li>Art lover, putting creativity into practice.</li>
            </ul>
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