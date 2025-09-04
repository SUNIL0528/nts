import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Manufacturing from './components/Manufacturing';
import Industries from './components/Industries';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Manufacturing />
      <Industries />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;