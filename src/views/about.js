import { Container, Image, Row, Col, Alert, Button
} from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

export const About = () => {
  return (
    <main role="main" className='bg-light'>
      <a id="About"></a>

      <Container className="jumbotron" style={{paddingBottom: 0, marginBottom: 0}}>
        <h1>About Me</h1>
         <Row>
          <Col md>
            <Image className="figure-img" roundedCircle src="jufb-pic.jpg" fluid />
          </Col>
          <Col>
          <Alert variant="success">
          <Alert.Heading>Software Engineer</Alert.Heading>
            I am looking for opportunities that promote diversity, equality, and inclusion, with interesting and challenging projects.
            <Button variant="link" href="#Projects" style={{paddingTop: 5}}>View my work<ChevronRight color="currentColor" size="10" /></Button>
            <hr />
            Soft Skills:
            <ul>
              <li>Detail-oriented</li>
              <li>Critical Thinking</li>
              <li>Organization Skills</li>
              <li>Leadership</li>
            </ul>
        </Alert>
            <p>I am Juliana and I live in Ontario, Canada. My family and settling in Canada were the most successful plans of my life.</p>
            <p>In my fifteens, I published my first website during my technical high school in Data Processing.
            <br />I have accumulated over ten years of experience as a Software Engineer, with an emphasis on Business Analysis.</p>
            <p>My father was my greatest inspiration source. I naturally felt that I appreciate helping and dedicating myself to people.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-primary jumbotron-fluid" style={{ padding: 50, marginBottom: 10}}>
        <Container fluid className="bg-light align-items-center justify-content-center" style={{ padding: 50 }}>
          <blockquote className="blockquote mb-0">
          <h3 className="font-italic">"Leaders must inspire and motivate to raise new leaders."</h3>
          <h3 className="blockquote-footer">Juliana</h3>
        </blockquote>
        </Container>
      </Container>
    </main>
  );
}