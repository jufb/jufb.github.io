import { Container, Button } from 'react-bootstrap';
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons';

export function Contact() {
  return (
    <main id="Contact" role="main" className='bg-light text-center'>
      <Container className='jumbotron'>
        <h1>Contact</h1>
        Do you want to hire me? I am eager to answer your questions!
      </Container>
      <Container id="Contacts">
        <Button variant="link" href="mailto:fborges.j@gmail.com" target='_blank'>
          <Envelope color="currentColor" size="40" />
          <h4>Email</h4>
            fborges.j@gmail.com
        </Button>

        <Button variant="link" href="https://www.linkedin.com/in/fborgesj" target='_blank'>
          <Linkedin color="currentColor" size="40" />
          <h4>LinkedIn</h4>
            https://www.linkedin.com/in/fborgesj
        </Button>

        <Button variant="link" href="https://github.com/jufb" target='_blank'>
          <Github color="currentColor" size="40" />
          <h4>GitHub</h4>
            https://github.com/jufb
        </Button>
      </Container>
    </main>
  )
}