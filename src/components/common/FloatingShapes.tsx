"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type BlobData = {
  top: string;
  left: string;
  size: number;
  delay: number;
  gradientFrom: string;
  gradientTo: string;
};

type RawBlobData = {
  top: number;
  left: number;
  size: number;
  delay: number;
  gradientFrom: string;
  gradientTo: string;
};

const pinkPalette = [
  ["#fdecef", "#f9a8d4"],
  ["#ffe4e6", "#fbcfe8"],
  ["#fcd5ce", "#fda4af"],
  ["#ffeef0", "#fecdd3"],
  ["#fdf2f8", "#fbcfe8"],
];

export default function FloatingShapes() {
  const [blobs, setBlobs] = useState<BlobData[]>([]);

  useEffect(() => {
    const generateBlobs = (): BlobData[] => {
      const maxBlobs = 10;
      const minDistance = 20;
      const generated: RawBlobData[] = [];

      for (let i = 0; i < maxBlobs; i++) {
        let attempt = 0;
        let newBlob: RawBlobData | undefined;

        while (attempt < 100) {
          const top = Math.floor(Math.random() * 70);
          const left = Math.floor(Math.random() * 70);

          const size = 220 + Math.floor(Math.random() * 100);

          const overlaps = generated.some((blob) => {
            const dx = blob.left - left;
            const dy = blob.top - top;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < minDistance;
          });

          if (!overlaps) {
            const [gradientFrom, gradientTo] =
              pinkPalette[i % pinkPalette.length];
            newBlob = {
              top,
              left,
              size,
              delay: i * 1.5,
              gradientFrom,
              gradientTo,
            };
            break;
          }

          attempt++;
        }

        if (newBlob) {
          generated.push(newBlob);
        }
      }

      return generated.map((blob) => ({
        top: `${blob.top}%`,
        left: `${blob.left}%`,
        size: blob.size,
        delay: blob.delay,
        gradientFrom: blob.gradientFrom,
        gradientTo: blob.gradientTo,
      }));
    };

    setBlobs(generateBlobs());
  }, []);

  return (
    <div className="w-full h-full pointer-events-none relative overflow-visible">
      {blobs.map((blob, index) => (
        <motion.svg
          key={index}
          width={blob.size}
          height={blob.size}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute blur-sm"
          style={{
            top: blob.top,
            left: blob.left,
          }}
          animate={{
            y: [0, -20, 10],
            x: [0, 15, -15, 0],
            scale: [1, 1.05, 0.98, 1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        >
          <defs>
            <linearGradient
              id={`grad-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={blob.gradientFrom} />
              <stop offset="100%" stopColor={blob.gradientTo} />
            </linearGradient>
            <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="50"
            fill={`url(#grad-${index})`}
            fillOpacity="0.2"
            filter="url(#blurGlow)"
          />
        </motion.svg>
      ))}
    </div>
  );
}
