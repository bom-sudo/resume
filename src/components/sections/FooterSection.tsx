import React from 'react';
import { Mail, MessageCircle, Music, ArrowRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { profile } from '../../data/profile';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center items-center rounded-t-[40px] sm:rounded-t-[60px] -mt-10 isolate z-0">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
        alt="Cinematic Background"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 -z-10 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 w-full -translate-y-[10%]">
        <FadeIn delay={0.1} y={20}>
          <h2
            className="text-5xl md:text-6xl lg:text-[76px] text-white mb-6 tracking-tight whitespace-nowrap font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's Connect
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p className="text-white/60 text-sm uppercase tracking-widest mb-10 text-center">
            Ask me about
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl">
            {profile.askMeAbout.map((topic) => (
              <span
                key={topic}
                className="liquid-glass rounded-full px-5 py-2 text-white/80 text-xs uppercase tracking-wider border border-white/10 bg-white/[0.03]"
              >
                {topic}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="max-w-xl w-full flex flex-col items-center">
          <FadeIn delay={0.2} y={20} className="w-full">
            <a
              href={`mailto:${profile.email}`}
              className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-3 w-full mb-6 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors group"
            >
              <span className="text-white/80 flex-1 px-2 text-base font-light truncate">
                {profile.email}
              </span>
              <span className="bg-white rounded-full p-2.5 sm:p-3 text-black group-hover:scale-105 transition-transform flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p className="text-white/70 text-sm leading-relaxed px-4 max-w-lg mx-auto font-light text-center mb-8">
              {profile.tagline} Open to collaboration, learning, and building something amazing together.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.line}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all border border-white/10 bg-white/[0.03]"
            >
              Connect on LINE
            </a>
            <a
              href={profile.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all border border-white/10 bg-white/[0.03] flex items-center gap-2"
            >
              <Music className="w-4 h-4" />
              Coding Playlist
            </a>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={20} className="absolute bottom-10 flex justify-center gap-4 w-full z-10 pointer-events-none">
        <div className="flex gap-4 pointer-events-auto">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all border border-white/10 bg-white/[0.03]"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={profile.line}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Line"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all border border-white/10 bg-white/[0.03]"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href={profile.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify Playlist"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all border border-white/10 bg-white/[0.03]"
          >
            <Music className="w-4 h-4" />
          </a>
        </div>
      </FadeIn>
    </footer>
  );
};
