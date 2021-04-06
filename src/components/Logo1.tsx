import React from "react";
import { motion } from "framer-motion";

interface Props {}
// const svgVariants = {
//   hidden: { rotate: -180, y: -30 },
//   visible: { rotate: 0, y: 0, transition: { duration: 2 } },
// };
// const pathVariants = {
//   initial: { opacity: 0, pathLength: 0 },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: { duration: 3, ease: "easeInOut" },
//   },
// };
const pathVariants = {
  hidden: { opacity: 0.5, pathLength: 0 },
  visible: {
    opacity: 0.9,
    pathLength: 1,
    strokeWidth: 6,
    transition: { duration: 4, ease: "easeInOut" },
  },
};

const Logo = () => {
  return (
    <div className="logo">
      <motion.svg
        initial="hidden"
        animate="visible"
        width="90"
        height="46"
        viewBox="0 0 90 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <motion.path
            d="M8.5 46C44 24.5 4.5 24 3 21.5L17 2.5L51 43.5H60.5L28.5 2H53L70.5 43.5H73L87 21.5L67 0.5"
            stroke="#A7A9BE"
            variants={pathVariants}
          />
          <motion.path
            d="M5.5 46.5C41 25 1.5 24.5 0 22L14 3L48 44H57.5L25.5 2.5H50L67.5 44H70L84 22L64 1"
            stroke="#E53170"
            variants={pathVariants}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="90" height="46" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Logo;
