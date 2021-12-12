import { Navbar, Nav, Container
      } from 'react-bootstrap';
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons';


export const Footer = () => {
  return (
    <footer>
      <>
        <Navbar sticky="bottom" bg="light" variant="light">
          <Container className="justify-content-center">
            <Navbar.Brand href="#home"><p style={{ paddingTop: 20 }}>© 2021 Juliana F. Borges</p></Navbar.Brand>
            
            <Nav>
              <Nav.Link href="mailto:fborges.j@gmail.com">
                <Envelope color="black" size="25" />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/fborgesj/" target="_blank">
                <Linkedin color="black" size="25" />
              </Nav.Link>
              <Nav.Link href="https://github.com/jufb" target="_blank">
                <Github color="black" size="25" />
              </Nav.Link>
            </Nav>
          </Container>

        </Navbar>
      </>
    </footer>
  );
}