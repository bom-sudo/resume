import React from 'react';
import { motion } from 'framer-motion';

interface FocusMotionGraphicProps {
  color: string;
  index: number;
}

const ORBIT_ANGLES = [0, 120, 240];

export const FocusMotionGraphic: React.FC<FocusMotionGraphicProps> = ({ color, index }) => {
  return (
    <div className="relative w-full h-28 mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-black/20">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}40 0%, transparent 65%)`,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 120 80" className="w-28 h-20" aria-hidden>
        {[48, 36, 24].map((r, i) => (
          <motion.circle
            key={r}
            cx="60"
            cy="40"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeOpacity={0.15 + i * 0.1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.15 + i * 0.1 }}
          />
        ))}

        <motion.circle
          cx="60"
          cy="40"
          r="6"
          fill={color}
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '60px 40px' }}
        >
          {ORBIT_ANGLES.map((angle) => (
            <circle
              key={angle}
              r="3"
              fill="white"
              cx={60 + 28 * Math.cos((angle * Math.PI) / 180)}
              cy={40 + 28 * Math.sin((angle * Math.PI) / 180)}
              opacity={0.7}
            />
          ))}
        </motion.g>
      </svg>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
      />
    </div>
  );
};
