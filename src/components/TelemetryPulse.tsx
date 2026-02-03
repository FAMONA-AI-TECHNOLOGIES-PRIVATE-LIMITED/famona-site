import React, { useState, useEffect } from 'react';
import { Activity, BarChart3, Database, ShieldAlert, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TelemetryPulse = () => {
    const [intercepts, setIntercepts] = useState<any[]>([]);
    const [metrics, setMetrics] = useState({
        compliance: 98.4,
        latency: 12,
        load: 24
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const newIntercept = {
                id: Math.random().toString(36).substring(7).toUpperCase(),
                timestamp: new Date().toLocaleTimeString(),
                vector: ["Logic Drift", "Policy Collision", "Data Leakage", "Inference Bias"][Math.floor(Math.random() * 4)],
                status: "Mitigated",
                intensity: (Math.random() * 100).toFixed(1)
            };
            setIntercepts(prev => [newIntercept, ...prev].slice(0, 5));
            setMetrics({
                compliance: parseFloat((Math.random() * (99.9 - 94.0) + 94.0).toFixed(1)),
                latency: Math.floor(Math.random() * (45 - 8) + 8),
                load: Math.floor(Math.random() * (60 - 20) + 20)
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Real-time Intercepts */}
            <Card className="lg:col-span-2 glass-panel border-white/10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Activity className="w-48 h-48" />
                </div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-black uppercase tracking-[0.3em] text-[#1E293B]">
                        Governance Intercepts
                    </CardTitle>
                    <Badge variant="outline" className="text-[8px] font-bold border-[#4F46E5] text-[#4F46E5] animate-pulse">
                        LIVE_AUDIT_LOG
                    </Badge>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {intercepts.map((node) => (
                            <div key={node.id} className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-[#4F46E5]/10 hover:border-[#4F46E5]/30 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#4F46E5]/5 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-[#4F46E5]" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase text-[#1E293B]/80">{node.vector}</div>
                                        <div className="text-[9px] font-mono text-slate-400">ID: {node.id} // {node.timestamp}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest">{node.status}</div>
                                    <div className="text-[9px] text-slate-300 font-mono">Intensity: {node.intensity}ns</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-[9px] font-mono text-slate-400 border-t border-slate-100 pt-4 italic">
                        [UPOD_DIRECTIVE]: Data represents preliminary baseline mapping of synthetic vectors. Not representative of final GOS performance.
                    </p>
                </CardContent>
            </Card>

            {/* NIST AI RMF Metrics */}
            <div className="space-y-6">
                <Card className="glass-panel border-white/10 telemetry-glow">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                            <ShieldAlert className="w-3 h-3 text-[#4F46E5]" /> NIST RMF Map (Exploratory)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[
                                { label: "Establishment (Govern)", value: metrics.compliance, color: "bg-[#4F46E5]" },
                                { label: "Characterization (Map)", value: 88, color: "bg-slate-300" },
                                { label: "Measurement (Measure)", value: 72, color: "bg-slate-200" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-[#1E293B]/60">
                                        <span>{stat.label}</span>
                                        <span>{stat.value}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${stat.color} transition-all duration-1000`} style={{ width: `${stat.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-panel border-white/10">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-[#10B981]/10">
                                <BarChart3 className="w-6 h-6 text-[#10B981]" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Baseline Stability</div>
                                <div className="text-2xl font-black text-[#1E293B] italic">99.98<span className="text-xs ml-1 text-slate-300">σ</span></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TelemetryPulse;
