import { Container, Image, Row, Col, Button, Badge } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import dataSkills from './skills.json';

export function About() {
  return (
    <main id="About" role="main" className='bg-light'>
      <Container className='text-center jumbotron'>
        <h1>About</h1>
          <h5>Software Engineer.&nbsp;
          <Button variant="link" href="https://1drv.ms/b/s!AquVyDo2_0wmgqchpz1XjfWcoUWXwA" target='_blank' style={{paddingTop: 5, paddingLeft: 4}}>
              Open my resume/CV <BoxArrowUpRight color="currentColor" size="12" />
          </Button>
          </h5>
      </Container>
      <Container>
        <Row>
            <Col>
              <p>Hi, I'm Juliana. I am a professional Software Engineer with over ten years of experience in the IT industry, with solid knowledge in front-end and back-end applications such as .NET C#, React, and Python. Plus, I also hold knowledge in Business Analysis and Project Management.</p>
              <p>Technology has been part of my life since my childhood. Visual Basic was my first coding experience during my technical high school in Data Processing. I published my first website in my teens.</p>
              <p>Currently, I live in Ontario, Canada. I enjoy spending my free time having long walks with my family, playing videogames, and learning and exploring what's new in tech.</p>
              <hr /> 
              <blockquote><h4>“Leaders must inspire and motivate to raise new leaders.”</h4></blockquote>
              <cite>― Juliana</cite>
            </Col>
            <Col className='text-center'>
              <Image id="juliana-pic" roundedCircle src="https://static.wixstatic.com/media/249783_9be0ce1d760d45af9206292fff26a7c1~mv2.jpg" alt='Juliana F. Borges picture.' />
            </Col>
            <Col>
              {dataSkills.map((array, i) => (
                <div key={i}>
                  <h4>{array.title}</h4>
                  {array.skills.map((subarray, x) => (
                    <Badge key={x} bg="secondary">
                      {subarray}
                    </Badge>
                  ))}
                </div>
              ))}

              <Button variant="link" href="https://www.credly.com/badges/d133ed2d-d8e5-4eed-b741-3ff7a8838f80/public_url" target='_blank'>
                <Image className='certificates' src="https://static.wixstatic.com/media/249783_1a05b0ebae2042858b54a09d69ee67d0~mv2.png" alt='Microsoft certified Azure Fundamentals.' />
              </Button>
              <Button variant="link" href="https://www.credly.com/badges/cd80d417-a02c-417b-bff5-b2c1dff94126/public_url" target='_blank'>
                <Image className='certificates' src="https://static.wixstatic.com/media/249783_cb2c77e2cefd40e096f0d2268ab0c459~mv2.png" alt='Microsoft certified Azure AI Fundamentals.' />
              </Button>
            </Col>
        </Row>
      </Container>
    </main>
  );
}