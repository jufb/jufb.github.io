import { Navbar, Nav
      } from 'react-bootstrap';
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons';


export const Footer = () => {
  return (
    <footer>
      <>
        <Navbar sticky="bottom" bg="light" variant="light" className="justify-content-center">
            <Navbar.Brand href="/"><p style={{ paddingTop: 20 }}>© 2021 Juliana F. Borges</p></Navbar.Brand>
            <Nav>
              <Nav.Link href="mailto:fborges.j@gmail.com">
                <span className='sr-only'>Send me an e-mail</span>
                <Envelope color="black" size="25" />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/fborgesj/" target="_blank">
                <span className='sr-only'>Visit my LinkedIn profile</span>
                <Linkedin color="black" size="25" />
              </Nav.Link>
              <Nav.Link href="https://github.com/jufb" target="_blank">
                <span className='sr-only'>Visit my GitHub profile</span>
                <Github color="black" size="25" />
              </Nav.Link>
            </Nav>
        </Navbar>
      </>
    </footer>
  );
}