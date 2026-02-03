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
        setScore(score + points);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);

            // Agentic Extraction
            logInquiry({
                source: 'DIAGNOSTIC',
                result: `${score + points} IQ`,
                details: { finalScore: score + points }
            });
        }
    };

    return (
        <section className="py-24 bg-[#02020a] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-[32px] flex items-center justify-center mb-12 shadow-2xl shadow-blue-500/10 animate-float">
                        <Brain className="text-blue-400 w-10 h-10" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic font-display">
                        GOVERNANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">READINESS.</span>
                    </h2>
                    <p className="text-white/30 text-xl mt-6 font-light max-w-2xl leading-relaxed">
                        Assess institutional preparedness for high-fidelity AI deployment. Execute standardized diagnostic protocol.
                    </p>
                </div>

                <Card className="glass-panel overflow-hidden shadow-3xl relative rounded-[40px] border-white/10 hover-glow">
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
                                {score >= 80 ? "Excellent governance practices. Well-prepared for responsible AI." :
                                    score >= 50 ? "Good foundation. Some areas for improvement." :
                                        "Opportunity for growth. Consider strengthening AI governance."}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                                    <BarChart className="w-5 h-5 text-blue-400 mb-4" />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Your Score</div>
                                    <div className="text-sm font-bold text-white/80">Governance Readiness Level</div>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-xl">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 mb-4" />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">Next Steps</div>
                                    <div className="text-sm font-bold text-white/80">Contact Us for Full Assessment</div>
                                </div>
                            </div>

                            <Button className="w-full h-16 bg-white text-black hover:bg-blue-600 hover:text-white rounded-xl text-[11px] font-black uppercase tracking-[0.3em] transition-all">
                                Request Full Assessment
                            </Button>
                        </CardContent>
                    )}
                </Card>
            </div>
        </section>
    );
};

export default RegulatoryIQ;
