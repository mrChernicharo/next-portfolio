import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    transition: {
      duration: 4,
      ease: "easeInOut",
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  },
};

// const HeaderLayout: React.FC = ({ children }) => {
//   return (
//     <>
//       <Logo />
//       {children}
//     </>
//   );
// };

export default function Logo() {
  return (
    <div className="logo">
      <motion.svg
        initial="hidden"
        animate="visible"
        width="117"
        height="55"
        viewBox="0 0 117 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          // variants={pathVariants}
          d="M97 50C100.333 44.1667 110.5 24.5 114.5 26C108.667 21.3333 97 10.6 97 5"
          stroke="#A7A9BE"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <motion.path
          // variants={pathVariants}
          d="M83 41C81.1667 44.6667 76.3 50.8 71.5 46C65.5 40 64.5 18.5 66 14.5C67.5 10.5 69.5 9.5 71.5 10C73.5 10.5 78 14.5 78 19"
          stroke="#A7A9BE"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <motion.path
          // variants={pathVariants}
          d="M48.5 49C45.8413 40.4921 43.8453 33.9576 42.3651 29M58 11.5C56.5 10.5 52.5 7.99999 45.5 7.49999C39.9 7.09999 38.5 12.3333 38.5 15C38.5 15.4451 39.3915 19.0403 42.3651 29M42.3651 29C45.2434 28.1667 51.7 27 54.5 29"
          stroke="#A7A9BE"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <motion.path
          // variants={pathVariants}
          d="M25.5 5C22.1667 10.8333 12 30.5 8 29C13.8333 33.6667 25.5 44.4 25.5 50"
          stroke="#A7A9BE"
          strokeLinecap="round"
          strokeWidth="6"
        />
        <motion.path
          // variants={pathVariants}
          d="M94 48C97.3333 42.1667 107.5 22.5 111.5 24C105.667 19.3333 94 8.6 94 3"
          stroke="#E53170"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <motion.path
          // variants={pathVariants}
          d="M80 39C78.1667 42.6667 73.3 48.8 68.5 44C62.5 38 61.5 16.5 63 12.5C64.5 8.5 66.5 7.5 68.5 8C70.5 8.5 75 12.5 75 17"
          stroke="#E53170"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <motion.path
          // variants={pathVariants}
          d="M45.5 47C42.8413 38.4921 40.8453 31.9576 39.3651 27M55 9.5C53.5 8.5 49.5 5.99999 42.5 5.49999C36.9 5.09999 35.5 10.3333 35.5 13C35.5 13.4451 36.3915 17.0403 39.3651 27M39.3651 27C42.2434 26.1667 48.7 25 51.5 27"
          stroke="#E53170"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <motion.path
          // variants={pathVariants}
          d="M22.5 3C19.1667 8.83333 9 28.5 5 27C10.8333 31.6667 22.5 42.4 22.5 48"
          stroke="#E53170"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </motion.svg>

      {/* <motion.svg
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
            strokeLinecap="round"
            varianW={pathVariants}
          />
          <motion.path
            d="M5.5 46.5C41 25 1.5 24.5 0 22L14 3L48 44H57.5L25.5 2.5H50L67.5 44H70L84 22L64 1"
            stroke="#E53170"
            strokeLinecap="round"
            varianW={pathVariants}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="90" height="46" fill="white" />
          </clipPath>
        </defs>
      </motion.svg> */}
    </div>
  );
}

// export default Logo;
