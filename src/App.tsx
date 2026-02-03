import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Shield,
  Globe,
  Lock,
  Cpu,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import SEO from './components/SEO';

const FamonaVision = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    { title: "Ethical Alignment", icon: Globe, desc: "Synchronizing intelligence systems with universal human values and rigorous ethical standards." },
    { title: "Robust Governance", icon: Shield, desc: "Implementing transparent oversight and accountability frameworks for institutional AI deployment." },
    { title: "Data Integrity", icon: Lock, desc: "Ensuring the highest standards of privacy and security via advanced encryption protocols." },
    { title: "Technical Excellence", icon: Cpu, desc: "Maintaining mathematical precision in system reliability and predictable AI behavior." }
  ];

  const researchLinks = [
    { title: "NIST AI Risk Management", org: "NIST", link: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { title: "OECD AI Principles", org: "OECD", link: "https://oecd.ai/en/ai-principles" },
    { title: "UNESCO AI Ethics", org: "UNESCO", link: "https://en.unesco.org/artificial-intelligence/ethics" }
  ];

  return (
    <div className="min-h-screen bg-[#02020a] text-white selection:bg-blue-600/30 font-sans antialiased overflow-x-hidden">
      <SEO />

      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#02020a]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo-shield.png" alt="Famona AI" className="w-8 h-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight uppercase">FAMONA AI</span>
              <span className="text-[7px] font-bold tracking-[0.4em] text-slate-500 uppercase">Technologies</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Framework', 'Research', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">{item}</a>
            ))}
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-6 text-[10px] uppercase font-bold tracking-widest h-10">Contact</Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Human-Aligned Intelligence</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[1.0] mb-12">
                ADVANCING GLOBAL<br />
                <span className="text-slate-500 uppercase">ETHICAL STANDARDS.</span>
              </h1>

              <p className="max-w-xl text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                Famona AI Technologies specializes in the technical and ethical alignment of intelligence systems, providing robust frameworks for institutional deployment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#2563eb] text-white hover:bg-blue-700 h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all group">
                  Institutional Framework <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[11px]">
                  Research Nexus
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="framework" className="py-32 border-t border-white/5 relative bg-[#02020a]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-10 rounded-[40px] border border-white/5 bg-white/[0.01] transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-4">{pillar.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed italic">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-32 border-t border-white/5 bg-[#03030f]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight uppercase">REGULATORY<br />COMPLIANCE</h2>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  We align technical innovation with global regulatory benchmarks to ensure safe and accountable intelligence deployment.
                </p>
                <div className="space-y-4 pt-4 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Entity ID</span>
                    <span className="text-slate-400">U62011GJ2026PTC171802</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 gap-4">
                {researchLinks.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="p-8 rounded-[32px] border border-white/5 bg-white/[0.01] hover:border-blue-500/30 transition-all flex items-center justify-between group">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-2 block">{item.org}</span>
                      <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 relative border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic tracking-tight uppercase">INSTITUTIONAL INQUIRY</h2>
            <p className="text-slate-500 max-w-xl mx-auto mb-12 font-light text-lg">Request information regarding our alignment research and advisory services.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Institutional Email"
                className="w-full h-16 bg-white/[0.02] border border-white/10 rounded-full px-8 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-white"
              />
              <Button className="w-full sm:w-auto bg-[#2563eb] text-white h-16 px-12 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all">Submit</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#02020a]">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <img src="/logo-shield.png" alt="Famona AI" className="w-6 h-6 object-contain" />
                <span className="text-lg font-bold italic tracking-tighter uppercase">FAMONA AI</span>
              </div>
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest leading-loose max-w-sm">
                FAMONA AI TECHNOLOGIES PRIVATE LIMITED.<br />
                CIN: U62011GJ2026PTC171802 | ISO 6523: PT-PTC-171802
              </p>
            </div>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FamonaVision;
