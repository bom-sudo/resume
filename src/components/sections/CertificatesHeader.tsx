import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { CertificateFan } from '../ui/CertificateFan';
import {
  featuredCertificates,
  internalCertificates,
  type Certificate,
} from '../../data/certificates';
import { useLanguage } from '../../context/LanguageContext';

const TOTAL = featuredCertificates.length + internalCertificates.length;
const ISSUERS = new Set([...featuredCertificates, ...internalCertificates].map((c) => c.issuerCode)).size;
// featuredCertificates all have art, so fan indices match collector numbers (index + 1).
const ART = featuredCertificates.filter((c) => c.artImage);

/** Section heading in the site's standard style, with the featured artworks fanned out below. */
export const CertificatesHeader: React.FC<{
  onSelect?: (cert: Certificate, index: number) => void;
}> = ({ onSelect }) => {
  const { lang, t } = useLanguage();
  const stats = [
    { v: TOTAL, l: lang === 'th' ? 'ใบทั้งหมด' : 'Certificates' },
    { v: featuredCertificates.length, l: lang === 'th' ? 'หลักสูตรภายนอก' : 'External' },
    { v: ISSUERS, l: lang === 'th' ? 'หน่วยงาน' : 'Issuers' },
  ];

  return (
    <div className="mb-20">
      <FadeIn delay={0} y={30}>
        <h2
          className="font-black uppercase tracking-tight text-text-primary text-center mb-4"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)' }}
        >
          {t.certificates.heading}
        </h2>
        <p className="text-text-muted/80 text-center max-w-2xl mx-auto font-light leading-relaxed">
          {t.certificates.intro}
        </p>

        <dl className="mt-10 flex justify-center divide-x divide-border-primary">
          {stats.map((s) => (
            <div key={s.l} className="px-6 sm:px-10 text-center">
              <dt className="sr-only">{s.l}</dt>
              <dd className="font-black text-text-primary tabular-nums leading-none" style={{ fontSize: 'clamp(1.75rem, 4vw, 40px)' }}>
                {s.v}
              </dd>
              <dd className="mt-2 text-[11px] sm:text-xs uppercase tracking-wider text-text-muted/70">{s.l}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>

      {/* Clip the bottom of the hand and fade it out; top padding leaves room for the hover lift. */}
      <div className="relative mt-4 pt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_78%,transparent)]">
        <CertificateFan certs={ART} total={TOTAL} onSelect={onSelect} />
      </div>
    </div>
  );
};
