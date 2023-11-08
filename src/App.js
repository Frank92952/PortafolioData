import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter como Router
import Home from './components/pages/Home';
import About from './components/pages/About';
import Lenguaje from './components/pages/Lenguaje';
import Contenido from './components/pages/Contenido';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router> {/* Utiliza BrowserRouter en lugar de Router */}
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='lenguaje'>
          <Lenguaje />
        </section>
        <section id='contenido'>
          <Contenido />
        </section>
        <section id='contacto'>
          <Contact />
        </section>
       
        
      
      
      </Router>
      <Footer />
    </div>
  );
}

export default App;
