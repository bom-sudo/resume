import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { profile } from '../../data/profile';

type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

type Project = {
  num: string;
  label: string;
  title: string;
  desc: string;
  images: [ProjectImage, ProjectImage, ProjectImage];
  href: string;
  buttonLabel?: string;
  accent: string;
};

const projects: Project[] = [
  {
    num: "01",
    label: "Personal",
    title: "Cutdock",
    desc: "AI video editing SaaS",
    images: [
      {
        src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=900&auto=format&fit=crop",
        alt: "Video editing software timeline on a monitor",
        label: "Timeline",
      },
      {
        src: "https://images.unsplash.com/photo-1551302175-952301267d19?q=80&w=900&auto=format&fit=crop",
        alt: "Creative workstation with video editing panels",
        label: "Editor UI",
      },
      {
        src: "https://images.unsplash.com/photo-1574717024239-25253f4ef40a?q=80&w=1200&auto=format&fit=crop",
        alt: "Professional video editing workspace",
        label: "AI Post-production",
      },
    ],
    href: "https://cutdock.vercel.app/",
    accent: "#B600A8",
  },
  {
    num: "02",
    label: "Client",
    title: "Daily Cookware",
    desc: "Premium Cookware Store",
    images: [
      {
        src: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=900&auto=format&fit=crop",
        alt: "Cookware displayed on a wooden shelf",
        label: "Product Display",
      },
      {
        src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=900&auto=format&fit=crop",
        alt: "Cookware and peppermill on a kitchen counter",
        label: "Kitchen Detail",
      },
      {
        src: "https://images.unsplash.com/photo-1518291344630-4857135fb581?q=80&w=1200&auto=format&fit=crop",
        alt: "Frying pan and ingredients arranged on a blue surface",
        label: "Store Visual",
      },
    ],
    href: "https://dailycookware.com/",
    accent: "#F4A261",
  },
  {
    num: "03",
    label: "Personal",
    title: "AI Content Pipeline",
    desc: "Claude Code + FFmpeg + ElevenLabs pipeline",
    images: [
      {
        src: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?q=80&w=900&auto=format&fit=crop",
        alt: "Laptop workspace with source code open",
        label: "Automation Code",
      },
      {
        src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=900&auto=format&fit=crop",
        alt: "Monitoring dashboard showing quality metrics",
        label: "Quality Metrics",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "Analytics dashboard open on a laptop",
        label: "Pipeline Dashboard",
      },
    ],
    href: profile.github,
    buttonLabel: "View on GitHub",
    accent: "#4ecdc4",
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 pb-32">
      <div className="pt-20 sm:pt-24 md:pt-32 pb-10">
        <h2 className="hero-heading font-black uppercase text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </div>

      <div className="px-5 sm:px-8 md:px-10 max-w-7xl mx-auto">
        <div className="relative w-full">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} totalCards={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project, index: number, totalCards: number }> = ({ project, index, totalCards }) => {
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
        className="w-full h-full max-h-[800px] bg-bg-primary border-2 border-border-primary rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden"
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        whileHover={{ borderColor: project.accent }}
      >
        <div
          className="absolute inset-x-8 top-0 h-px opacity-80"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-primary">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-text-primary font-medium text-2xl" style={{ color: project.accent }}>{project.num}</span>
            <span className="px-4 py-1.5 rounded-full border border-border-primary text-text-primary text-sm uppercase tracking-wide">
              {project.label}
            </span>
            <div>
              <h3 className="text-text-primary font-medium text-xl sm:text-2xl uppercase tracking-wider">{project.title}</h3>
              <p className="text-text-muted/80 font-light mt-1">{project.desc}</p>
            </div>
          </div>
          <LiveProjectButton href={project.href} label={project.buttonLabel} />
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 h-full min-h-0 overflow-hidden">
          <div className="flex flex-1 md:flex-none flex-col gap-4 md:w-2/5 md:h-full min-h-0">
            <ProjectImageTile image={project.images[0]} accent={project.accent} className="flex-1" />
            <ProjectImageTile image={project.images[1]} accent={project.accent} className="flex-1" />
          </div>
          <ProjectImageTile image={project.images[2]} accent={project.accent} className="flex-1 md:flex-none md:w-3/5 md:h-full min-h-0" featured />
        </div>
      </motion.div>
    </div>
  );
};

const ProjectImageTile: React.FC<{
  image: ProjectImage;
  accent: string;
  className?: string;
  featured?: boolean;
}> = ({ image, accent, className = '', featured = false }) => (
  <div className={`group/tile relative overflow-hidden border border-border-primary bg-bg-inverse/[0.03] ${featured ? 'rounded-[30px] sm:rounded-[40px] md:rounded-[50px]' : 'rounded-[30px] sm:rounded-[40px]'} ${className}`}>
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover brightness-[0.78] saturate-[0.95] contrast-[1.08] transition-all duration-700 group-hover/tile:scale-105 group-hover/tile:brightness-95 group-hover/tile:saturate-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
    <div
      className="absolute inset-x-5 bottom-0 h-px opacity-70"
      style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
    />
    <span className="absolute left-4 bottom-4 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/80">
      {image.label}
    </span>
  </div>
);
