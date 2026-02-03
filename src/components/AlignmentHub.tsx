import React from 'react';
import { ShieldCheck, Download, Share2, Award, CheckCircle2, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AlignmentHub = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div>
                            <Badge className="bg-[#4F46E5]/10 text-[#4F46E5] border-[#4F46E5]/20 mb-6 uppercase tracking-widest font-black text-[10px] px-4 py-1.5">
                                Institutional Trust
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1E293B] uppercase italic leading-[0.9] mb-6">
                                SOVEREIGN<br />
                                <span className="text-[#4F46E5]">ALIGNMENT.</span>
                            </h2>
                            <p className="text-[#475569] text-lg font-light leading-relaxed max-w-xl">
                                Access verified technical certification for regional and institutional AI safety compliance. Our alignment protocols ensure adherence to sovereign regulatory invariants.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: ShieldCheck, text: "Policy Invariant Check" },
                                { icon: Lock, text: "Statutory Guardrails" },
                                { icon: CheckCircle2, text: "NIST RMF Alignment" },
                                { icon: Award, text: "Institutional Verification" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                    <item.icon className="w-5 h-5 text-[#4F46E5]" />
                                    <span className="text-[11px] font-bold text-[#1E293B] uppercase tracking-wider">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 h-14 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-[#4F46E5]/20 group">
                                Generate Certificate <Award className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                            </Button>
                            <Button variant="outline" className="border-slate-200 text-slate-500 hover:bg-slate-50 px-8 h-14 rounded-2xl font-black uppercase tracking-widest text-[11px]">
                                View Registry
                            </Button>
                        </div>
                    </div>

                    {/* Right: Certificate Preview */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#4F46E5]/10 to-emerald-500/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="relative glass-panel rounded-[32px] p-2 border-white/50 shadow-2xl overflow-hidden">
                            <div className="bg-white rounded-[24px] p-10 border border-slate-100 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#4F46E5]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                                <div className="relative z-10 space-y-12">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                                            <ShieldCheck className="w-8 h-8 text-[#4F46E5]" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-1">CERT_ID</div>
                                            <div className="text-[11px] font-mono font-bold text-[#1E293B]">FAM-ALN-7742-X</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-[12px] font-black uppercase tracking-[0.4em] text-[#4F46E5] border-b border-[#4F46E5]/10 pb-2">Certificate of Alignment</div>
                                        <h3 className="text-3xl font-black text-[#1E293B] tracking-tight">SOVEREIGN_NODE_STABILITY</h3>
                                        <p className="text-sm text-slate-400 font-light leading-relaxed">
                                            Verified baseline alignment against OECD AI Principles and NIST AI RMF v1.0.
                                            System integrity verified at 99.98% stability.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pt-6">
                                        <div>
                                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-2">Issue Date</div>
                                            <div className="text-xs font-bold text-[#1E293B]">FEB 03, 2026</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-2">Expiry</div>
                                            <div className="text-xs font-bold text-[#1E293B]">PERPETUAL_BASELINE</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-10 border-t border-dashed border-slate-200">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center">
                                                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full bg-[#4F46E5] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                                                +
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-[#4F46E5] hover:bg-[#4F46E5]/5 overflow-hidden">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-[#4F46E5] hover:bg-[#4F46E5]/5">
                                                <Share2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AlignmentHub;
