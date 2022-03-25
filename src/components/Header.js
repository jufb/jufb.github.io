import { Navbar, Nav, Container
      } from 'react-bootstrap';

export const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
      <Container style={{padding:0}}>
        <Navbar.Toggle />

        <Navbar.Brand href="#Home">
          <img src="favicon.ico"
            width="50"
            height="50"
            alt="Juliana F. Borges logo."
          />
        </Navbar.Brand>

        <Container style={{paddingTop:0, paddingBottom:0}}>
          <Navbar.Collapse>
            <Nav fill>
              <Nav.Item>
                <Nav.Link href="#Home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#About">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Container>
      </Navbar>
    </header>
  );
}