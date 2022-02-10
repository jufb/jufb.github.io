import { React } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './views/home';
import { About } from './views/about';
import { Projects } from './views/projects';
import { ProjectManagement } from './views/projectManagement';
import { Contact } from './views/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <ProjectManagement />
      <Contact />
      <Footer />
    </div>
   );
}
export default App;