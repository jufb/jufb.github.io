import { Container, Button } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export function About() {
  return (
    <main id="About" role="main" className='bg-light'>
      <Container fluid className='about-hero'>
        <div className='hero'>
          <Container className='text-center jumbotron'>
            <h1>About</h1>
              <h5>Software Engineer and Indie Game Developer.<br />
              <Button variant="link" href="https://www.linkedin.com/in/fborgesj" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
                  Open my LinkedIn <BoxArrowUpRight color="currentColor" size="20" />
              </Button>
              </h5>
          </Container>
          <Container className='jumbotron'>
            <p>Hi, I'm Juliana, a professional Software Engineer with over ten years of experience in the IT industry, specializing in full-stack applications. Additionally, I have a solid background in business analysis and project management.</p>
            <p>Technology has been part of my life since my childhood. Visual Basic was my first coding experience as part of my secondary school curriculum in Data Processing. Those early lines of code sparked a passion that has stayed with me ever since. During my teenage years, I proudly launched my very first website.</p>
            <p>Fast-forward to today: I’m donning my indie game developer hat, crafting a brand new title.</p>
            <p>On my free time, I enjoy playing sports with my family, playing videogames, and exploring what's new in tech.</p>
          </Container>
          <Container className='jumbotron'>
            <hr /> 
            <blockquote><h4>“Leaders must inspire and motivate to raise new leaders.”</h4></blockquote>
            <cite>― Juliana</cite>
          </Container>
        </div>
      </Container>
    </main>
  );
}