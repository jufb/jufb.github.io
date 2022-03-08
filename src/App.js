import { React } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './views/home';
import { About } from './views/about';
import { Projects } from './views/projects';
import { Skills } from './views/projectSkills';
import { Contact } from './views/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer year={new Date().getFullYear()} />
    </div>
   );
}
export default App;