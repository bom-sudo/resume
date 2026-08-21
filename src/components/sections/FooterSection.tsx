import React from 'react';
import { MessageCircle, Music, Users, Code, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export const FooterSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="relative min-h-screen bg-bg-primary overflow-hidden flex flex-col justify-between items-center rounded-t-[40px] sm:rounded-t-[60px] -mt-10 isolate z-0 border-t border-border-primary px-6 py-16 sm:py-24">
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 journey-grid opacity-50 -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-bg-primary/50 -z-10 pointer-events-none" />
      
      {/* Central Highlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-15">
        <div className="w-[800px] h-[400px] bg-bg-inverse/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-[#B600A8]/30 rounded-full blur-[140px]" />
        <div className="absolute top-[10%] right-[5%] w-[550px] h-[550px] bg-[#4ecdc4]/30 rounded-full blur-[130px]" />
      </div>

      {/* Top spacing */}
      <div />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center my-auto py-12">
        {/* Section Index tag */}
        <FadeIn delay={0.05} y={15}>
          <span className="text-[#B600A8] text-sm font-bold uppercase tracking-[0.3em] mb-4 block drop-shadow-md">
            {t.footer.eyebrow}
          </span>
        </FadeIn>

        {/* Big Bold Heading */}
        <FadeIn delay={0.1} y={20}>
          <h2 className="hero-heading font-black uppercase tracking-tighter leading-none mb-8 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw]">
            {t.footer.heading}
          </h2>
        </FadeIn>

        {/* Large Email Link */}
        <FadeIn delay={0.15} y={20} className="w-full flex justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 sm:gap-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary hover:text-text-primary transition-colors duration-300 mb-12 border-b-2 border-border-primary hover:border-[#B600A8] pb-2 relative max-w-full drop-shadow-lg"
          >
            <span className="truncate">{profile.email}</span>
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-text-muted group-hover:text-[#B600A8] transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 shrink-0" />
          </a>
        </FadeIn>

        {/* Ask Me About Topic Clouds */}
        <FadeIn delay={0.2} y={20} className="mb-14">
          <p className="text-text-muted text-xs uppercase tracking-[0.25em] mb-5 font-medium">
            {t.footer.askMeAboutLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {t.footer.askMeAbout.map((topic) => (
              <span
                key={topic}
                className="liquid-glass rounded-full px-5 py-2 text-text-primary text-xs uppercase tracking-wider border border-border-primary bg-bg-inverse/[0.05] hover:border-border-primary hover:bg-bg-inverse/[0.1] hover:text-text-primary transition-all duration-300 shadow-lg"
              >
                {topic}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.25} y={20} className="max-w-xl mb-12">
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {t.footer.tagline}
          </p>
        </FadeIn>

        {/* Social Cards Grid */}
        <FadeIn delay={0.3} y={20} className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl w-full">
            {[
              { name: 'LINE', href: profile.line, icon: MessageCircle, hoverColor: 'hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] hover:text-emerald-400' },
              { name: 'GitHub', href: profile.github, icon: Code, hoverColor: 'hover:border-border-primary hover:bg-bg-inverse/[0.02] hover:text-text-primary' },
              { name: 'Facebook', href: profile.facebook, icon: Users, hoverColor: 'hover:border-blue-500/30 hover:bg-blue-500/[0.02] hover:text-blue-400' },
              { name: 'Spotify', href: profile.spotify, icon: Music, hoverColor: 'hover:border-green-500/30 hover:bg-green-500/[0.02] hover:text-green-400' },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`liquid-glass rounded-2xl p-4 flex flex-col items-center gap-3 border border-border-primary bg-bg-inverse/[0.02] transition-all duration-300 ${social.hoverColor} group`}
                >
                  <Icon className="w-5 h-5 text-text-muted group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-xs uppercase tracking-widest font-medium text-text-muted group-hover:text-inherit">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Footer Bottom Info */}
      <FadeIn delay={0.4} y={15} className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center border-t border-border-primary pt-8 mt-12 gap-4 text-xs text-text-muted tracking-wider">
        <p>© {new Date().getFullYear()} {profile.name} "{profile.nickname}". All rights reserved.</p>
        <p className="uppercase">{t.footer.builtWith}</p>
      </FadeIn>
    </footer>
  );
};

