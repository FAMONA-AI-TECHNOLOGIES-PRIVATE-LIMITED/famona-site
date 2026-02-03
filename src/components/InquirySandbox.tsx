import { useState } from 'react';
import { Lock, Play, Fingerprint, ShieldCheck, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { logInquiry } from "../lib/InquiryService";
// Removed AlignmentCertificate as per brand guidelines

const InquirySandbox = () => {
    const [simulating, setSimulating] = useState(false);
    const [consent, setConsent] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const runSimulation = () => {
        if (!consent) return;
        setSimulating(true);
        setTimeout(() => {
            setSimulating(false);
            const score = Math.floor(Math.random() * (99.9 - 94.0 + 1) + 94.0);
            const resultText = `ANALYSIS COMPLETE: Risk assessment processed successfully. Alignment Score: ${score}%`;

            setResult(resultText);
            // Certificate generation disabled as per brand guidelines

            // Institutional Logging
            logInquiry({
                source: 'SANDBOX',
                result: resultText,
                details: { vector: "Institutional Alignment Probe", alignment: score }
            });
        }, 2500);
    };

    return (
        <section className="py-32 bg-[#02020a] relative overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -mr-48" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl">Technical Research Lab</Badge>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-white/90 mb-10 leading-[0.85] font-display">
                            RESEARCH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">SANDBOX.</span>
                        </h2>
                        <p className="text-white/30 text-2xl font-light leading-relaxed max-w-xl mb-16 italic">
                            Execute standardized technical probes across sensitive AI safety vectors. Validated alignment diagnostics.
                        </p>

                        <div className="space-y-4 mb-12">
                            {[
                                { icon: Fingerprint, text: "Anonymized Risk Benchmarking" },
                                { icon: Database, text: "Cross-Industry Threat Analysis" },
                                { icon: ShieldCheck, text: "Compliance Assessment" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-sm text-white/50 group cursor-default">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <item.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="p-8 bg-[#0d0d15] border border-white/10 rounded-[32px] shadow-3xl relative z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />

                            <div className="space-y-6 relative z-20">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 flex justify-between">
                                    <span>System Status: Standby</span>
                                    <span className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                                    </span>
                                </div>

                                <div className="p-6 bg-black/40 border border-white/5 rounded-2xl">
                                    <select className="w-full bg-transparent text-white border-b border-white/10 pb-2 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium">
                                        <option>Institutional Alignment Probe</option>
                                        <option>Alignment Stress Test</option>
                                        <option>Safety Integrity Check</option>
                                    </select>
                                </div>

                                <div
                                    onClick={() => setConsent(!consent)}
                                    className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl cursor-pointer hover:bg-indigo-500/10 transition-all group"
                                >
                                    <div className="flex gap-4">
                                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${consent ? 'bg-indigo-500 border-indigo-500' : 'border-white/10'}`}>
                                            {consent && <div className="w-2 h-2 bg-white rounded-full" />}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">AUTHORIZE TECH AUDIT</div>
                                            <p className="text-[10px] text-white/30 mt-1 leading-relaxed">
                                                Grant necessary permissions to execute a technical alignment audit across the selected risk vector.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={runSimulation}
                                    disabled={!consent || simulating}
                                    className="w-full h-16 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all group overflow-hidden relative"
                                >
                                    {simulating ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            ANALYZING...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            RUN ASSESSMENT <Play className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </Button>

                                {result && (
                                    <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-in zoom-in-95 duration-500">
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                                            <Lock className="w-3 h-3" />
                                            {result}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Floating Interaction Decorations */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
                    </div>
                </div>
            </div>

            {/* Certificate overlay removed */}
        </section>
    );
};

export default InquirySandbox;
