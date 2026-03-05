import React from 'react';
import { Code2, Cpu, Globe, Rocket, Terminal, BookOpen, Briefcase } from 'lucide-react';

const Home = () => {

  return (
    <div className="space-y-20 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="text-center pt-12">
        <div>
          <h1 
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent transition-all duration-700"
            style={{ 
            backgroundImage: `linear-gradient(to bottom, var(--text-gradient-start), var(--text-gradient-end))` 
            }}
            >
            About Me
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-50 leading-relaxed">
            CS Student & Full-Stack Developer specializing in building fluid React,
            Mobile, and Backend systems. I focus on transforming complex ideas into 
            AI-driven applications and seamless automation 
            workflows that solve real-world problems. My approach prioritizes 
            high-quality, maintainable software and intuitive user experiences that 
            make a meaningful impact in the digital world.
          </p>
        </div>
      </section>

      {/* --- SKILLS GRID (The Liquid Bento) --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-blue-400" />
            <h2 className="text-2xl font-bold uppercase tracking-widest">Technical Arsenal</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['JavaScript', 'React JS', 'React Native', 'Next.js', 'Node.js', 'Python', 'Django', 'Java', 'C++'].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:scale-105 transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-3xl bg-linear-to-br from-blue-500/10 to-transparent border-blue-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-purple-400" />
            <h2 className="text-2xl font-bold uppercase tracking-widest ">Core Focus</h2>
          </div>
          <ul className="space-y-3 font-medium text-sm">
            <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> AI & LLM Integration</li>
            <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Workflow Automation</li>
            <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 rounded-full bg-green-400" /> Scalable Web Apps</li>
          </ul>
        </div>
      </section>

      {/* --- EXPERIENCE & EDUCATION --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase className="opacity-50" />
            <h2 className="text-2xl font-bold italic">Experience</h2>
          </div>
          <div className="border-l border-white/10 ml-3 pl-8 space-y-8">
            <ExperienceItem 
              title="Software Engineer" 
              company="Adils Solution" 
              period="October 2022 - Present" 
              desc="Managing Operating systems, bug fixes and security checks."
            />
            <ExperienceItem 
              title="Software Engineer Intern" 
              company="Swoove Ghana" 
              period="August 2024 - October 2024" 
              desc="Developing internal tools and automating data pipelines."
            />
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <BookOpen className="opacity-50" />
            <h2 className="text-2xl font-bold italic">Education</h2>
          </div>
          <div className="border-l border-white/10 ml-3 pl-8 space-y-8">
            <ExperienceItem 
              title="B.Sc Computer Science" 
              company="Central University" 
              period="2023 - 2027" 
              desc="Accra - Ghana"
            />
          </div>
          <div className="border-l border-white/10 ml-3 pl-8 space-y-8">
            <ExperienceItem 
              title="Computer Science" 
              company="Kastamonu University" 
              period="2025" 
              desc="Erasmus, Kastamonu - Turkiye"
            />
          </div>
        </div>
      </section>

      {/* --- SIDE QUESTS SECTION --- */}
      <section className="glass p-10 rounded-[3rem] text-center bg-linear-to-tr from-purple-500/5 to-rose-500/5">
        <Rocket className="mx-auto mb-6 opacity-40" size={40} />
        <h2 className="text-3xl font-black mb-4">Current Side Quests</h2>
        <div className="flex flex-wrap justify-center gap-4 opacity-80 italic">
          <span># Open Source Contributor</span>
          <span className="opacity-20">•</span>
          <span># Building a Personal LLM Agent</span>
          <span className="opacity-20">•</span>
          <span># Learning Rust</span>
        </div>
      </section>
    </div>
  );
};

const ExperienceItem = ({ title, company, period, desc }) => (
  <div className="relative group">
    <div className="absolute -left-9.25 top-1.5 w-4 h-4 rounded-full bg-white/20 border-4 border-slate-900 group-hover:scale-125 transition-transform" />
    <h3 className="font-bold text-lg">{title}</h3>
    <div className="flex justify-between text-sm opacity-50 mb-2">
      <span>{company}</span>
      <span>{period}</span>
    </div>
    <p className="text-sm opacity-70">{desc}</p>
  </div>
);

export default Home;