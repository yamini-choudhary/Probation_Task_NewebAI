import Advantage from './components/Advantage';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
      <Testimonials />
      <FAQ />
      {/* 
      
      <Pricing />
      <Blog />
      <CTA />
      <Footer /> */}
    </div>
  );
}

export default App;