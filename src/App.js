import { React } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './views/home';
import { About } from './views/about';
import { Skills } from './views/skills';
import { Projects } from './views/projects';
import { Contact } from './views/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer year={new Date().getFullYear()} />
    </div>
   );
}
export default App;