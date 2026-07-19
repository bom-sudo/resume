import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Char = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4']
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={`relative inline-block ${className}`}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + (1 / chars.length);
        
        return (
          <Char 
            key={i} 
            char={char} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
};
