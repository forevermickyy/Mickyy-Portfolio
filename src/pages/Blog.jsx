
import { PenTool, Timer } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {/* Liquid Animation Container */}
      <div
      >
        {/* The "Liquid" Glow Backdrop */}
        <div className="absolute inset-0  blur-3xl animate-pulse rounded-full" />

        {/* The Glass Card */}
        <div className="relative glass rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <PenTool size={40} className="text-blue-400 opacity-80" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/40">
            Insights & <br /> Side Quests
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8 text-sm uppercase tracking-[0.3em] font-bold opacity-40">
            <Timer size={14} />
            <span>Coming Soon</span>
          </div>

          <p className="max-w-md mx-auto text-lg opacity-60 leading-relaxed">
            I’m currently documenting my journey through <b>AI automation</b>, 
            full-stack architecture, and the occasional deep-dive into LLMs. 
            Stay tuned for the first drop.
          </p>

         
        </div>
      </div>

      {/* Background Decorative "Liquid" element */}
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-blue-500/5 to-transparent pointer-events-none -z-10" />
    </div>
  );
};

export default Blog;