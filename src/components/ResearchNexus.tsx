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
            org: "OECD (Open Access)",
            desc: "Global policy benchmarks for trustworthy and responsible AI development.",
            link: "https://oecd.ai/en/ai-principles"
        },
        {
            title: "UNESCO Recommendation on AI Ethics",
            org: "UNESCO (Open Access)",
            desc: "The first global standard-setting instrument on the ethics of artificial intelligence.",
            link: "https://en.unesco.org/artificial-intelligence/ethics"
        },
        {
            title: "Stanford HAI AI Index Report",
            org: "Stanford (Open Access)",
            desc: "Annual comprehensive report on AI trends, investment, and governance worldwide.",
            link: "https://aiindex.stanford.edu"
        },
        {
            title: "IBM AI Fairness 360",
            org: "IBM (Apache 2.0)",
            desc: "Open-source toolkit for detecting and mitigating bias in machine learning models.",
            link: "https://aif360.mybluemix.net"
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* DPIIT Recognition Summary */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                            <Landmark className="w-3 h-3 text-blue-600" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">Registered Company</span>
                        </div>

                        <h2 className="text-4xl font-black tracking-tighter uppercase italic text-slate-900">
                            INNOVATION <span className="text-slate-300 italic">&</span> LEGITIMACY.
                        </h2>

                        <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                                <ShieldCheck className="w-32 h-32 text-slate-900" />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <p className="text-slate-500 font-light leading-relaxed">
                                    Famona AI Technologies Private Limited is an Indian entity (DPIIT Registered) dedicated to the mathematical and technical alignment of intelligence systems.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-200">
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Entity ID</div>
                                        <div className="text-xs font-bold text-slate-900 uppercase">U62011GJ2026PTC171802</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Status</div>
                                        <div className="text-xs font-bold text-slate-900 uppercase flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                            REGISTERED_ENTITY
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                                <Library className="w-5 h-5 text-slate-400" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-relaxed">
                                DOCUMENT REPOSITORY <br />
                                <span className="text-blue-600">PUBLIC_ACCESS</span>
                            </div>
                        </div>
                    </div>

                    {/* Open Research Links */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-4">
                            {researches.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 transition-all flex items-center justify-between"
                                >
                                    <div className="space-y-2 max-w-xl">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">{item.title}</span>
                                            <Badge variant="outline" className="text-[8px] border-slate-200 text-slate-400 font-bold uppercase tracking-widest">
                                                {item.org}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-slate-400 font-light italic">{item.desc}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchNexus;
