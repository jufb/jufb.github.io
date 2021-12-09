import { Navbar, Nav, NavDropdown, Container
      } from 'react-bootstrap';

export const Header = () => {
  return (
    <header>
      <Navbar sticky="top" expand="md" bg="white">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="logo.webp"
              width="80"
              height="80"
              alt="Juliana F. Borges"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="navbarScroll">
            <Nav navbarScroll>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About Me</Nav.Link>
              <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Projects">Coding Projects</NavDropdown.Item>
                <NavDropdown.Item href="#ProjectManagement">Project Management</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
   );
}