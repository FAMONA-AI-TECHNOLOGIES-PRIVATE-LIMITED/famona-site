import React, { useState } from 'react';
import { Brain, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RegulatoryIQ = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            q: "Does your AI architecture utilize deterministic interception for high-stakes PII transfers?",
            options: [
                { text: "Yes, fully deterministic.", points: 25 },
                { text: "Probabilistic/RLHF only.", points: 5 },
                { text: "No monitoring in place.", points: 0 }
            ]
        },
        {
            q: "What is your automated breach notification latency for Section 8(6) compliance?",
            options: [
                { text: "< 1 Hour (Autonomous)", points: 25 },
                { text: "12 - 72 Hours (Manual)", points: 10 },
                { text: "No defined protocol.", points: 0 }
            ]
        },
        {
            q: "Are your model weights cryptographically signed and auditable at the edge?",
            options: [
                { text: "Yes, immutable signing.", points: 25 },
                { text: "In-cloud security only.", points: 5 },
                { text: "Not currently signed.", points: 0 }
            ]
        },
        {
            q: "Do you have a 'Human-in-the-Loop' override for autonomous financial transactions?",
            options: [
                { text: "Mandatory Deterministic Gate.", points: 25 },
                { text: "Optional/Best Effort.", points: 5 },
                { text: "Fully Autonomous/Unshielded.", points: 0 }
            ]
        }
    ];

    const handleAnswer = (points: number) => {
        setScore(score + points);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <section className="py-24 bg-[#02020a] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
                        <Brain className="text-blue-400 w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic italic">
                        AI REGULATORY <span className="text-blue-500">IQ TEST</span>
                    </h2>
                    <p className="text-white/30 text-lg mt-4 font-light">
                        Measure your enterprise's technical IQ against the DPDP Act 2023. Preliminary diagnostic.
                    </p>
                </div>

                <Card className="bg-[#0d0d15] border-white/10 overflow-hidden shadow-2xl relative">
                    {!showResult ? (
                        <CardContent className="p-12">
                            <div className="flex justify-between items-center mb-12">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Evaluation Step {step + 1} of {questions.length}</span>
                                <div className="flex gap-2">
                                    {questions.map((_, i) => (
                                        <div key={i} className={`w-8 h-1 rounded-full ${i <= step ? 'bg-blue-500' : 'bg-white/5'}`} />
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-12 text-white/90 leading-tight">
                                {questions[step].q}
                            </h3>

                            <div className="space-y-4">
                                {questions[step].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(opt.points)}
                                        className="w-full text-left p-6 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-sm font-medium group flex justify-between items-center"
                                    >
                                        <span>{opt.text}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    ) : (
                        <CardContent className="p-12 text-center animate-in zoom-in-95 duration-500">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                                <ShieldCheck className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Diagnostic Complete</span>
                            </div>

                            <div className="text-8xl font-black tracking-tighter mb-4 font-display">
                                {score}<span className="text-blue-500 italic">IQ</span>
                            </div>

                            <p className="text-white/40 text-lg mb-12 font-light">
                                {score >= 80 ? "Sovereign Tier Architecture. Low risk of statutory liability." :
                                    score >= 50 ? "Balanced Architecture. Moderate regulatory surface exposure." :
                                        "Probabilistic Risk Zone. High liability under DPDP 2023."}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                                    <BarChart className="w-5 h-5 text-blue-400 mb-4" />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Benchmark Status</div>
                                    <div className="text-sm font-bold text-white/80">Top 15% of Indian Enterprises</div>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 mb-4" />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Primary Moat</div>
                                    <div className="text-sm font-bold text-white/80">Deterministic Interception Gap</div>
                                </div>
                            </div>

                            <Button className="w-full h-16 bg-white text-black hover:bg-blue-600 hover:text-white rounded-xl text-[11px] font-black uppercase tracking-[0.3em] transition-all">
                                Request Full Statutory Report
                            </Button>
                        </CardContent>
                    )}
                </Card>
            </div>
        </section>
    );
};

export default RegulatoryIQ;
