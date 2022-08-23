import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';

export const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect fixed="top" expand="false" bg="primary" variant="light">
      <Container style={{padding:0}}>
        <Navbar.Toggle />
        <Navbar.Brand href="#Home">
          <img src="favicon.ico" width="50" height="50" alt="Juliana F. Borges logo." />
        </Navbar.Brand>
        <Nav.Item className="sm-contact">
          <Button href="#Contact" variant="secondary"><Envelope color="white" size="27" /><span className='sr-only'>Contact me</span></Button>
        </Nav.Item>

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  );
}