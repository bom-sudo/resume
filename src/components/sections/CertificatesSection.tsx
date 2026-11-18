import React, { useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { featuredCertificates, internalCertificates, type Certificate } from '../../data/certificates';
import { useLanguage } from '../../context/LanguageContext';

const CertificateLink: React.FC<{ cert: Certificate; compact?: boolean }> = ({ cert, compact }) => {
  const { lang, t } = useLanguage();
  const date = new Date(cert.date).toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <a
      href={`/certificates/${cert.file}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cert.title[lang]} (${t.certificates.viewPdf})`}
      className={`group flex flex-col gap-3 rounded-[20px] bg-bg-inverse/[0.03] border border-border-primary hover:bg-bg-inverse/[0.06] transition-colors duration-300 ${
        compact ? 'p-5' : 'p-6 sm:p-7 h-full'
      }`}
    >
      <div className="flex items-start gap-3">
        <FileText className="w-5 h-5 shrink-0 mt-0.5 text-text-muted" />
        <h3 className={`font-bold text-text-primary leading-snug ${compact ? 'text-sm' : 'text-base sm:text-lg'}`}>
          {cert.title[lang]}
        </h3>
      </div>
      <p className="text-text-muted/80 text-sm font-light leading-relaxed">{cert.issuer[lang]}</p>
      <div className="flex items-center justify-between mt-auto pt-1 text-xs text-text-muted/80">
        <span>{date}</span>
        <span className="inline-flex items-center gap-1 font-medium text-text-primary">
          {t.certificates.viewPdf}
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
};

export const CertificatesSection: React.FC = () => {
  const { t } = useLanguage();
  const [showInternal, setShowInternal] = useState(false);

  return (
    <section id="certificates" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-bg-primary relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase tracking-tight text-text-primary text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)' }}
          >
            {t.certificates.heading}
          </h2>
          <p className="text-text-muted/80 text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            {t.certificates.intro}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredCertificates.map((cert) => (
            <FadeIn key={cert.file} delay={0} y={24} className="h-full">
              <CertificateLink cert={cert} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              {t.certificates.internalHeading}{' '}
              <span className="text-text-muted/70 font-light">({internalCertificates.length})</span>
            </h3>
            <button
              onClick={() => setShowInternal((v) => !v)}
              aria-expanded={showInternal}
              className="self-start sm:self-auto px-4 py-2 rounded-full text-sm font-medium border border-border-primary text-text-primary hover:bg-bg-inverse/[0.06] transition-colors"
            >
              {showInternal ? t.certificates.hide : t.certificates.showAll}
            </button>
          </div>

          {showInternal && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {internalCertificates.map((cert) => (
                <CertificateLink key={cert.file} cert={cert} compact />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
