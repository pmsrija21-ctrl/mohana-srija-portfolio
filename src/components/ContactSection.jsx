import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!formState.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message.' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Thank you, ${formState.name.trim()}! Your message is ready. You can also mail me directly at ${personal.email}.`,
      });

      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#a855f7', '#38bdf8'],
        });
      } catch (err) {}

      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>06 // Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LET'S CONNECT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Have a project, internship opportunity, or question? I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-cyan-400/60 transition-all block"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Email Me</p>
                <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                  {personal.email}
                </p>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-purple-400/60 transition-all block"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
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
              className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-cyan-400/60 transition-all block"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">GitHub</p>
                <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {personal.githubHandle}
                </p>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
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

          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" />
              <span>Send a Message</span>
            </h3>

            {status.message && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-xs ${
                  status.type === 'error'
                    ? 'bg-red-500/15 border border-red-500/30 text-red-300'
                    : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                }`}
              >
                {status.type === 'error' ? (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity, Project inquiry, etc."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center max-w-xl mx-auto pt-10 border-t border-slate-800/60">
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent italic">
            Dream. Build. Grow.
          </p>
          <p className="text-sm font-medium text-slate-400 mt-2">
            Thank You!
          </p>
          <p className="text-base font-extrabold text-white mt-1 tracking-wider uppercase">
            {personal.name}
          </p>
        </div>
      </div>
    </section>
  );
}
