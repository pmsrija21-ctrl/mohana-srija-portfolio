import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Terminal CLI State
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Portfolio Interactive CLI initialized. Type "help" for commands.', type: 'sys' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `mohana@portfolio:~$ ${terminalInput}`, type: 'user' }];

    switch (cmd) {
      case 'help':
        newHistory.push({ text: 'Available commands: about, skills, projects, experience, certificates, resume, contact, clear', type: 'res' });
        break;
      case 'about':
        newHistory.push({ text: `Mohana Srija Puram | B.Tech CSE (2024-2028) @ Vignan University | CGPA: 8.15`, type: 'res' });
        break;
      case 'skills':
        newHistory.push({ text: 'Core Skills: Python, Java, React.js, Node.js, Express, MongoDB, MySQL, C++, Groq LLM', type: 'res' });
        break;
      case 'projects':
        newHistory.push({ text: 'Projects: Autonomous Disaster Response, Weather Travel Planner, Hamiltonian Cycle, Bridge Crossing', type: 'res' });
        break;
      case 'experience':
        newHistory.push({ text: 'Internships: CodeAlpha (Web Dev), Prodigy InfoTech (Web Dev), Unified Mentor (Upcoming 2026)', type: 'res' });
        break;
      case 'certificates':
        newHistory.push({ text: 'Certificates: Cisco (Python, JS, OS), NPTEL (Management), Unstop (MongoDB, jQuery), Tata (Interview Skills)', type: 'res' });
        break;
      case 'resume':
        newHistory.push({ text: `Resume downloadable at: ${personal.resumePath}`, type: 'res' });
        break;
      case 'contact':
        newHistory.push({ text: `Email: ${personal.email} | Location: ${personal.location} | GitHub: ${personal.github}`, type: 'res' });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        newHistory.push({ text: `Command not found: "${cmd}". Type "help" to inspect commands.`, type: 'err' });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  return (
    <section id="contact" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>06 // Communications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-pink-200/70 text-xs sm:text-sm mt-2 font-mono max-w-xl mx-auto">
            Open to software engineering, AI/ML roles, and impactful collaborations.
          </p>
        </div>

        {/* Storyboard Slide 12: Recruiter Mode Banner */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1b0634] via-[#120528] to-[#1b0634] border border-pink-400/40 shadow-[0_0_45px_rgba(236,72,153,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono uppercase font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Recruiter Mode Active</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Hiring for 2026 / 2028 Tech Roles?
            </h3>
            <p className="text-xs sm:text-sm text-pink-100/80 mt-1 max-w-xl">
              Quick access to verified credentials, 8.15 CGPA transcript, and engineering portfolios for your candidate pipeline.
            </p>
          </div>

          <a
            href={personal.resumePath}
            download="Mohana-Srija-Puram-Resume.pdf"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] whitespace-nowrap transition-all"
          >
            Direct Resume Download
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Storyboard Slide 11 - Origami Airplane & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Origami Paper Airplane matching Slide 11 */}
            <div className="p-8 rounded-3xl bg-[#13052a]/85 backdrop-blur-xl border border-purple-900/60 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15)_0%,transparent_70%)] pointer-events-none" />

              {/* Glowing Origami Paper Airplane SVG */}
              <svg viewBox="0 0 160 100" className="w-36 h-24 mb-4 drop-shadow-[0_0_20px_#ec4899]">
                <polygon points="10,50 150,15 100,85" fill="none" stroke="#ec4899" strokeWidth="2.5" />
                <polygon points="10,50 150,15 90,52" fill="none" stroke="#c084fc" strokeWidth="2" />
                <polygon points="90,52 100,85 110,56" fill="none" stroke="#a855f7" strokeWidth="2" />
                <line x1="10" y1="50" x2="90" y2="52" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              <h4 className="text-xl font-bold font-serif italic text-pink-300 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)] mb-2">
                "Let's Build Together"
              </h4>
              <p className="text-xs text-pink-100/70 font-mono">
                Turning ambitious ideas into scalable architectures.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="p-4 rounded-2xl bg-[#120528]/80 border border-purple-900/60 hover:border-pink-400 text-pink-100 flex items-center gap-4 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-950/80 border border-pink-500/30 text-pink-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-pink-400">Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                    {personal.email}
                  </div>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#120528]/80 border border-purple-900/60 hover:border-purple-400 text-purple-100 flex items-center gap-4 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-purple-400">LinkedIn</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    Mohana Srija Puram
                  </div>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#120528]/80 border border-purple-900/60 hover:border-pink-400 text-pink-100 flex items-center gap-4 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-950/80 border border-pink-500/30 text-pink-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-pink-400">GitHub</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                    pmsrija21-ctrl
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Message Form & CLI Terminal */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Message Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#120528]/90 backdrop-blur-xl border border-purple-900/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] text-left">
              <h4 className="text-lg font-bold text-white mb-4">
                Send a Direct Message
              </h4>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-400/50 text-emerald-300 text-center animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-emerald-400" />
                  <p className="font-bold">Thank You! Message Received.</p>
                  <p className="text-xs text-emerald-200/80 mt-1">
                    I will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-pink-300 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0316] border border-purple-900 text-white text-xs focus:outline-none focus:border-pink-400 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-pink-300 uppercase mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@tech.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0316] border border-purple-900 text-white text-xs focus:outline-none focus:border-pink-400 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-pink-300 uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Full-Time Engineering Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0316] border border-purple-900 text-white text-xs focus:outline-none focus:border-pink-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-pink-300 uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohana, we reviewed your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0316] border border-purple-900 text-white text-xs focus:outline-none focus:border-pink-400 font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Storyboard Slide 15: Developer Terminal CLI */}
            <div className="rounded-3xl bg-[#0a0316] border border-purple-900/80 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-left">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#14062c] border-b border-purple-900/60 text-xs font-mono text-pink-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-pink-200/60">mohana@portfolio:~$</span>
                </div>
                <TerminalIcon className="w-3.5 h-3.5 text-pink-400" />
              </div>

              <div className="p-4 font-mono text-xs max-h-48 overflow-y-auto space-y-1">
                {terminalHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${
                      item.type === 'user'
                        ? 'text-pink-300'
                        : item.type === 'err'
                        ? 'text-rose-400'
                        : item.type === 'sys'
                        ? 'text-purple-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex border-t border-purple-900/60">
                <span className="px-3 py-2 text-xs font-mono text-pink-400 bg-[#0c031c]">
                  $
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help' or 'about'..."
                  className="flex-1 px-2 py-2 bg-[#0a0316] text-xs font-mono text-white focus:outline-none"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Storyboard Slide 13 & 14: Sunset Tribute Card */}
        <div className="mt-20 max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#24083c] via-[#140526] to-[#080212] border border-pink-500/40 text-center relative overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.25)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.3)_0%,transparent_70%)] pointer-events-none" />

          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Thank You!
          </h3>
          <p className="text-base sm:text-lg text-pink-300 font-mono mb-4">
            For visiting my portfolio
          </p>

          <p className="italic text-lg sm:text-xl font-serif text-pink-200/90 mb-6 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            "Dream. Build. Grow."
          </p>

          <div className="inline-block px-5 py-2 rounded-full bg-purple-950/80 border border-pink-400/50 text-pink-300 text-xs font-mono">
            Ideas + Code + Impact — That's Me.
          </div>
        </div>
      </div>
    </section>
  );
}
