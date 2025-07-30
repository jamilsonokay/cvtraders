'use client';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Seções da Homepage
import HeroSection from './components/sections/HeroSection';
import FeaturedInSection from './components/sections/FeaturedInSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import FeaturesSection from './components/sections/FeaturesSection';
import CalculatorSection from './components/sections/CalculatorSection';
import MissionSection from './components/sections/MissionSection';
import StrategiesSection from './components/sections/StrategiesSection';
import FaqSection from './components/sections/FaqSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <HeroSection />
        {/* <FeaturedInSection /> */}
        <TestimonialsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CalculatorSection />
        <MissionSection />
        <StrategiesSection />
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
}
