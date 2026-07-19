import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { journey } from '../../data/profile';

const NODE_POSITIONS = [
  { cx: 72, cy: 72 },
  { cx: 200, cy: 168 },
  { cx: 88, cy: 268 },
];

const PATH_D =
  'M 72 72 C 140 72 180 110 200 168 C 220 226 160 250 88 268';

export const JourneyMotionGraphic: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);
  const progress = useSpring(rawProgress, { stiffness: 60, damping: 20 });
  const offsetDistance = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="relative w-full max-w-[320px] aspect-square mx-auto lg:mx-0 mb-10">
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
          viewBox="0 0 280 340"
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
            d={PATH_D}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <motion.path
            d={PATH_D}
            stroke="url(#journeyPathGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#journeyGlow)"
            style={{ pathLength: progress }}
          />

          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="38"
              cx={NODE_POSITIONS[i].cx}
              cy={NODE_POSITIONS[i].cy}
              fill={journey[i].accent}
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
                cx={NODE_POSITIONS[i].cx}
                cy={NODE_POSITIONS[i].cy}
                r="22"
                fill={step.accent}
                filter="url(#journeyGlow)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 200 }}
              />
              <foreignObject
                x={NODE_POSITIONS[i].cx - 20}
                y={NODE_POSITIONS[i].cy - 20}
                width="40"
                height="40"
              >
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-1"
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

          <motion.circle
            r="5"
            fill="white"
            filter="url(#journeyGlow)"
            style={{ offsetPath: `path('${PATH_D}')`, offsetDistance }}
          />
        </svg>

        {journey.map((step, i) => {
          const align = i === 1 ? 'items-center text-center' : 'items-start';
          const left = i === 1 ? 'left-1/2 -translate-x-1/2' : i === 0 ? 'left-2' : 'left-4';
          const top =
            i === 0 ? 'top-2' : i === 1 ? 'top-[42%]' : 'bottom-6';

          return (
            <motion.div
              key={step.company}
              className={`absolute ${left} ${top} flex flex-col ${align} pointer-events-none`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5"
                style={{ color: step.accent }}
              >
                0{i + 1}
              </span>
              <span className="text-white/90 text-xs font-semibold leading-tight max-w-[90px]">
                {step.title}
              </span>
              <span className="text-white/35 text-[10px] uppercase tracking-widest mt-0.5">
                {step.company}
              </span>
            </motion.div>
          );
        })}

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
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Live path
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
