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
import TelemetryPulse from './components/TelemetryPulse';
import AlignmentHub from './components/AlignmentHub';
import SEO from './components/SEO';

const FamonaVision = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    console.log("[FAMONA_AI] Core restoration active.");
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans antialiased overflow-x-hidden">
      <SEO />
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-3xl border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <img src="/logo-shield.png" alt="FS" className="w-6 h-6 object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase italic">FAMONA <span className="text-blue-600">AI.</span></span>
              <span className="text-[8px] font-bold tracking-[0.3em] text-slate-400 uppercase">Sovereign Protocol</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {['Protocol', 'Intelligence', 'Governance', 'Research'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">{item}</a>
            ))}
            <Button className="bg-slate-900 text-white rounded-xl px-8 h-12 font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all">Portal</Button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative pt-48 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/50 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50/50 blur-[150px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-50 border border-blue-100 mb-12">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">v4.3.1 Active // GOS Mainnet Ready</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[130px] font-black tracking-tighter uppercase italic leading-[0.75] mb-12">
              RESPONSIBLE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI GENESIS.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-slate-400 text-xl font-light leading-relaxed mb-16">
              Architecture for unbreakable alignment. We build the protocols that ensure synthetic intelligence remains a permanent vector for human progress.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl shadow-blue-500/20 group">
                Establish Protocol <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-all sm:w-auto h-16 px-12 rounded-2xl border-slate-200 font-black uppercase tracking-[0.2em] text-[11px] text-slate-400 hover:bg-slate-50 transition-all">
                Technical Nexus
              </Button>
            </div>
          </div>
        </section>

        <section id="protocol"><EthicsFramework /></section>
        <section id="intelligence"><HarmIntelligence /></section>
        <section id="governance"><RegulatoryIQ /></section>

        <div className="bg-slate-50 py-32 border-y border-slate-100 overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <TelemetryPulse />
        </div>

        <section id="research"><ResearchNexus /></section>

        <AlignmentHub />
        <InquirySandbox />
        <CuriosityLab />

        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">JOIN THE ALIGNMENT ERA.</h2>
            <p className="text-white/40 max-w-xl mx-auto mb-12 font-light text-lg">Deploy the Sovereign GOS protocol within your institutional infrastructure and lead the responsible AI transition.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <input
                type="email"
                placeholder="Institutional Email"
                className="w-full sm:w-80 h-16 bg-white/5 border border-white/10 rounded-2xl px-6 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <Button className="w-full sm:w-auto bg-white text-black h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all">Request Access</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center">
                  <img src="/logo-shield.png" alt="FS" className="w-5 h-5 object-contain brightness-0 invert" />
                </div>
                <span className="text-xl font-black italic tracking-tighter">FAMONA <span className="text-blue-600">AI.</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">The global standard for AI alignment and ethical intelligence frameworks. Founded on the principle of unavoidable human progress.</p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-slate-300">Research</h4>
              <ul className="space-y-4">
                {['Alignments', 'Safety Hub', 'Gov IQ', 'Case Studies'].map((item) => (
                  <li key={item}><a href="#" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-slate-300">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Ethics Charter', 'GOS Protocol', 'Contact'].map((item) => (
                  <li key={item}><a href="#" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">© 2026 FAMONA AI TECHNOLOGIES PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">CIN: U62011GJ2026PTC171802</span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">ISO 6523: PT-PTC-171802</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FamonaVision;
