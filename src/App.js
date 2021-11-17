import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form } from 'react-bootstrap';
import './jufb-bootstrap.css';


function App() {
  return (
    <div className="App">
      <h1>JuFB</h1>
      <Breadcrumb>
        <BreadcrumbItem>Project 1</BreadcrumbItem>
        <BreadcrumbItem>Project 2</BreadcrumbItem>
        <BreadcrumbItem>Project 3</BreadcrumbItem>
      </Breadcrumb>
      <header className="App-header">
        <Container>
        {/* <Container fluid> To expand the contents to full screen*/}
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="email" placeholder="fborges.j@gmail.com"></Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Text className="text-muted">
              Your information will be confidential!
              Just you and me! :)
            </Form.Text>
            <Button variant="secondary" type="submit">Login</Button>
          </Form>
          <Card className="mb-3" style={{ color:"#000", marginBottom: 15, marginTop: 0 }}>
            <Card.Img src="https://jufb.github.io/CSS/JFB_Logo.png" />
            <Card.Title>JuFB Logo</Card.Title>
            <Card.Text>This is an example of React Bootstrap Card.</Card.Text>
          </Card>
          <Alert variant="primary">This is a button</Alert>
          <Button variant="primary">Test Button</Button>
        </Container>
     </header>
    </div>
  );
}

export default App;
