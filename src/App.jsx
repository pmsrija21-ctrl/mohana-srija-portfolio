import React from 'react';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsExperienceSection from './components/SkillsExperienceSection';
import CertificatesResumeSection from './components/CertificatesResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Cosmic Interactive Starfield Background */}
      <CosmicBackground />

      {/* 2. Fixed Glassmorphism Navigation */}
      <Navbar />

      {/* 3. Main Single-Page Content (Exactly 6 Sections) */}
      <main className="relative z-10">
        {/* Section 1: HOME */}
        <HeroSection />

        {/* Section 2: ABOUT */}
        <AboutSection />

        {/* Section 3: PROJECTS */}
        <ProjectsSection />

        {/* Section 4: SKILLS & EXPERIENCE */}
        <SkillsExperienceSection />

        {/* Section 5: CERTIFICATES & RESUME */}
        <CertificatesResumeSection />

        {/* Section 6: CONTACT */}
        <ContactSection />
      </main>

      {/* 4. Sleek Futuristic Footer */}
      <Footer />
    </div>
  );
}
