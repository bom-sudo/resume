import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { journey } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

const VIEW_WIDTH = 280;
const VIEW_HEIGHT = 340;
const TOP_MARGIN = 55;
const BOTTOM_MARGIN = 55;
const LEFT_X = 80;
const RIGHT_X = 200;
const LABEL_GAP = 32;
const LABEL_WIDTH = 118;
const LABEL_HEIGHT = 100;

interface NodePosition {
  cx: number;
  cy: number;
}

function getNodePositions(count: number): NodePosition[] {
  const spacing = count > 1 ? (VIEW_HEIGHT - TOP_MARGIN - BOTTOM_MARGIN) / (count - 1) : 0;
  return Array.from({ length: count }, (_, i) => ({
    cx: i % 2 === 0 ? LEFT_X : RIGHT_X,
    cy: TOP_MARGIN + spacing * i,
  }));
}

function buildPathD(positions: NodePosition[]): string {
  if (positions.length === 0) return '';
  const [first, ...rest] = positions;
  let d = `M ${first.cx} ${first.cy}`;
  let prev = first;
  for (const point of rest) {
    const midY = (prev.cy + point.cy) / 2;
    d += ` C ${prev.cx} ${midY} ${point.cx} ${midY} ${point.cx} ${point.cy}`;
    prev = point;
  }
  return d;
}

export const JourneyMotionGraphic: React.FC = () => {
  const { t } = useLanguage();
  const steps = journey.map((step, i) => ({ ...step, title: t.journey.entries[i].title }));
  const nodePositions = useMemo(() => getNodePositions(journey.length), []);
  const pathD = useMemo(() => buildPathD(nodePositions), [nodePositions]);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);
  const progress = useSpring(rawProgress, { stiffness: 60, damping: 20 });
  const offsetDistance = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[320px] mx-auto lg:mx-0 mb-10"
      style={{ aspectRatio: `${VIEW_WIDTH} / ${VIEW_HEIGHT}` }}
    >
      <motion.div
        className="absolute inset-0 overflow-visible"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="absolute inset-0 journey-grid opacity-40" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px]"
          style={{
            background:
              'radial-gradient(circle, rgba(182,0,168,0.25) 0%, rgba(69,183,209,0.15) 50%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="absolute inset-0 w-full h-full"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="journeyPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="45%" stopColor="#4ecdc4" />
              <stop offset="100%" stopColor="#45b7d1" />
            </linearGradient>
            <filter id="journeyGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d={pathD}
            className="stroke-border-primary"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <motion.path
            d={pathD}
            stroke="url(#journeyPathGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#journeyGlow)"
            style={{ pathLength: progress }}
          />

          {journey.map((step, i) => (
            <motion.circle
              key={`pulse-${step.company}`}
              r="38"
              cx={nodePositions[i].cx}
              cy={nodePositions[i].cy}
              fill={step.accent}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'easeInOut',
              }}
            />
          ))}

          {journey.map((step, i) => (
            <g key={step.company}>
              <motion.circle
                cx={nodePositions[i].cx}
                cy={nodePositions[i].cy}
                r="22"
                fill={step.accent}
                filter="url(#journeyGlow)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 200 }}
              />
              <foreignObject
                x={nodePositions[i].cx - 20}
                y={nodePositions[i].cy - 20}
                width="40"
                height="40"
              >
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden bg-bg-inverse flex items-center justify-center p-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, type: 'spring', stiffness: 200 }}
                >
                  <img src={step.iconSrc} alt={step.company} className="w-full h-full object-contain" />
                </motion.div>
              </foreignObject>
            </g>
          ))}

          {steps.map((step, i) => {
            const { cx, cy } = nodePositions[i];
            const isLeft = cx <= VIEW_WIDTH / 2;
            const x = isLeft ? cx + LABEL_GAP : cx - LABEL_GAP - LABEL_WIDTH;
            const y = cy - LABEL_HEIGHT / 2;

            return (
              <foreignObject
                key={step.company}
                x={x}
                y={y}
                width={LABEL_WIDTH}
                height={LABEL_HEIGHT}
                style={{ overflow: 'visible' }}
              >
                <motion.div
                  className={`flex flex-col pointer-events-none ${
                    isLeft ? 'items-start text-left' : 'items-end text-right'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5"
                    style={{ color: step.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-text-primary text-xs font-semibold leading-tight">
                    {step.title}
                  </span>
                  <span className="text-text-muted text-[10px] uppercase tracking-widest mt-0.5 opacity-60">
                    {step.company}
                  </span>
                </motion.div>
              </foreignObject>
            );
          })}

          <motion.circle
            r="5"
            className="fill-text-primary"
            filter="url(#journeyGlow)"
            style={{ offsetPath: `path('${pathD}')`, offsetDistance }}
          />
        </svg>

        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted opacity-60">
            {t.ui.livePath}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
