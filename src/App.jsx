import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TrustBar from './components/TrustBar';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      {/* 
      <Advantage />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer /> */}
    </div>
  );
}

export default App;