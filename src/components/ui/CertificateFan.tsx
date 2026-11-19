import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CertificateCard } from './CertificateCard';
import type { Certificate } from '../../data/certificates';

interface CertificateFanProps {
  certs: Certificate[];
  /** Collector total printed on each card. */
  total: number;
  /** Called with the card's index in `certs`; without it, clicking a card opens its PDF. */
  onSelect?: (cert: Certificate, index: number) => void;
  /** 'md' = mini cards for the nav popover, 'lg' = full cards for the section. */
  size?: 'md' | 'lg';
  /** 'view' deals the hand when scrolled into view; 'mount' deals it right away (popovers). */
  trigger?: 'view' | 'mount';
}

const SIZES = {
  // card width + negative half-width margin, container height, top offset, degrees between cards
  md: { card: 'w-[120px] sm:w-[150px] -ml-[60px] sm:-ml-[75px]', box: 'h-[250px] sm:h-[300px]', top: 'top-5', spread: 10 },
  lg: {
    card: 'w-[150px] sm:w-[200px] md:w-[230px] -ml-[75px] sm:-ml-[100px] md:-ml-[115px]',
    box: 'h-[260px] sm:h-[330px] md:h-[380px]',
    top: 'top-6 sm:top-8',
    spread: 12,
  },
} as const;

/** A hand of certificate cards fanned out from a pivot below the container. */
export const CertificateFan: React.FC<CertificateFanProps> = ({
  certs,
  total,
  onSelect,
  size = 'lg',
  trigger = 'view',
}) => {
  const reduce = useReducedMotion();
  const s = SIZES[size];
  const n = certs.length;
  const mid = (n - 1) / 2;

  const dealt = (angle: number) => ({ rotate: angle, y: 0, opacity: 1 });
  const viewProps = (angle: number) =>
    trigger === 'view'
      ? { whileInView: dealt(angle), viewport: { once: true, amount: 0.3 } }
      : { animate: dealt(angle) };

  return (
    <div className={`relative ${s.box}`}>
      {certs.map((cert, i) => {
        const angle = (i - mid) * s.spread;
        return (
          <motion.div
            key={cert.file}
            className={`absolute left-1/2 ${s.top} ${s.card} origin-[50%_260%] hover:!z-20`}
            style={{ zIndex: n - Math.round(Math.abs(i - mid)) }}
            initial={{ rotate: 0, y: 120, opacity: 0 }}
            {...viewProps(angle)}
            transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.1 + i * 0.06 }}
          >
            {/* Pull the hovered card out of the hand */}
            <motion.div
              whileHover={reduce ? undefined : { y: size === 'lg' ? -28 : -18 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <CertificateCard
                cert={cert}
                number={i + 1}
                total={total}
                mini={size === 'md'}
                onSelect={onSelect ? () => onSelect(cert, i) : undefined}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
