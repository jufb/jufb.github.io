import { Container, Navbar
      } from 'react-bootstrap';

export const Footer = (props) => {
  return (
    <footer className='bg-light'>
      <Container>
        <hr style={{margin: 0}} /> 
        <Navbar sticky="bottom" className="justify-content-center">
          <Navbar.Brand href="/">Copyright © {props.year} Juliana F. Borges.</Navbar.Brand>
        </Navbar>
      </Container>
    </footer>
  );
}