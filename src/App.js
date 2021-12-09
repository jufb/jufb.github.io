import { React } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './views/home';
import { About } from './views/about';
import { Projects } from './views/portfolio/projects';
import { ProjectManagement } from './views/portfolio/projectManagement';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <ProjectManagement />
      <Footer />
    </div>
   );
}
export default App;