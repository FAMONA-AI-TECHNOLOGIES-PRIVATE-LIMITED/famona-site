import { AlertCircle, TrendingDown, FileWarning, ShieldCheck } from 'lucide-react';

const HarmIntelligence = () => {
    const riskTiers = [
        { label: "Operational Risk", value: "High", icon: TrendingDown, color: "text-red-600", desc: "Potential impact without proper AI governance." },
        { label: "Trust Impact", value: "Critical", icon: ShieldCheck, color: "text-blue-600", desc: "Effects on stakeholder confidence and brand reputation." },
        { label: "Compliance Risk", value: "Significant", icon: FileWarning, color: "text-rose-600", desc: "Regulatory and legal alignment considerations." }
    ];

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Risk Description */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-red-600">Safety & Risk Assessment</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900">
                            MITIGATING <span className="text-red-600">AI RISKS.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">
                            Identifying potential vulnerabilities and ethical gaps is the first step toward building resilient and human-aligned intelligence systems.
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

                    {/* Quality Assurance Card */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                            <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
                            <h3 className="text-lg font-black tracking-tight mb-4 uppercase italic">Quality Assurance</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                                We implement rigorous evaluation protocols to ensure that all intelligence outputs adhere to established ethical guidelines and institutional standards.
                            </p>
                            <div className="space-y-3">
                                {["Model Validation", "Bias Mitigation", "Safety Guardrails"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HarmIntelligence;
