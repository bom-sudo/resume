import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { profile } from '../../data/profile';

const projects = [
  {
    num: "01",
    label: "Personal",
    title: "Cutdock",
    desc: "AI video editing SaaS",
    img1: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop",
    img2: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    img3: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    href: "https://cutdock.vercel.app/"
  },
  {
    num: "02",
    label: "Client",
    title: "Daily Cookware",
    desc: "Premium Cookware Store",
    img1: "https://images.unsplash.com/photo-1620325867502-221ddb5b4e2e?q=80&w=800&auto=format&fit=crop",
    img2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    img3: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    href: "https://dailycookware.com/"
  },
  {
    num: "03",
    label: "Personal",
    title: "AI Content Pipeline",
    desc: "Claude Code + FFmpeg + ElevenLabs pipeline",
    img1: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    img2: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    img3: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    href: profile.github,
    buttonLabel: "View on GitHub",
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pb-32">
      <div className="pt-20 sm:pt-24 md:pt-32 pb-10">
        <h2 className="hero-heading font-black uppercase text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </div>

      <div className="px-5 sm:px-8 md:px-10 max-w-7xl mx-auto">
        <div className="relative w-full">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} totalCards={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any, index: number, totalCards: number }> = ({ project, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });
  
  // Create stacking effect where earlier cards scale down slightly as user scrolls down
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  const topOffset = 96 + (index * 28); // 96px is 6rem (top-24)

  return (
    <div ref={cardRef} className="h-[85vh] sticky flex items-center justify-center w-full" style={{ top: `${topOffset}px` }}>
      <motion.div 
        style={{ scale }}
        className="w-full h-full max-h-[800px] bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-[#D7E2EA] font-medium text-2xl">{project.num}</span>
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-[#D7E2EA] text-sm uppercase tracking-wide">
              {project.label}
            </span>
            <div>
              <h3 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl uppercase tracking-wider">{project.title}</h3>
              <p className="text-[#D7E2EA]/60 font-light mt-1">{project.desc}</p>
            </div>
          </div>
          <LiveProjectButton href={project.href} label={project.buttonLabel} />
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 h-full overflow-hidden">
          <div className="flex flex-col gap-4 md:w-2/5 h-full">
            <div className="flex-1 rounded-[30px] sm:rounded-[40px] overflow-hidden relative">
              <img src={project.img1} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
            </div>
            <div className="flex-1 rounded-[30px] sm:rounded-[40px] overflow-hidden relative">
              <img src={project.img2} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
            </div>
          </div>
          <div className="md:w-3/5 h-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden relative">
            <img src={project.img3} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
