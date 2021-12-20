import { Container, Image, Row, Col, Alert, Button
} from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export const About = () => {
  return (
    <main id="About" role="main" className='bg-light'>
      <Container className='text-center jumbotron'>
        <h1 style={{padding: 0}}>About Me</h1>
        <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmrBEq6lEqC-qJ5gzS" target='_blank'>
          View my resume
          <ChevronRight color="currentColor" size="10" />          
        </Button>
      </Container>
      <Container style={{paddingBottom: 15}}>
        <Row>
          <Col md className='text-center'>
            <Image className="figure-img" roundedCircle src="jufb-pic.jpg" alt='Juliana F. Borges picture.' fluid />
          </Col>
          <Col>
            <Alert variant="info">
            <Alert.Heading>Software Engineer</Alert.Heading>
              Dedicated professional with 10+ years of experience. I am looking for opportunities that promote diversity, equality, and inclusion, with interesting and challenging projects.<br />
              <hr />
              Soft Skills:
              <ul>
                <li>Proactive Self-Starter;</li>
                <li>Detail-Oriented;</li>
                <li>Critical Thinker;</li>
                <li>Organization Skills;</li>
                <li>Leadership.</li>
              </ul>
            </Alert>
            <p>I am Juliana and I live in Ontario, Canada. In my fifteens, I published my first website during my technical high school in Data Processing.
              <br />I have accumulated over ten years of experience as a Software Engineer, with an emphasis on Business Analysis.
              <Button variant="link" href="#Projects" style={{paddingTop: 5, paddingLeft: 4}}>
                View my portfolio
                <ChevronRight color="currentColor" size="10" />
              </Button>
            </p>
            
            <blockquote className="blockquote">
              <h3 className="font-italic">"Leaders must inspire and motivate to raise new leaders."</h3>
              <h3 className="blockquote-footer">Juliana</h3>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </main>
  );
}