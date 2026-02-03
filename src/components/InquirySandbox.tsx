import { useState } from 'react';
import { Lock, Play, Fingerprint, ShieldCheck, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { logInquiry } from "../lib/InquiryService";

const InquirySandbox = () => {
    const [simulating, setSimulating] = useState(false);
    const [consent, setConsent] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [stats, setStats] = useState({ score: 0, nodeId: '' });

    const runSimulation = () => {
        if (!consent) return;
        setSimulating(true);
        setTimeout(() => {
            setSimulating(false);
            const score = Math.floor(Math.random() * (99.9 - 94.0 + 1) + 94.0);
            const nodeId = `NODE_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
            const res = `ANALYSIS COMPLETE: Risk assessment processed successfully. Alignment Score: ${score}%`;

            setStats({ score, nodeId });
            setResult(res);

            // Agentic Extraction
            logInquiry({
                source: 'SANDBOX',
                result: res,
                details: { vector: "Autonomous Financial Logic Drift", alignment: score }
            });
        }, 2500);
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden border-b border-slate-100">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none -mr-48" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <Badge className="bg-blue-50/10 text-blue-600 border border-blue-100 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest mb-8">Technical Research Lab</Badge>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-slate-900 mb-8 leading-[0.9]">
                            TECH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">LAB.</span>
                        </h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl mb-12">
                            Validated technical probing across AI safety vectors. Execute standardized simulations to evaluate system alignment and stress limits.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Lock, label: "Logic Gate Integrity", status: "Secure", color: "text-emerald-600", bg: "bg-emerald-50" },
                                { icon: Fingerprint, label: "Identity Invariants", status: "Verified", color: "text-blue-600", bg: "bg-blue-50" },
                                { icon: Database, label: "Deterministic Storage", status: "Active", color: "text-indigo-600", bg: "bg-indigo-50" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
                                            <item.icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-900">{item.label}</div>
                                            <div className="text-[9px] text-slate-400 font-mono">STATUS: {item.status}</div>
                                        </div>
                                    </div>
                                    <ShieldCheck className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none opacity-50" />
                        <div className="relative glass-panel rounded-[40px] p-2 border-white/50 shadow-2xl overflow-hidden">
                            <div className="bg-[#fbfcff] rounded-[32px] p-12 lg:p-16 border border-slate-100 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center">
                                {result ? (
                                    <div className="space-y-8 animate-in zoom-in-95 duration-500">
                                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                                            <ShieldCheck className="w-10 h-10 text-emerald-600" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-2">Audit Complete</div>
                                            <h3 className="text-3xl font-black text-slate-900 uppercase italic">Alignment Verified</h3>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-left font-mono">
                                            <div className="text-[10px] text-slate-400 mb-4 pb-2 border-b border-slate-50">NODE: {stats.nodeId}</div>
                                            <div className="text-xs text-slate-600 leading-relaxed font-bold uppercase">{result}</div>
                                        </div>
                                        <Button
                                            onClick={() => { setResult(null); setConsent(false); }}
                                            variant="outline"
                                            className="h-12 px-8 rounded-xl border-slate-200 text-slate-400 font-bold uppercase text-[10px] tracking-widest"
                                        >
                                            Reset Simulation
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-6">Simulation Engine v4.3.0</div>
                                        <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-10">
                                            READY TO <br />
                                            <span className="text-blue-600">AUTHORIZE.</span>
                                        </h3>
                                        <div className="space-y-6 max-w-sm mx-auto mb-12">
                                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                                                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">System Status: Standby</span>
                                            </div>
                                            <label className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-left cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={consent}
                                                    onChange={(e) => setConsent(e.target.checked)}
                                                    className="mt-1 w-4 h-4 rounded border-slate-200 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-[10px] text-blue-900 font-bold leading-relaxed uppercase tracking-widest">
                                                    I authorize the technical audit simulation and agree to the research safety protocols.
                                                </span>
                                            </label>
                                        </div>
                                        <Button
                                            onClick={runSimulation}
                                            disabled={!consent || simulating}
                                            className="bg-blue-600 hover:bg-blue-700 text-white w-full h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] disabled:opacity-20 transition-all shadow-xl shadow-blue-500/20"
                                        >
                                            {simulating ? "PROBING SYSTEM..." : "AUTHORIZE TECH AUDIT"} <Play className="ml-3 w-4 h-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InquirySandbox;
