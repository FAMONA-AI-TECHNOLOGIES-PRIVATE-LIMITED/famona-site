import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowUpRight, ShieldX, Coins, HeartPulse, Scale } from 'lucide-react';

const HarmStories = () => {
    const cases = [
        {
            sector: "FinTech",
            title: "The Unauthorized Wire",
            story: "A probabilistic trading agent misinterpreted a social sentiment spike, authorizing a ₹1.2Cr transfer to a high-risk entity. No deterministic brakes were present.",
            impact: "Financial Loss & AML Breach",
            icon: Coins,
            color: "text-red-400"
        },
        {
            sector: "Healthcare",
            title: "Data Leakage Loop",
            story: "An LLM-based diagnostic assistant inadvertently included PII of 3,000 patients in its public-facing knowledge base due to inference-time leakage.",
            impact: "DPDP Section 8(5) Violation",
            icon: HeartPulse,
            color: "text-amber-400"
        },
        {
            sector: "Legal",
            title: "The Hallucinated Precedent",
            story: "An automated legal researcher submitted a brief containing three entirely fabricated court cases, leading to judicial sanctions and reputational ruin.",
            impact: "Professional Negligence",
            icon: Scale,
            color: "text-rose-400"
        }
    ];

    return (
        <section className="py-24 bg-[#02020a]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-start mb-16">
                    <Badge className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest mb-6">Case Files</Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic italic">
                        BLACK BOX <span className="text-white/40 italic">ARCHIVIST.</span>
                    </h2>
                    <p className="text-white/30 text-lg max-w-2xl font-light mt-4 leading-relaxed">
                        Real-world simulations and documented failures from the unshielded era of artificial intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, i) => (
                        <Card key={i} className="bg-[#0d0d15] border-white/5 hover:border-red-500/30 transition-all duration-500 group">
                            <CardHeader className="p-8">
                                <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="outline" className="border-white/10 text-white/40 text-[8px] font-black uppercase tracking-[0.2em]">{item.sector}</Badge>
                                    <ShieldX className="w-3 h-3 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <CardTitle className="text-xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors uppercase">{item.title}</CardTitle>
                                <p className="text-white/30 text-xs leading-relaxed font-light mb-6">
                                    {item.story}
                                </p>
                            </CardHeader>
                            <CardContent className="px-8 pb-8 pt-0">
                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-red-400/60">{item.impact}</span>
                                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HarmStories;
