import { useState } from 'react';
import { Brain, AlertTriangle, ShieldCheck, ArrowRight, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { logInquiry } from "../lib/InquiryService";

const RegulatoryIQ = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            q: "Does your organization have documented AI governance policies?",
            options: [
                { text: "Yes, comprehensive policies.", points: 25 },
                { text: "Partial documentation.", points: 5 },
                { text: "No formal policies.", points: 0 }
            ]
        },
        {
            q: "How do you handle data privacy in AI systems?",
            options: [
                { text: "Automated compliance checks", points: 25 },
                { text: "Manual review process", points: 10 },
                { text: "No defined protocol.", points: 0 }
            ]
        },
        {
            q: "Are your AI models regularly audited for bias and fairness?",
            options: [
                { text: "Yes, regular audits.", points: 25 },
                { text: "Occasional reviews.", points: 5 },
                { text: "No auditing in place.", points: 0 }
            ]
        },
        {
            q: "Do you have human oversight mechanisms for critical AI decisions?",
            options: [
                { text: "Mandatory review process.", points: 25 },
                { text: "Optional review.", points: 5 },
                { text: "Fully automated.", points: 0 }
            ]
        }
    ];

    const handleAnswer = (points: number) => {
        const newScore = score + points;
        setScore(newScore);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
            logInquiry({
                source: 'DIAGNOSTIC',
                result: `Diagnostic Score: ${newScore}/100`,
                details: { type: 'Regulatory Readiness' }
            });
        }
    };

    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {!showResult ? (
                        <Card className="glass-panel border-slate-200 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="grid grid-cols-1 md:grid-cols-12">
                                    <div className="md:col-span-4 bg-slate-50 p-12 flex flex-col justify-center items-center text-center border-r border-slate-100">
                                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-slate-100 mb-6 shadow-sm">
                                            <Brain className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-2">Step {step + 1} of 4</div>
                                        <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">Diagnostic IQ</div>
                                        <div className="mt-8 overflow-hidden h-1.5 w-full bg-slate-200 rounded-full">
                                            <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${((step + 1) / 4) * 100}%` }} />
                                        </div>
                                    </div>
                                    <div className="md:col-span-8 p-12">
                                        <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">
                                            {questions[step].q}
                                        </h3>
                                        <div className="space-y-4">
                                            {questions[step].options.map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleAnswer(opt.points)}
                                                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all group flex items-center justify-between"
                                                >
                                                    <span className="text-sm font-bold text-slate-600 group-hover:text-blue-900">{opt.text}</span>
                                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
                            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto border border-blue-100">
                                <ShieldCheck className="w-12 h-12 text-blue-600" />
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 uppercase italic">Assessment Complete</h2>
                            <div className="p-12 rounded-[32px] glass-panel border-white/50 max-w-sm mx-auto shadow-2xl">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Readiness Score</div>
                                <div className="text-7xl font-black text-slate-900 mb-4 tracking-tighter italic">{score}<span className="text-xl ml-1 text-slate-300">/100</span></div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                                    {score > 75 ? "Strategic Alignment High" : score > 40 ? "Baseline Alignment Established" : "Regulatory Invariant Risk Detected"}
                                </p>
                            </div>
                            <Button onClick={() => { setStep(0); setScore(0); setShowResult(false); }} className="bg-slate-900 text-white rounded-xl h-14 px-10 font-black uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all">
                                Restart Diagnostic
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RegulatoryIQ;
