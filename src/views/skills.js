import { Container, Image, Button, Badge } from 'react-bootstrap';
import dataSkills from './skills.json';

export function Skills() {
  return (
    <main id="Skills" role="main" className='bg-primary text-center'>

      <Container className='jumbotron text-dark'>
        <h1>Skills</h1>
      </Container>
      <Container className='text-dark'>
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
      </Container>
  
    </main> 
  );
}