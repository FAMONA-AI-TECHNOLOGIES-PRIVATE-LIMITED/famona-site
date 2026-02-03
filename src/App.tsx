import { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import EthicsFramework from './components/EthicsFramework';
import HarmIntelligence from './components/HarmIntelligence';
import RegulatoryIQ from './components/RegulatoryIQ';
import CuriosityLab from './components/CuriosityLab';
import ResearchNexus from './components/ResearchNexus';
import InquirySandbox from './components/InquirySandbox';
import EthicsChat from './components/EthicsChat';
import SEO from './components/SEO';

const FamonaVision = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#02020a] text-white selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      <SEO />
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-indigo-900/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#02020a]/80 backdrop-blur-2xl border-white/5 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-14 h-14">
              <img
                src="/logo-shield.png"
                alt="Famona AI"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter font-display uppercase italic text-white/90">FAMONA <span className="text-blue-500">AI</span></span>
              <span className="text-[7px] font-mono tracking-[0.4em] text-white/30 uppercase mt-1.5 font-bold">Technical Alignment & Ethics</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
            <a href="#lab" className="hover:text-blue-400 transition-colors">Tech Lab</a>
            <a href="#framework" className="hover:text-blue-400 transition-colors">Safety Framework</a>
            <a href="#risks" className="hover:text-blue-400 transition-colors">Harm Intel</a>
            <a href="#diagnostic" className="hover:text-blue-400 transition-colors">Diagnostic IQ</a>
            <a href="#research" className="hover:text-blue-400 transition-colors">Nexus</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/40 hover:text-white hover:bg-white/5">
              <Search className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white hover:bg-white hover:text-black rounded-lg px-6 h-10 text-[9px] font-black uppercase tracking-widest transition-all"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-48 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-12 animate-in fade-in slide-in-from-top-12 duration-1000">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50">AI Ethics Research Initiative</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[130px] font-black tracking-tighter leading-[0.75] font-display mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              INTELLIGENCE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 uppercase italic text-white/90">HUB.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/30 max-w-2xl leading-relaxed font-light mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Advancing industrial-grade AI safety through rigorous technical auditing and human-aligned framework research.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button size="lg" onClick={() => {
                const element = document.getElementById('lab');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-12 h-16 text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 group">
                Enter Research Lab <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white/10 text-white/40 hover:text-white hover:bg-white/5 rounded-xl px-12 h-16 text-[11px] font-black uppercase tracking-[0.2em] transition-all"
              >
                Access Research Vault
              </Button>
            </div>
          </div>
        </div>

        <section id="lab">
          <InquirySandbox />
        </section>

        <section id="framework">
          <EthicsFramework />
        </section>

        <section id="risks">
          <HarmIntelligence />
        </section>

        <section id="diagnostic">
          <RegulatoryIQ />
        </section>

        <section id="stories">
          <CuriosityLab />
        </section>

        <section id="research">
          <ResearchNexus />
        </section>
      </main >

      {/* Footer */}
      < footer className="bg-[#02020a] border-t border-white/5 pt-24 pb-12 relative z-10" >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-shield.png"
                  alt="Famona AI Shield"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-black tracking-tighter font-display uppercase italic text-white/90">FAMONA <span className="text-blue-500">AI</span></span>
              </div>
              <p className="text-sm text-white/20 leading-relaxed font-light">
                Institutional research and technical alignment of intelligence systems. Advancing global standards for responsible AI development.
              </p>
              <div className="flex items-center gap-6 text-white/10">
                <a href="https://twitter.com/famona_ai" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
                <a href="https://github.com/FAMONA-AI-TECHNOLOGIES-PRIVATE-LIMITED" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://linkedin.com/company/famona-ai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                </a>
                <a href="mailto:contact@famona.ai">
                  <Mail className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-10 text-white/20">Focus Areas</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">AI Safety</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Ethics Research</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Compliance</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Best Practices</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-10 text-white/20">Open Resources</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                <li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors">NIST AI RMF</a></li>
                <li><a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors">OECD AI Principles</a></li>
                <li><a href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors">UNESCO AI Ethics</a></li>
                <li><a href="https://aiindex.stanford.edu" target="_blank" rel="noopener" className="hover:text-blue-400 transition-colors">Stanford HAI Index</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-10 text-white/20">Statutory Info</h4>
              <div className="space-y-3 text-[10px] text-white/30 leading-relaxed">
                <p><span className="text-white/50">CIN:</span> U62011GJ2026PTC171802</p>
                <p><span className="text-white/50">Email:</span> <span className="text-blue-400">contact@famona.ai</span></p>
                <p className="text-[9px] text-white/20 pt-2 border-t border-white/5">
                  Registered Office: Gujarat, India
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 mb-2">© 2026 FAMONA AI TECHNOLOGIES PRIVATE LIMITED</span>
              <span className="text-[9px] text-white/20">All Rights Reserved</span>
            </div>
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-white/20">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer >
      <EthicsChat />
    </div >
  );
};

export default FamonaVision;
