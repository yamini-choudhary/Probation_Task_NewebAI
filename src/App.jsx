import Advantage from './components/Advantage';
import Blog from './components/Blog';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import TrustBar from './components/TrustBar';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Advantage />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;