import { Navbar, Nav, Container
      } from 'react-bootstrap';
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons';

export const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
      <Container style={{padding:0}}>
        <Navbar.Toggle />

        <Navbar.Brand href="/" style={{marginRight:3}}>
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
                <Nav.Link href="#Projects">Coding Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#ProjectManagement">Project Management</Nav.Link>
              </Nav.Item>
            </Nav> 
          </Navbar.Collapse>
        </Container>

        <Nav.Link href="mailto:fborges.j@gmail.com">
          <span className='sr-only'>Send me an e-mail</span>
          <Envelope color="white" size="25" />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/fborgesj/" target="_blank">
          <span className='sr-only'>Visit my LinkedIn profile</span>
          <Linkedin color="white" size="25" />
        </Nav.Link>
        <Nav.Link href="https://github.com/jufb" target="_blank">
          <span className='sr-only'>Visit my GitHub profile</span>
          <Github color="white" size="25" />
        </Nav.Link>

      </Container>

      </Navbar>

    </header>
   );
}