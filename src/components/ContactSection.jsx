import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Terminal, UserCheck, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Terminal State (Storyboard Slide 15)
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    'Welcome to MSP Interactive Terminal v1.0',
    'Type "help" to view available commands: about, projects, skills, experience, certificates, resume, contact',
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let reply = '';

    if (cmd === 'help') {
      reply = 'Available commands: about, projects, skills, experience, certificates, resume, contact, clear';
    } else if (cmd === 'about') {
      reply = `Mohana Srija Puram | B.Tech CSE (2024-2028), Vignan's University | CGPA: 8.15 / 10`;
    } else if (cmd === 'projects') {
      reply = 'Projects: 1. Autonomous Disaster Response AI, 2. Weather Travel Planner (MERN), 3. Hamiltonian Cycle Visualizer, 4. Bridge Crossing Visualizer';
    } else if (cmd === 'skills') {
      reply = 'Skills: C, Python, Java, DSA, OS, MERN Stack (React, Node, Express, MongoDB), Groq Llama 3, OpenAI API, Figma';
    } else if (cmd === 'experience') {
      reply = 'Experience: CodeAlpha Intern, Prodigy InfoTech Intern, Upcoming Unified Mentor (2026), Chess Championship Coordinator';
    } else if (cmd === 'certificates') {
      reply = '11+ verified certifications: Cisco (OS, Python, JS), NPTEL, Unstop (MongoDB, jQuery), Tata Soft Skills';
    } else if (cmd === 'resume') {
      reply = `Downloading resume... Path: ${personal.resumePath}`;
      window.open(personal.resumePath, '_blank');
    } else if (cmd === 'contact') {
      reply = `Email: ${personal.email} | GitHub: ${personal.github}`;
    } else if (cmd === 'clear') {
      setTerminalOutput(['Terminal reset. Type "help" for commands.']);
      setTerminalInput('');
      return;
    } else {
      reply = `Command not recognized: "${cmd}". Type "help" for valid commands.`;
    }

    setTerminalOutput((prev) => [...prev, `mohana@portfolio:~$ ${cmd}`, reply]);
    setTerminalInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Thank you, ${formState.name.trim()}! Your message has been prepared. You can also email me directly at ${personal.email}.`,
      });
      try {
        confetti({ particleCount: 80, spread: 75, origin: { y: 0.7 } });
      } catch (err) {}
      setFormState({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 12: RECRUITER MODE (QUICK OVERVIEW) */}
        {/* ============================================================ */}
        <div className="mb-24 p-6 sm:p-8 rounded-3xl bg-[#060b1e]/90 backdrop-blur-2xl border border-cyan-400/40 shadow-[0_0_40px_rgba(0,240,255,0.2)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Recruiter Mode
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Quick Overview — All in one place for hiring managers
                </p>
              </div>
            </div>

            <a
              href={personal.resumePath}
              download="Mohana-Srija-Puram-Resume.pdf"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_#00f0ff] flex items-center gap-2 transition-all self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-xs">
            <div className="p-4 rounded-xl bg-[#040714] border border-slate-800">
              <span className="text-slate-400 font-mono block mb-1">Candidate Profile</span>
              <p className="font-bold text-white text-sm">Mohana Srija Puram</p>
              <p className="text-cyan-300 font-mono text-[11px] mt-0.5">B.Tech CSE (8.15 CGPA)</p>
            </div>

            <div className="p-4 rounded-xl bg-[#040714] border border-slate-800">
              <span className="text-slate-400 font-mono block mb-1">Core Tech Stack</span>
              <p className="font-bold text-white text-sm">Python, Java, React, MERN</p>
              <p className="text-purple-300 font-mono text-[11px] mt-0.5">DSA, OS, Groq Llama 3</p>
            </div>

            <div className="p-4 rounded-xl bg-[#040714] border border-slate-800">
              <span className="text-slate-400 font-mono block mb-1">Top Projects</span>
              <p className="font-bold text-white text-sm">Disaster AI & Travel MERN</p>
              <p className="text-emerald-400 font-mono text-[11px] mt-0.5">Algorithm Visualizers</p>
            </div>

            <div className="p-4 rounded-xl bg-[#040714] border border-slate-800">
              <span className="text-slate-400 font-mono block mb-1">Internships & Certs</span>
              <p className="font-bold text-white text-sm">3 Industry Internships</p>
              <p className="text-pink-300 font-mono text-[11px] mt-0.5">11+ Verified Certifications</p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 11: LET'S CONNECT & ORIGAMI AIRPLANE */}
        {/* ============================================================ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
              <span>06 // Communication</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Have a project in mind or just want to say hi? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Left Column: Direct Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-cyan-400 transition-all block"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Email</p>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                    {personal.email}
                  </p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-purple-400 transition-all block"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">LinkedIn</p>
                  <p className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {personal.linkedinHandle}
                  </p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-cyan-400 transition-all block"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">GitHub</p>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {personal.githubHandle}
                  </p>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Location</p>
                  <p className="text-sm font-bold text-white">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Neon Origami Paper Airplane + Message Form */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              {/* Origami Paper Airplane & Script Glow from Storyboard Slide 11 */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send Message
                  </h3>
                  <p className="font-serif italic text-cyan-300 text-sm mt-0.5">
                    "Let's Build Together"
                  </p>
                </div>

                {/* Glowing Neon Paper Airplane SVG */}
                <div className="w-12 h-12 text-purple-400 drop-shadow-[0_0_12px_#a855f7] transform -rotate-12 animate-float">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 12l20-9-9 20-2-9-9-2z" />
                  </svg>
                </div>
              </div>

              {status.message && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-400 text-emerald-300 text-xs">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#040714] border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#040714] border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 outline-none"
                />
                <textarea
                  rows={3}
                  placeholder="Your Message..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#040714] border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 15: INTERACTIVE DEVELOPER TERMINAL */}
        {/* ============================================================ */}
        <div className="mb-24 max-w-4xl mx-auto rounded-3xl bg-[#050817] border border-cyan-500/30 p-5 sm:p-6 shadow-[0_0_40px_rgba(0,240,255,0.15)] font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span className="ml-2 text-cyan-300 text-[11px]">mohana@portfolio:~ (Interactive CLI)</span>
            </div>
            <span className="text-[10px] text-slate-500">bash 5.2</span>
          </div>

          <div className="space-y-1 text-slate-300 max-h-48 overflow-y-auto mb-4">
            {terminalOutput.map((line, idx) => (
              <div key={idx} className={line.startsWith('mohana@') ? 'text-cyan-300' : 'text-slate-300'}>
                {line}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-emerald-400">mohana@portfolio:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Try: help, about, projects, skills, resume..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 text-xs"
            />
          </form>
        </div>

        {/* ============================================================ */}
        {/* STORYBOARD SLIDE 13 & 14: SUNSET SILHOUETTE & CLOSING TRIBUTE */}
        {/* ============================================================ */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#170a1a] via-[#090b20] to-[#04091a] border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.15)] text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.2)_0%,transparent_70%)] pointer-events-none" />

          <p className="font-serif italic text-2xl sm:text-3xl text-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] mb-2">
            "Dream. Build. Grow."
          </p>

          <div className="p-6 rounded-2xl bg-[#070b1e]/80 border border-slate-800 max-w-md mx-auto my-6">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Thank You!
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              For visiting my portfolio
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-purple-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
            Ideas + Code + Impact — That's Me.
          </div>
          <div className="text-sm font-bold text-white mt-1">
            {personal.name}
          </div>
        </div>
      </div>
    </section>
  );
}
