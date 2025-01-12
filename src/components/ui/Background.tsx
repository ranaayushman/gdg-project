import React from "react";
import { motion } from "framer-motion";
import {
  SiGooglecloud,
  SiGoogleanalytics,
  SiGooglemeet,
  SiGoogleads,
  SiTensorflow,
  SiGooglescholar,
  SiAndroid,
  SiGoogleplay,
  SiGoogletagmanager,
} from "react-icons/si";

interface BackgroundElementsProps {
  iconConfig?: Array<{
    Icon: React.ComponentType<{ className?: string }>;
    color?: string;
    x?: string;
    y?: string;
    size?: string;
    rotation?: string;
  }>;
  blurColors?: {
    first?: string;
    second?: string;
  };
}

const DefaultBackgroundIcons = [
  {
    Icon: SiGooglecloud,
    color: "text-blue-500",
    x: "left-10",
    y: "top-20",
    size: "text-4xl",
    rotation: "rotate-12",
  },
  {
    Icon: SiGoogleanalytics,
    color: "text-green-500",
    x: "right-20",
    y: "top-10",
    size: "text-5xl",
    rotation: "-rotate-6",
  },
  {
    Icon: SiGooglemeet,
    color: "text-red-500",
    x: "left-1/3",
    y: "bottom-1/4",
    size: "text-6xl",
    rotation: "rotate-6",
  },
  {
    Icon: SiGoogleads,
    color: "text-yellow-500",
    x: "right-1/4",
    y: "bottom-1/2",
    size: "text-4xl",
    rotation: "-rotate-12",
  },
  {
    Icon: SiTensorflow,
    color: "text-orange-500",
    x: "left-1/2",
    y: "top-1/3",
    size: "text-5xl",
    rotation: "rotate-3",
  },
  {
    Icon: SiGooglescholar,
    color: "text-blue-700",
    x: "left-20",
    y: "bottom-10",
    size: "text-4xl",
    rotation: "rotate-45",
  },
  {
    Icon: SiAndroid,
    color: "text-green-600",
    x: "right-10",
    y: "top-1/2",
    size: "text-6xl",
    rotation: "-rotate-45",
  },
  {
    Icon: SiGoogleplay,
    color: "text-blue-400",
    x: "left-1/4",
    y: "top-1/2",
    size: "text-5xl",
    rotation: "rotate-15",
  },
  {
    Icon: SiGoogletagmanager,
    color: "text-purple-500",
    x: "right-1/3",
    y: "bottom-10",
    size: "text-4xl",
    rotation: "-rotate-3",
  },
];

const BackgroundElements: React.FC<BackgroundElementsProps> = ({
  iconConfig = DefaultBackgroundIcons,
  blurColors = {
    first: "from-blue-500 to-purple-600",
    second: "from-red-400 to-yellow-500",
  },
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Blurs */}
      <div
        className={`absolute top-20 left-20 w-60 h-60 bg-gradient-to-br ${blurColors.first} rounded-full blur-3xl opacity-50 shadow-lg`}
      />
      <div
        className={`absolute bottom-10 right-20 w-72 h-72 bg-gradient-to-br ${blurColors.second} rounded-full blur-3xl opacity-50 shadow-lg`}
      />

      {/* Icons */}
      {iconConfig.map(({ Icon, color, x, y, size, rotation }, index) => (
        <motion.div
          key={`icon-${index}`}
          className={`absolute ${x} ${y} ${rotation}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.3, 0.6, 0.3, 0],
            scale: [0.5, 1, 1.2, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <Icon className={`${color} ${size} opacity-30`} />
        </motion.div>
      ))}

      {/* Additional Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-darkgray/10 dark:to-transparent mix-blend-overlay" />
    </div>
  );
};

export default BackgroundElements;
