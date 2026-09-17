import React from 'react';
import SkillsConstellation from './SkillsConstellation';
import ExperienceTimeline from './ExperienceTimeline';

export default function SkillsExperienceSection() {
  return (
    <section id="skills-experience" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Storyboard Slide 7: My Skills Orbital Constellation */}
        <SkillsConstellation />

        {/* Storyboard Slide 8: Experience Timeline S-Curve */}
        <ExperienceTimeline />
      </div>
    </section>
  );
}
