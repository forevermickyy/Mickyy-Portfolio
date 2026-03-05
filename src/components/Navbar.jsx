import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Droplets, Heart, Sparkles, Eye, ChevronDown } from 'lucide-react';

const Navbar = ({ setTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    { id: 'light', label: 'Daylight', icon: <Sun size={16} className="text-orange-400" /> },
    { id: 'dark', label: 'Dark', icon: <Moon size={16} className="text-blue-400" /> },
    { id: 'blue', label: 'Blue', icon: <Droplets size={16} className="text-cyan-400" /> },
    { id: 'pink', label: 'Pink', icon: <Heart size={16} className="text-rose-400" /> },
    { id: 'midnight', label: 'Midnight', icon: <Sparkles size={16} className="text-purple-400" /> },
    { id: 'eyeSaving', label: 'Comfort', icon: <Eye size={16} className="text-amber-500" /> },
  ];

  // Find the icon for the currently active theme
  const activeTheme = themeOptions.find(t => t.id === currentTheme) || themeOptions[1];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl font-sans">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
        
        <Link to="/" className="font-black tracking-tighter text-xl uppercase">Michael.</Link>
        
        <div className="flex gap-8 items-center font-medium text-sm">
          <Link to="/works" className="hover:opacity-60 transition">Works</Link>
          <Link to="/blog" className="hover:opacity-60 transition">Blog</Link>
          
          {/* Custom Dropdown Container */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-all outline-none"
            >
              {activeTheme.icon}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Floating Glass Dropdown List */}
            {isOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 shadow-2xl animate-in fade-in zoom-in duration-200 origin-top-right">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTheme(opt.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all
                      ${currentTheme === opt.id 
                        ? 'bg-white/20 shadow-inner' 
                        : 'hover:bg-white/10 opacity-70 hover:opacity-100'
                      }`}
                  >
                    {opt.icon}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;