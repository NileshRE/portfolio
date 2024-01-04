import '@fontsource-variable/fira-code';
import Navbar from './components/NavBar.tsx';
import IntroSection from './components/IntroSection.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';

function App() {
  
  return (
    <>
      <Navbar />
      <IntroSection />
      <Skills />
      <Projects />
    </>
  )
}

export default App
