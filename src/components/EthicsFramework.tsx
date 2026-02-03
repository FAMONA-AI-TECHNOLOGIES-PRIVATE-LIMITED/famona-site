import { Shield, Globe, Lock, Cpu, Activity } from 'lucide-react';

const EthicsFramework = () => {
    const layers = [
        { title: "Risk Identification", icon: Globe, color: "text-blue-400", nodes: 1 },
        { title: "Governance Controls", icon: Shield, color: "text-emerald-400", nodes: 3 },
        { title: "Standardized Compliance", icon: Lock, color: "text-amber-400", nodes: 5 },
        { title: "Foundation Standards", icon: Cpu, color: "text-indigo-400", nodes: 7 }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-white">
            {/* Background Unified Field Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic text-slate-900">
                        AI ETHICS<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">FRAMEWORK</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        A comprehensive approach to responsible AI development and deployment. Building trust through transparent governance.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-12">
                    {layers.map((layer, lIndex) => (
                        <div key={lIndex} className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 mb-2">
                                <layer.icon className={`w-4 h-4 ${layer.color.replace('400', '600')}`} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">{layer.title}</span>
                            </div>

                            <div className="flex justify-center gap-4">
                                {Array.from({ length: layer.nodes }).map((_, nIndex) => (
                                    <div key={nIndex} className="relative group">
                                        {/* The Honeycomb Hexagon */}
                                        <div className="w-16 h-18 bg-white border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:bg-blue-600 hover-glow shadow-xl"
                                            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
                                            <Activity className={`w-5 h-5 opacity-20 group-hover:opacity-100 text-[#4F46E5] group-hover:text-white transition-opacity duration-300`} />
                                        </div>
                                        {/* Connecting Lines (Conceptual) */}
                                        {lIndex < layers.length - 1 && (
                                            <div className="absolute top-full left-1/2 w-[2px] h-12 bg-gradient-to-b from-slate-100 to-transparent -translate-x-1/2 pointer-events-none" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { label: "Risk Assessment", color: "bg-blue-500" },
                        { label: "Bias Detection", color: "bg-emerald-500" },
                        { label: "Safety Monitoring", color: "bg-amber-500" },
                        { label: "Audit Trail", color: "bg-indigo-500" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-xl">
                            <div className={`w-2 h-2 rounded-full ${item.color}`} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .w-16 { width: 4rem; }
        .h-18 { height: 4.5rem; }
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>
        </section>
    );
};

export default EthicsFramework;
