import { Container, Button } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

export function About() {
  return (
    <main id="About" role="main" className='bg-light'>
      <Container fluid className='about-hero'>
        <div className='hero'>
          <Container className='text-center jumbotron'>
            <h1>About</h1>
              <h5>Software Engineer.<br />
              <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmgqchpz1XjfWcoUWXwA" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
                  Open my resume <BoxArrowUpRight color="currentColor" size="20" />
              </Button>
              </h5>
          </Container>
          <Container>
            <p>Hi, I'm Juliana. I am a professional Software Engineer with over ten years of experience in the IT industry, with solid knowledge in full-stack applications. Plus, I also hold knowledge in business analysis and project management.</p>
            <p>Technology has been part of my life since my childhood. Visual Basic was my first coding experience during my secondary school in Data Processing. I published my first website in my teens.</p>
            <p>Currently, I live in Ontario, Canada. I enjoy spending my free time having long walks with my family, playing videogames, and learning and exploring what's new in tech.</p>
            <hr /> 
            <blockquote><h4>“Leaders must inspire and motivate to raise new leaders.”</h4></blockquote>
            <cite>― Juliana</cite>
          </Container>
        </div>
      </Container>
    </main>
  );
}