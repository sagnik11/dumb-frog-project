import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// SVG Flower Components
const FlowerOne = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FlowerTwo = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#f9a8d4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V3m4.5 9a4.5 4.5 0 1 0 4.5 4.5M16.5 12H21m-4.5 4.5a4.5 4.5 0 1 1-4.5 4.5M12 16.5V21m-4.5-4.5A4.5 4.5 0 1 1 3 12m4.5 4.5H3" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FlowerThree = () => (
  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1V4c0-.6.4-1 1-1zm0 16c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-.6.4-1 1-1zm9-9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1zM4 12c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1zm15.7-6.3c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0zM7.1 17.9c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0zM19.7 17.9c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-1.4-1.4c-.4-.4-.4-1 0-1.4zM7.1 6.1c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L7.1 7.5c-.4-.4-.4-1 0-1.4z" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const FlowerFour = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2s2 4 2 6c0 2.5-1.5 4-3 4s-3-1.5-3-4c0-2 2-6 2-6zm0 20s-2-4-2-6c0-2.5 1.5-4 3-4s3 1.5 3 4c0 2-2 6-2 6zm10-10s-4 2-6 2c-2.5 0-4-1.5-4-3s1.5-3 4-3c2 0 6 2 6 2zM2 12s4-2 6-2c2.5 0 4 1.5 4 3s-1.5 3-4 3c-2 0-6-2-6-2z" />
  </svg>
);

interface FlowerProps {
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: number;
}

const Flower = ({ top, left, delay, duration, type }: FlowerProps) => {
  const flowerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 0.7, scale: 1 },
    exit: { opacity: 0, scale: 0 }
  };

  const FlowerComponent = () => {
    switch (type % 4) {
      case 0:
        return <FlowerOne />;
      case 1:
        return <FlowerTwo />;
      case 2:
        return <FlowerThree />;
      case 3:
        return <FlowerFour />;
      default:
        return <FlowerOne />;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={flowerVariants}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: Math.random() * 2
      }}
    >
      <FlowerComponent />
    </motion.div>
  );
};

export function FlowerAnimations() {
  const [flowers, setFlowers] = useState<FlowerProps[]>([]);

  useEffect(() => {
    // Generate random flowers
    const generateFlowers = () => {
      const newFlowers: FlowerProps[] = [];
      const flowerCount = 15; // Number of flowers to display

      for (let i = 0; i < flowerCount; i++) {
        newFlowers.push({
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 7,
          type: Math.floor(Math.random() * 4)
        });
      }

      setFlowers(newFlowers);
    };

    generateFlowers();

    // Regenerate flowers every 30 seconds for variety
    const interval = setInterval(generateFlowers, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower, index) => (
        <Flower key={index} {...flower} />
      ))}
    </div>
  );
}
