import React, { useRef, useState, useEffect, type ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({ children, padding = 150, strength = 3, className = "" }) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < padding) {
        setIsActive(true);
        x.set(distanceX * (strength / 10));
        y.set(distanceY * (strength / 10));
      } else {
        setIsActive(false);
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, x, y]);

  return (
    <motion.div
      ref={magnetRef}
      style={{ x, y, willChange: 'transform' }}
      className={`relative inline-block ${className} ${isActive ? 'transition-none' : 'transition-transform duration-500 ease-in-out'}`}
    >
      {children}
    </motion.div>
  );
};
