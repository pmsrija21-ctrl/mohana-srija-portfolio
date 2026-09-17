import React from 'react';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import IntroGlobeScreen from './components/IntroGlobeScreen';
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
      {/* Dynamic Cosmic Starfield Background */}
      <CosmicBackground />

      {/* Fixed Glassmorphic Navigation */}
      <Navbar />

      {/* Storyboard Tile 1: Opening Giant Celestial MSP Globe Screen */}
      <IntroGlobeScreen />

      {/* Main Single-Page Sections (6 Continuous Sections) */}
      <main className="relative z-10">
        {/* Section 1: HOME (Storyboard Tile 2) */}
        <HeroSection />

        {/* Section 2: ABOUT (Storyboard Tiles 3 & 4: Quick Stats + About + 3D Journey Cube) */}
        <AboutSection />

        {/* Section 3: PROJECTS (Storyboard Tiles 5 & 6: Reflective Projects + 3D Architecture Diagram Modal) */}
        <ProjectsSection />

        {/* Section 4: SKILLS & EXPERIENCE (Storyboard Tiles 7 & 8: Planetary Constellation + S-Curve Timeline) */}
        <SkillsExperienceSection />

        {/* Section 5: CERTIFICATES & RESUME (Storyboard Tiles 9 & 10: Reflective Carousel + 3D Floating Resume Pedestal) */}
        <CertificatesResumeSection />

        {/* Section 6: CONTACT (Storyboard Tiles 11, 12, 13, 14, 15: Origami Airplane, Recruiter Mode, Terminal, Sunset Thank You) */}
        <ContactSection />
      </main>

      {/* Footer (Storyboard Tile 16) */}
      <Footer />
    </div>
  );
}
