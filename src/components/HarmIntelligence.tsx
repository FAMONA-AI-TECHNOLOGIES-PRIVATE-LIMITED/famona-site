import { useState, useEffect } from 'react';
import { AlertCircle, TrendingDown, FileWarning, Terminal, Skull } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        { label: "Operational Risk", value: "High", icon: TrendingDown, color: "text-red-500", desc: "Potential impact without proper AI governance." },
        { label: "Trust Impact", value: "Critical", icon: Skull, color: "text-amber-500", desc: "Effects on stakeholder confidence and brand." },
        { label: "Compliance Risk", value: "Significant", icon: FileWarning, color: "text-rose-500", desc: "Regulatory and legal considerations." }
    ];

    return (
        <section className="py-24 bg-[#05050a] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Risk Dashboard */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                            <AlertCircle className="w-3 h-3 text-red-500" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-red-400">Live Harm Assessment</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white/90">
                            AI RISK <span className="text-red-600">AWARENESS.</span>
                        </h2>
                        <p className="text-white/30 text-lg font-light leading-relaxed max-w-xl">
                            Understanding and mitigating AI risks is essential for responsible deployment. Proper governance protects your organization.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {riskTiers.map((tier, i) => (
                                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-red-500/30 transition-all group">
                                    <tier.icon className={`w-6 h-6 ${tier.color} mb-4 group-hover:scale-110 transition-transform`} />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{tier.label}</div>
                                    <div className="text-2xl font-black tracking-tight mb-2">{tier.value}</div>
                                    <p className="text-[10px] text-white/20 leading-relaxed italic">{tier.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Black Box Terminal */}
                    <div className="w-full lg:w-[400px]">
                        <Card className="bg-black border-white/10 overflow-hidden shadow-2xl">
                            <CardHeader className="bg-white/5 border-b border-white/5 p-4 flex flex-row items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-blue-400" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">SAFETY_MONITOR</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 font-mono text-[10px] space-y-3 min-h-[300px] flex flex-col justify-end">
                                {logs.map((log, i) => (
                                    <div key={i} className={`flex gap-3 ${log.includes('CRITICAL') || log.includes('ALERT') ? 'text-red-400' : 'text-blue-400/60'}`}>
                                        <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
                                        <span className="flex-1 break-words">{log}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2 text-emerald-400 animate-pulse mt-4">
                                    <span className="w-1 h-3 bg-emerald-400" />
                                    <span>SAFETY_MONITORING_ACTIVE_</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HarmIntelligence;
