import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { CertificatesHeader } from './CertificatesHeader';
import { CardBack, CertificateCard } from '../ui/CertificateCard';
import { CertificateModal } from '../ui/CertificateModal';
import { featuredCertificates, internalCertificates, type Certificate } from '../../data/certificates';
import { useLanguage } from '../../context/LanguageContext';

const TOTAL = featuredCertificates.length + internalCertificates.length;
// Slight fan so the row reads as a hand of cards; straightens when hovered.
const FAN = [-3, 1.5, -1.5, 2.5, -2, 1];

export const CertificatesSection: React.FC = () => {
  const { t } = useLanguage();
  const [showInternal, setShowInternal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{ cert: Certificate; number: number } | null>(null);

  return (
    <section id="certificates" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-bg-primary relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <CertificatesHeader
          onSelect={(cert) => setSelectedCert({ cert, number: featuredCertificates.indexOf(cert) + 1 })}
        />

        {/* Featured: rare+ cards dealt into a hand */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
          {featuredCertificates.map((cert, i) => (
            <motion.div
              key={cert.file}
              className="w-full max-w-[300px]"
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18, delay: (i % 3) * 0.08 }}
            >
              <div
                className="[rotate:var(--fan)] hover:[rotate:0deg] transition-[rotate] duration-300"
                style={{ '--fan': `${FAN[i % FAN.length]}deg` } as React.CSSProperties}
              >
                <CertificateCard
                  cert={cert}
                  number={i + 1}
                  total={TOTAL}
                  onSelect={() => setSelectedCert({ cert, number: i + 1 })}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internal training: a face-down deck that deals out the common cards */}
        <div className="mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-10">
            <button
              onClick={() => setShowInternal((v) => !v)}
              aria-expanded={showInternal}
              aria-controls="internal-certificates"
              className="group relative w-24 shrink-0 self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-primary rounded-[14px]"
            >
              <CardBack className="absolute inset-0 rotate-[-8deg] translate-x-[-6px] opacity-70 transition-transform duration-300 group-hover:rotate-[-14deg] group-hover:translate-x-[-12px]" />
              <CardBack className="absolute inset-0 rotate-[5deg] translate-x-[5px] opacity-85 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:translate-x-[10px]" />
              <CardBack className="relative transition-transform duration-300 group-hover:-translate-y-2" />
              <span className="absolute -top-2 -right-3 min-w-7 h-7 px-1.5 rounded-full bg-bg-inverse text-text-inverse text-xs font-bold flex items-center justify-center shadow-lg">
                {internalCertificates.length}
              </span>
            </button>

            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-3">
                {t.certificates.internalHeading}{' '}
                <span className="text-text-muted/70 font-light">({internalCertificates.length})</span>
              </h3>
              <button
                onClick={() => setShowInternal((v) => !v)}
                aria-expanded={showInternal}
                aria-controls="internal-certificates"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border-primary text-text-primary hover:bg-bg-inverse/[0.06] transition-colors"
              >
                <Layers className="w-4 h-4" />
                {showInternal ? t.certificates.hide : t.certificates.showAll}
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {showInternal && (
              <motion.div
                id="internal-certificates"
                className="grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {internalCertificates.map((cert, i) => (
                  <motion.div
                    key={cert.file}
                    initial={{ opacity: 0, x: -60, y: -40, rotate: -12, scale: 0.6 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20, delay: i * 0.04 }}
                  >
                    <CertificateCard
                      cert={cert}
                      number={featuredCertificates.length + i + 1}
                      total={TOTAL}
                      mini
                      onSelect={() =>
                        setSelectedCert({
                          cert,
                          number: featuredCertificates.length + i + 1,
                        })
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sleek Certificate Modal / Card & PDF Inspector */}
      <CertificateModal
        cert={selectedCert?.cert ?? null}
        number={selectedCert?.number ?? 1}
        total={TOTAL}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
