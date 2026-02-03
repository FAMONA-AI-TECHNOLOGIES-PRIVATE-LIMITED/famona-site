import { useState, useEffect } from 'react';
import { AlertCircle, TrendingDown, FileWarning, Terminal, Skull } from 'lucide-react';

const HarmIntelligence = () => {
    const [logs, setLogs] = useState([
        "INITIALIZING SAFETY MONITOR...",
        "SCANNING: Model output quality assessment",
        "CHECKING: Data handling compliance",
        "VERIFYING: Ethical guidelines adherence",
        "STATUS: MONITORING ACTIVE"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLogs = [
                `SCANNING: Output quality check #${Math.floor(Math.random() * 999)}`,
                `VERIFIED: Compliance checkpoint passed`,
                `MONITORING: Response accuracy validated`,
                `AUDIT: Safety protocol confirmed`
            ];
            setLogs(prev => [...prev.slice(-4), newLogs[Math.floor(Math.random() * newLogs.length)]]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const riskTiers = [
        { label: "Operational Risk", value: "High", icon: TrendingDown, color: "text-red-600", desc: "Potential impact without proper AI governance." },
        { label: "Trust Impact", value: "Critical", icon: Skull, color: "text-amber-600", desc: "Effects on stakeholder confidence and brand." },
        { label: "Compliance Risk", value: "Significant", icon: FileWarning, color: "text-rose-600", desc: "Regulatory and legal considerations." }
    ];

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Risk Dashboard */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-red-600">Live Harm Assessment</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900">
                            AI RISK <span className="text-red-600">AWARENESS.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">
                            Understanding and mitigating AI risks is essential for responsible deployment. Proper governance protects your organization.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {riskTiers.map((tier, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:border-red-100 group">
                                    <tier.icon className={`w-8 h-8 ${tier.color} mb-6 group-hover:scale-110 transition-transform`} />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">{tier.label}</div>
                                    <div className="text-2xl font-black text-slate-900 mb-2">{tier.value}</div>
                                    <div className="text-[10px] text-slate-400 font-light leading-relaxed">{tier.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Console / Log Terminal */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Terminal className="w-24 h-24 text-white" />
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                </div>
                                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest ml-auto">Safety_Log.sys</span>
                            </div>
                            <div className="space-y-4 font-mono">
                                {logs.map((log, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-blue-400 text-[10px] font-bold">[{i}]</span>
                                        <span className="text-white/80 text-[10px] leading-tight break-all uppercase italic">{log}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-700 flex items-center justify-between">
                                <div className="text-[8px] text-slate-500 uppercase tracking-widest font-black">Buffer: 4.2KB</div>
                                <div className="text-[8px] text-emerald-400 flex items-center gap-2 font-black">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    LOGGING_ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HarmIntelligence;
