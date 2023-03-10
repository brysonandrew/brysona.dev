import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInterval } from "@hooks/useInterval";
import { GLITCH_ID, resolveRandomGlitch } from "./config";

export const Filter: FC<any> = () => {
  const glitch = resolveRandomGlitch();
  const [currGlitch, setGlitch] = useState(glitch);

  useInterval(() => {
    const glitch = resolveRandomGlitch();
    setGlitch(glitch);
  }, (currGlitch.duration + currGlitch.delay) * 1000);

  const baseFrequency = currGlitch.duration * 0.1;

  return (
    <filter id={GLITCH_ID}>
      <motion.feTurbulence
        type="turbulence"
        in="SourceGraphic"
        baseFrequency={`0 ${baseFrequency}`}
        animate={{ numOctaves: currGlitch.keyframes }}
        transition={{
          type: "keyframes",
          repeat: Infinity,
          repeatDelay: currGlitch.delay,
          duration: currGlitch.duration,
        }}
        result="turbulence"
      />
      <motion.feMorphology
        in="turbulence"
        operator="erode"
        radius="0.1"
        result="fatty"
      />
      <feOffset
        in="SourceGraphic"
        dx="10"
        dy="10"
        result="offset"
      />
      <motion.feDisplacementMap
        in2="fatty"
        in="offset"
        scale="10"
        xChannelSelector="R"
        yChannelSelector="G"
        result="displacement"
      />
    </filter>
  );
};
