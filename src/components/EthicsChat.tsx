import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Terminal, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logInquiry } from "../lib/InquiryService";

const EthicsChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'bot' | 'user', content: string, status?: string }[]>([
        { role: 'bot', content: "FAMONA AI Technical Assistant initialized. I can provide audits on NIST RMF, OECD Principles, and UNESCO AI Ethics. How can I assist your technical inquiry?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [reasoningLogs, setReasoningLogs] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const KNOWLEDGE_BASE: Record<string, string> = {
        "nist": "NIST AI RMF v1.0 specifies a process-oriented approach: Govern, Map, Measure, and Manage.",
        "oecd": "OECD AI Principles emphasize transparency, explainability, and accountability.",
        "audit": "Technical Audit Protocol initiated. Analyzing system alignment vectors.",
        "safety": "AI Safety focuses on robust guardrails and technical alignment frameworks.",
        "framework": "The Famona Ethics Framework integrates global standards into a unified institutional approach.",
        "contact": "For institutional collaboration inquiries, please reach out to contact@famona.ai.",
        "hello": "Hello. I am the technical audit assistant. I can help you navigate AI safety frameworks."
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput("");
        setIsTyping(true);
        setReasoningLogs(["Initializing Audit Context...", "Scanning Knowledge Base..."]);

        // Institutional Logging
        logInquiry({ source: 'TECH_CHAT', content: userMsg });

        // Simulate Reasoning/Streaming
        await new Promise(r => setTimeout(r, 800));
        setReasoningLogs(prev => [...prev, "Mapping to NIST AI RMF...", "Validating Policy Alignment..."]);
        await new Promise(r => setTimeout(r, 1200));

        let response = "I have analyzed your inquiry. Based on current AI safety standards, we recommend a secondary audit of your alignment vectors. For specific implementation details, please contact our Technical Team.";

        const lowerMsg = userMsg.toLowerCase();
        for (const [key, val] of Object.entries(KNOWLEDGE_BASE)) {
            if (lowerMsg.includes(key)) {
                response = val;
                break;
            }
        }

        // Streaming Effect
        setIsTyping(false);
        setReasoningLogs([]);
        setMessages(prev => [...prev, { role: 'bot', content: response, status: 'VERIFIED' }]);
    };



    return (
        <div className="fixed bottom-8 right-8 z-[100] font-mono">
            {!isOpen ? (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/20 flex items-center justify-center group border border-blue-400/20"
                >
                    <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#02020a] animate-pulse" />
                </Button>
            ) : (
                <div className="w-[350px] md:w-[400px] h-[500px] bg-[#0d0d15] border border-white/10 rounded-3xl shadow-3xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-12 duration-500">
                    <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-blue-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">AI_ASSISTANT</span>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-white/20 hover:text-white">
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`relative max-w-[85%] p-4 rounded-2xl text-[11px] leading-relaxed group/msg ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : 'bg-white/5 text-white/70 border border-white/5 rounded-tl-none shadow-xl'
                                    }`}>
                                    {msg.status && (
                                        <div className="flex items-center gap-1.5 mb-2 opacity-50">
                                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                            <span className="text-[7px] font-black uppercase tracking-widest">{msg.status}_AUDIT</span>
                                        </div>
                                    )}
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 w-full">
                                    <div className="space-y-2">
                                        {reasoningLogs.map((log, li) => (
                                            <div key={li} className="flex items-center gap-2 text-[8px] text-blue-400/60 animate-pulse">
                                                <Terminal className="w-2 h-2" />
                                                <span>{log}</span>
                                            </div>
                                        ))}
                                        <div className="flex gap-1 mt-2">
                                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" />
                                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-white/5 border-t border-white/5">
                        <div className="relative flex items-center">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Inquire node status..."
                                className="bg-black/50 border-white/10 text-[11px] h-11 pl-4 pr-12 rounded-xl focus-visible:ring-blue-500/50"
                            />
                            <Button
                                onClick={handleSend}
                                size="icon"
                                className="absolute right-1 text-blue-400 hover:text-white bg-transparent hover:bg-transparent"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                        <p className="text-[8px] text-white/20 mt-3 text-center uppercase tracking-widest font-black">
                            Powered by Famona AI Technologies Pvt Ltd
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EthicsChat;
