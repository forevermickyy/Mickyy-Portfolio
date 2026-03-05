// components/GlassCard.jsx
export const GlassCard = ({ children }) => (
  <div className="relative group">
    {/* The "Liquid" Glow effect */}
    <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
    
    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
      {children}
    </div>
  </div>
);