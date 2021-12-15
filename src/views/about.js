import { Container, Image, Row, Col, Alert, Button
} from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export const About = () => {
  return (
    <main role="main" className='bg-light'>
      <a id="About"></a>

        <Container className='text-center jumbotron'>
          <h1 style={{padding: 0}}>About Me</h1>
          <Button variant="link" href="#Projects">View my portfolio<ChevronRight color="currentColor" size="10" /></Button>
          <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmrBEq6lEqC-qJ5gzS" target='_blank'>View my resume<ChevronRight color="currentColor" size="10" /></Button>
        </Container>
        <Container>
          <Row>
          <Col md className='text-center'>
            <Image className="figure-img" roundedCircle src="jufb-pic.jpg" fluid />
          </Col>
          <Col>
            <Alert variant="info">
            <Alert.Heading>Software Engineer</Alert.Heading>
              Dedicated professional with 10+ years of experience. I am looking for opportunities that promote diversity, equality, and inclusion, with interesting and challenging projects.<br />
              <hr />
              Soft Skills:
              <ul>
                <li>Proactive Self-Starter</li>
                <li>Detail-Oriented</li>
                <li>Critical Thinker</li>
                <li>Organization Skills</li>
                <li>Leadership</li>
              </ul>
            </Alert>
            <p>I am Juliana and I live in Ontario, Canada. In my fifteens, I published my first website during my technical high school in Data Processing.
            <br />I have accumulated over ten years of experience as a Software Engineer, with an emphasis on Business Analysis.</p>
            <Container fluid className="bg-light align-items-center justify-content-center" style={{ padding: 25 }}>
              <blockquote className="blockquote mb-0">
              <h3 className="font-italic">"Leaders must inspire and motivate to raise new leaders."</h3>
              <h3 className="blockquote-footer">Juliana</h3>
            </blockquote>
            </Container>
          </Col>
        </Row>
      </Container>
    </main>
  );
}