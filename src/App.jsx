import Header from './componentes/Header';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Skills from './componentes/Skills';
import Projects from './componentes/Projects';
import Footer from './componentes/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Aquí le enviamos las props al PRIMER componente (Header) */}
      <Header nombre="Lisandro Paz" cargo="Frontend Developer Junior" />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      {/* Aquí le enviamos las props al SEGUNDO componente (Footer) */}
      <Footer email="tuemail@utn.frt.edu.ar" github="github.com/lisandropaz" />
    </div>
  );
}