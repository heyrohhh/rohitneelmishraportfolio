import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-10">
        <Hero />
        <About />
        <Skills />
        <div className="space-y-20"> 
          <Projects />
          <Experience />
        </div>
        <Contact />
      </main>
    </div>
  );
}

export default App;