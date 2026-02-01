import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logInquiry } from "../lib/InquiryService";

const GhostChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'bot' | 'user', content: string }[]>([
        { role: 'bot', content: "SYSTEM: AI Assistant initialized. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

        // Agentic Extraction
        logInquiry({
            source: 'CHAT',
            content: userMsg
        });

        setInput("");
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            let response = "Thank you for your inquiry. Our team will review and respond.";
            if (userMsg.toLowerCase().includes("email") || userMsg.toLowerCase().includes("contact")) {
                response = "For inquiries, please contact us at contact@famona.ai.";
            } else if (userMsg.toLowerCase().includes("cin") || userMsg.toLowerCase().includes("legal")) {
                response = "FAMONA AI Technologies is a registered private limited company. For legal inquiries, please contact us directly.";
            } else if (userMsg.toLowerCase().includes("who")) {
                response = "We are FAMONA AI Technologies, focused on ethical AI research and responsible AI solutions.";
            }

            setMessages(prev => [...prev, { role: 'bot', content: response }]);
            setIsTyping(false);
        }, 1500);
    };

    const copyInsight = (content: string) => {
        navigator.clipboard.writeText(content);
        // We could add a toast here if sonner is available
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
                                    : 'bg-white/5 text-white/70 border border-white/5 rounded-tl-none'
                                    }`}>
                                    {msg.content}
                                    {msg.role === 'bot' && (
                                        <button
                                            onClick={() => copyInsight(msg.content)}
                                            className="absolute -right-8 top-0 opacity-0 group-hover/msg:opacity-100 p-1.5 hover:text-blue-400 transition-all"
                                            title="Copy Insight"
                                        >
                                            <Terminal className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
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

export default GhostChat;
