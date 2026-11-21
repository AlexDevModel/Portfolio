import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ModelShowcase from './components/ModelShowcase';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navigation/>
    <main id="main-content">
      <Hero/>
      <ProjectGallery/>
      <ModelShowcase/>
      <About/>
    </main>
    <Footer/>
  </>;
}