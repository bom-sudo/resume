import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CertificateFan } from './CertificateFan';
import { CertificateModal } from './CertificateModal';
import { featuredCertificates, internalCertificates, type Certificate } from '../../data/certificates';
import { useLanguage } from '../../context/LanguageContext';

const TOTAL = featuredCertificates.length + internalCertificates.length;
const ART = featuredCertificates.filter((c) => c.artImage);

/** Nav item: a tiny hand of cards that pops the featured certificates out below the nav. */
export const NavCertificates: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, t } = useLanguage();
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const [selected, setSelected] = useState<{ cert: Certificate; number: number } | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useLayoutEffect(() => {
    if (open && btnRef.current) setTop(btnRef.current.getBoundingClientRect().bottom + 14);
  }, [open]);

  // ปิดป๊อปอัปเมื่อคลิกนอกกรอบ กด Esc หรือเลื่อนหน้าจอ
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !btnRef.current?.contains(target)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        btnRef.current?.focus();
      }
    };
    // Only a real scroll closes it; layout shifts can fire tiny scroll events right after opening.
    const startY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > 40) close();
    };
    document.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('pointerdown', onDown);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={`px-4 py-2 sm:px-3 lg:px-4 xl:px-6 sm:py-2.5 rounded-full uppercase hover:text-text-primary hover:bg-white/10 transition-all duration-300 ease-out ${
          open ? 'text-text-primary bg-white/10' : 'text-text-muted/70'
        } ${className}`}
      >
        {t.nav.certificates}
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-label={t.nav.certificates}
              className="fixed left-1/2 z-[60] w-[min(680px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-[28px] border border-border-primary bg-bg-primary/85 backdrop-blur-xl shadow-2xl text-text-primary"
              style={{ top }}
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-baseline justify-between gap-3 px-5 pt-4">
                <p className="font-bold uppercase tracking-wider text-sm">{t.nav.certificates}</p>
                <p className="text-xs text-text-muted/70">
                  {lang === 'th' ? 'คลิกการ์ดเพื่อดูรายละเอียด' : 'Click a card to inspect'}
                </p>
              </div>

              <CertificateFan
                certs={ART}
                total={TOTAL}
                size="md"
                trigger="mount"
                onSelect={(cert, i) => {
                  setOpen(false);
                  setSelected({ cert, number: i + 1 });
                }}
              />

              <a
                href="#certificates"
                onClick={close}
                className="group/all relative z-30 flex items-center justify-center gap-2 border-t border-border-primary px-5 py-3 text-sm font-medium text-text-muted hover:text-text-primary hover:bg-bg-inverse/[0.04] transition-colors"
              >
                {lang === 'th' ? `ดูทั้งหมด ${TOTAL} ใบ` : `View all ${TOTAL}`}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/all:translate-x-0.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}

      {createPortal(
        <CertificateModal
          cert={selected?.cert ?? null}
          number={selected?.number ?? 1}
          total={TOTAL}
          onClose={() => setSelected(null)}
        />,
        document.body,
      )}
    </>
  );
};
