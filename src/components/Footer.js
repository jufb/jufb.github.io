import { Container, Navbar
      } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className='bg-light'>
      <Container>
        <hr style={{margin: 0}} /> 
        <Navbar sticky="bottom" className="justify-content-center">
          <Navbar.Brand href="/">Copyright © 2022 Juliana F. Borges.</Navbar.Brand>
        </Navbar>
      </Container>
    </footer>
  );
}