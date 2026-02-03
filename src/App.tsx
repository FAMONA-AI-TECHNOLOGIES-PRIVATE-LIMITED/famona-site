import { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ShieldCheck
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

      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full animate-float opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[150px] rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${scrolled ? 'bg-[#02020a]/90 backdrop-blur-3xl border-white/5 py-4' : 'bg-transparent border-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="relative w-14 h-14">
              <img
                src="/logo-shield.png"
                alt="Famona AI"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter font-display uppercase italic text-white group-hover:text-blue-500 transition-colors">FAMONA <span className="text-blue-500 group-hover:text-white transition-colors">AI</span></span>
              <span className="text-[7px] font-mono tracking-[0.5em] text-white/30 uppercase mt-2 font-bold">Advancing Human-Aligned Intelligence</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
            {['Research', 'Framework', 'Intelligence', 'Governance'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-all hover:tracking-[0.6em] duration-300">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Button
              onClick={() => document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white hover:bg-white hover:text-black rounded-xl px-8 h-12 text-[10px] font-black uppercase tracking-widest transition-all shadow-2xl shadow-blue-500/20"
            >
              System Audit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-48 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-40">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 animate-in fade-in slide-in-from-top-12 duration-1000 shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">Intelligence Hub // v4.3.5 Stable</span>
            </div>

            <h1 className="text-7xl md:text-9xl lg:text-[140px] font-black tracking-tighter leading-[0.75] font-display mb-14 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              REDEFINING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 uppercase italic">TRUST.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/40 max-w-3xl leading-relaxed font-light mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Anchoring probabilistic intelligence in <span className="text-blue-500 italic font-medium">Deterministic Governance</span>. We build the standards for a responsible, human-aligned future.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <Button size="lg" onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-14 h-20 text-[12px] font-black uppercase tracking-[0.2em] shadow-3xl shadow-blue-500/30 group">
                Enter Research Lab <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white/40 hover:text-white hover:bg-white/5 rounded-2xl px-14 h-20 text-[12px] font-black uppercase tracking-[0.2em] transition-all">
                Access Nexus
              </Button>
            </div>
          </div>

          <section id="research" className="mb-40">
            <InquirySandbox />
          </section>

          <section id="framework" className="mb-40">
            <EthicsFramework />
          </section>

          <section id="intelligence" className="mb-40">
            <HarmIntelligence />
          </section>

          <section id="governance" className="mb-40">
            <RegulatoryIQ />
          </section>

          <section id="nexus" className="mb-40">
            <CuriosityLab />
          </section>

          <section id="vault">
            <ResearchNexus />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#010105] border-t border-white/5 pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center gap-4">
                <img src="/logo-shield.png" alt="Famona AI" className="w-12 h-12 object-contain" />
                <span className="text-3xl font-black tracking-tighter font-display uppercase italic">FAMONA <span className="text-blue-500">AI</span></span>
              </div>
              <p className="text-lg text-white/20 leading-relaxed font-light max-w-md italic">
                Protecting the future of intelligence through technical alignment and global ethical standards. Research-first, institutional-grade governance.
              </p>
              <div className="flex items-center gap-6">
                {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 hover:text-blue-500 hover:border-blue-500/50 transition-all group">
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-blue-500">Research</h4>
              <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-white/20">
                <li className="hover:text-white cursor-pointer transition-colors">Safety Probes</li>
                <li className="hover:text-white cursor-pointer transition-colors">Ethics Audit</li>
                <li className="hover:text-white cursor-pointer transition-colors">Compliance</li>
                <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-blue-500">Entity Disclosure</h4>
              <div className="space-y-6 text-sm text-white/30 leading-relaxed max-w-sm">
                <p><span className="text-white/50 font-black uppercase tracking-widest text-[9px] block mb-2">Corporate ID</span> U62011GJ2026PTC171802</p>
                <p><span className="text-white/50 font-black uppercase tracking-widest text-[9px] block mb-2">Contact Vault</span> <span className="text-blue-500 font-bold">contact@famona.ai</span></p>
                <div className="pt-8 border-t border-white/5 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Registered Office: Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/10 mb-2">© 2026 FAMONA AI TECHNOLOGIES PRIVATE LIMITED</span>
              <span className="text-[10px] text-white/20 font-light italic">Institutional Research & Alignment Protocol</span>
            </div>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-white/10">
              <span className="hover:text-white cursor-pointer transition-colors">Statutory Disclosures</span>
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Substrate</span>
            </div>
          </div>
        </div>
      </footer>
      <EthicsChat />
    </div>
  );
};

export default FamonaVision;
