import Button from '@restart/ui/esm/Button';
import { Navbar, Nav, Container
      } from 'react-bootstrap';
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons';


export const Footer = () => {
  return (
    <footer>
      <>
        <Navbar sticky="bottom" bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand href="#home"><h5>© 2021 Juliana F. Borges</h5></Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar sticky="bottom" bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Nav>
            <Nav.Link href="mailto:fborges.j@gmail.com">
              <Envelope color="white" size="25" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/fborgesj/" target="_blank">
              <Linkedin color="white" size="25" />
            </Nav.Link>
            <Nav.Link href="https://github.com/jufb" target="_blank">
              <Github color="white" size="25" />
            </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </footer>
  );
}