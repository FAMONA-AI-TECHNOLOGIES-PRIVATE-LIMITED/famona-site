import { Sparkles, Share2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AlignmentCertificateProps {
  score: number;
  nodeId: string;
  timestamp: string;
  onClose: () => void;
}

const AlignmentCertificate = ({ score, nodeId, timestamp, onClose }: AlignmentCertificateProps) => {
  const shareStatus = () => {
    const text = `I just confirmed my AI Ethics Awareness on FamonaAI. Responsible intelligence for a better future. Verify yours: #FamonaAI #ResponsibleAI`;
    const url = 'https://famona.ai';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-emerald-500/20 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-700 max-w-lg w-full">
      <div className="absolute inset-0 bg-[#0d0d15]/95 -z-10" />

      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 blur-3xl -ml-16 -mt-16" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -mr-16 -mt-16" />

      <div className="p-8 md:p-12 border border-white/5 rounded-[2.3rem] flex flex-col items-center text-center">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-white/20 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-24 h-24 bg-blue-500/5 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
          <img
            src="/logo-shield.png"
            alt="Official Seal"
            className="w-[85%] h-[85%] object-contain opacity-90 brightness-110"
          />
        </div>

        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 mb-6 px-6 py-2 border border-blue-400/20 rounded-full inline-block">
          AI Ethics Awareness Assessment
        </h3>

        <div className="mb-10">
          <span className="text-7xl md:text-8xl font-black tracking-tighter text-white/95 font-display italic">
            {score}<span className="text-blue-500">%</span>
          </span>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mt-3">Ethics Awareness Score</p>
        </div>

        <div className="grid grid-cols-2 gap-8 w-full mb-12 text-left border-y border-white/5 py-8">
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Verification Node</p>
            <p className="text-[11px] font-mono font-bold text-white/70">{nodeId}</p>
          </div>
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Status Protocol</p>
            <p className="text-[11px] font-mono font-bold text-emerald-400">VERIFIED</p>
          </div>
          <div className="col-span-2">
            <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Extraction Timestamp</p>
            <p className="text-[11px] font-mono font-bold text-white/40">{timestamp}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button
            onClick={shareStatus}
            className="flex-1 bg-white text-black hover:bg-blue-600 hover:text-white rounded-xl h-14 font-black uppercase tracking-widest text-[10px] group transition-all"
          >
            <Share2 className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
            Signal Alignment
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 border-white/10 text-white/40 hover:text-white hover:bg-white/5 rounded-xl h-14 font-black uppercase tracking-widest text-[10px]"
          >
            Acknowledge
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-2 opacity-20">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span className="text-[9px] font-black uppercase tracking-widest">Powered by Famona AI Research</span>
        </div>
      </div>
    </div>
  );
};

export default AlignmentCertificate;
