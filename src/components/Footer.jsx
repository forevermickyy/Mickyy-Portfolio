import React from 'react';
import { Github, Twitter, Mail, Send, MessageCircle, Video } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/forevermickyy' },
    { name: 'X', icon: <Twitter size={20} />, url: 'https://x.com/coldmickyy' },
    { name: 'TikTok', icon: <Video size={20} />, url: 'https://tiktok.com/@forevermickyy' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mmquansah01@gmail.com' },
    { name: 'Telegram', icon: <Send size={20} />, url: 'https://t.me/coldmickyy' },
    { name: 'WhatsApp', icon: <MessageCircle size={20} />, url: 'https://wa.me/0207333553' },
  ];

  return (
    <footer className="w-full mt-auto py-8 px-6">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl overflow-hidden relative">
        
        {/* Apple-style background glow */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none opacity-50" />

        <div className="z-10 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.2em]">MICHAEL.</p>
        </div>

        {/* Icon Grid with Liquid Transitions */}
        <div className="flex flex-wrap justify-center gap-3 z-10">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group shadow-sm"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="z-10 text-[10px] opacity-40 uppercase tracking-widest">
          © 2026 / MICKYY DEVS 
        </div>
      </div>
    </footer>
  );
};

export default Footer;