'use client';

import { motion } from 'framer-motion';

type Variant = 'building' | 'frame';

interface Props {
  variant: Variant;
  className?: string;
}

const paths: Record<Variant, string[]> = {
  building: [
    'M60 340 L60 160 L200 80 L340 160 L340 340 Z',
    'M60 160 L340 160',
    'M150 340 L150 220 L250 220 L250 340',
    'M90 200 L90 260 M130 200 L130 260',
    'M270 200 L270 260 M310 200 L310 260',
  ],
  frame: [
    'M80 40 L80 360',
    'M200 40 L200 360',
    'M320 40 L320 360',
    'M80 40 L320 40',
    'M80 120 L320 120',
    'M80 240 L320 240',
  ],
};

export default function ArchitectureLineArt({ variant, className }: Props) {
  const strokes = paths[variant];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {strokes.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--color-ink)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: i * 0.15, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}