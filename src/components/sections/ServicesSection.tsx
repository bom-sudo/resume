import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const services = [
  {
    name: "SAP Basis Administration",
    desc: "End-to-end SAP Basis work on ECC/Oracle/HP-UX landscapes — system copies, archiving, performance tuning, and troubleshooting for production environments."
  },
  {
    name: "Kubernetes & Data Center Ops",
    desc: "Managing containerized workloads, HP-UX servers, and core data center infrastructure to keep enterprise systems reliable and available."
  },
  {
    name: "AI Automation Pipelines",
    desc: "Designing Claude Code-driven workflows that chain transcript extraction, FFmpeg processing, and TTS/dubbing into fast, repeatable production pipelines."
  },
  {
    name: "Infrastructure Security",
    desc: "Mapping ISO/IEC 27001 controls to real infrastructure, closing forensic and compliance gaps across cloud and on-prem systems."
  },
  {
    name: "AI-Powered Content Tools",
    desc: "Building products like CutDeck — AI video editing tooling that combines Whisper, Claude, and FFmpeg to turn raw footage into finished content."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] first:border-t-0">
              <div className="text-[#0C0C0C] font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                0{i + 1}
              </div>
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-[#0C0C0C] font-medium uppercase mb-4" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
