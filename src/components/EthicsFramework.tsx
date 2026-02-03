import { Shield, Globe, Lock, Cpu } from 'lucide-react';

const EthicsFramework = () => {
    const pillars = [
        {
            title: "Global Alignment",
            icon: Globe,
            color: "text-blue-600",
            desc: "Aligning intelligence systems with universal human values and international human rights standards."
        },
        {
            title: "Robust Governance",
            icon: Shield,
            color: "text-emerald-600",
            desc: "Implementing transparent oversight mechanisms to ensure accountability in AI development."
        },
        {
            title: "Privacy Security",
            icon: Lock,
            color: "text-amber-600",
            desc: "Protecting individual data rights through advanced encryption and ethical data handling protocols."
        },
        {
            title: "Technical Integrity",
            icon: Cpu,
            color: "text-indigo-600",
            desc: "Maintaining the highest mathematical standards for system reliability and predictable behavior."
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic text-slate-900">
                        ETHICAL<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">FRAMEWORK</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Our foundational approach to responsible intelligence, built on transparency, safety, and human-centric design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="p-8 rounded-[32px] border border-slate-100 bg-white hover:border-blue-100 transition-all group">
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                                <pillar.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">{pillar.title}</h3>
                            <p className="text-xs text-slate-400 font-light leading-relaxed italic">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EthicsFramework;
