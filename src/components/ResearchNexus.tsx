import { ExternalLink, Library, ShieldCheck, Landmark } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ResearchNexus = () => {
    const researches = [
        {
            title: "NIST AI Risk Management Framework",
            org: "NIST (Public Domain)",
            desc: "Foundational technical standards for managing AI risks and building trustworthy AI systems.",
            link: "https://www.nist.gov/itl/ai-risk-management-framework"
        },
        {
            title: "OECD AI Principles",
            org: "OECD (Open License)",
            desc: "Global policy benchmarks for trustworthy and responsible AI development.",
            link: "https://oecd.ai/en/ai-principles"
        },
        {
            title: "UNESCO Recommendation on AI Ethics",
            org: "UNESCO (Open Access)",
            desc: "The first global standard-setting instrument on the ethics of artificial intelligence.",
            link: "https://en.unesco.org/artificial-intelligence/ethics"
        }
    ];

    return (
        <section className="py-24 bg-[#02020a] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* DPIIT Recognition Summary */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <Landmark className="w-3 h-3 text-blue-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Registered Company</span>
                        </div>

                        <h2 className="text-4xl font-black tracking-tighter uppercase italic italic">
                            INNOVATION <span className="text-white/40 italic">&</span> LEGITIMACY.
                        </h2>

                        <div className="space-y-6">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 group mb-6">
                                <img
                                    src="/brand-banner.png"
                                    alt="Famona AI Governance Substrate"
                                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#02020a] via-transparent to-transparent" />
                            </div>

                            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden">
                                <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-3">About Us</div>
                                <div className="space-y-2 text-sm">
                                    <p className="text-white/40 leading-relaxed">
                                        FAMONA AI Technologies is a registered private limited company focused on AI ethics research and responsible AI solutions.
                                    </p>
                                    <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
                                        <div className="text-[9px] font-black uppercase tracking-widest text-white/20">Contact</div>
                                        <div className="text-[10px] text-blue-400 font-bold">contact@famona.ai</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-white/30 font-light italic">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                "Working towards the substantial improvement of AI transparency and statutory alignment for Indian enterprises."
                            </div>
                        </div>
                    </div>

                    {/* Research Library */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-10">
                            <Library className="w-5 h-5 text-blue-400" />
                            <h3 className="text-xl font-black uppercase tracking-widest text-white/90">RESEARCH NEXUS</h3>
                        </div>

                        <div className="space-y-6">
                            {researches.map((item, i) => (
                                <div key={i} className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all cursor-default">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <Badge variant="outline" className="border-blue-500/20 text-blue-400 text-[8px] font-black uppercase tracking-widest mb-3">{item.org}</Badge>
                                            <h4 className="text-lg font-bold text-white/90 group-hover:text-blue-400 transition-colors uppercase italic">{item.title}</h4>
                                        </div>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-white/20 hover:text-white transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <p className="text-sm text-white/30 font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchNexus;
