import React from 'react';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';

const projects = [
   {
    title: "Portolio",
    description: "A self ad sophiscated landing page.",
    tech: ["React.js", "Motion", "Tailwind"],
    vercel: "https://open-me-nu.vercel.app/",
    github: "https://github.com/forevermickyy/open-me"
  },
  {
    title: "AI Ecommerce",
    description: "A full-stack platform integrating AI for recommendations, search and repetitive tasks.",
    tech: ["React.js", "Nodejs", "OpenAI API", "Tailwind"],
    vercel: "https://ecommerce-frontend-oa3p6lyds-michael-s-projects-1e8ee42c.vercel.app/",
    github: "https://github.com/forevermickyy/ecommerce-app"
  },
  {
    title: "MikeAi Learning Assistant",
    description: "An Ai integrated learning system, generates quizzes, summarizes and generates pdfs, voice and video.",
    tech: ["Reactjs", "Node.js", "Gemini API", "OpenAI API", "MongoDB"],
    github: "https://github.com/forevermickyy/MikeAI-Learning-Assistant"
  },
  {
    title: "Ad Black Jack Game",
    description: "An interactive and improved desktop Black Jack game.",
    tech: ["Java", "Firebase", "JavaFX"],
    github: "https://github.com/forevermickyy/Black-Jack-Game"
  },
  {
    title: "Hangman Game",
    description: "An interactive desktop game uses modern approach for traditional hangman game.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/forevermickyy/Hangman-game"
  },
  {
    title: "ML Disease Diagnosis",
    description: "The very site you are seeing now. A fusion of Apple's Glassmorphism and Google's Material Design 3.",
    tech: ["Python", "PyTorch","Scikit"],
    github: "https://github.com/forevermickyy"
  }
];

const Works = () => {
  return (
    <div className="space-y-12">
      <section className="text-left max-w-2xl">
        <h1 className="text-5xl font-black tracking-tighter mb-4 opacity-90">Selected Works</h1>
        <p className="text-lg opacity-60">
          A collection of web and mobile applications focused on <b>Scalability</b>, <b>AI</b>, and <b>User Experience</b>.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <div className="glass group rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-xl">
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl">
          <Layers size={24} className="opacity-80" />
        </div>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-60 hover:opacity-100">
            <Github size={20} />
          </a>
          <a href={project.vercel} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors opacity-60 hover:opacity-100">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm opacity-60 leading-relaxed mb-6">
        {project.description}
      </p>
    </div>

    {/* Framework Logos / Badges Section */}
    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
      {project.tech.map((t) => (
        <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 opacity-50 group-hover:opacity-100 group-hover:bg-blue-500/10 transition-all">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default Works;