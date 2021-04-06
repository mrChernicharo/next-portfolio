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

const Logo = () => {
  return (
    <div className="logo">
      <motion.svg
        width="88"
        height="40"
        viewBox="0 0 88 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // initial={{ x: -100, opacity: 0 }}
        // animate={{ x: 0, opacity: 0.8 }}
      >
        <motion.g clipPath="url(#clip0)">
          <motion.path
            d="M63.6266 22.1504C61.9933 21.182 61.9933 18.818 63.6266 17.8496L83.9749 5.78396C85.6414 4.79581 87.75 5.99692 87.75 7.93435V32.0656C87.75 34.0031 85.6414 35.2042 83.9749 34.216L63.6266 22.1504Z"
            fill="#E53170"
            initial={{ opacity: 0.2, x: 100 }}
            animate={{
              opacity: 0.8,
              x: 0,
              transition: { delay: 0.3, type: "tween" },
            }}
          />
          <motion.path
            d="M63.6266 22.1504C61.9933 21.182 61.9933 18.818 63.6266 17.8496L83.9749 5.78396C85.6414 4.79581 87.75 5.99692 87.75 7.93435V32.0656C87.75 34.0031 85.6414 35.2042 83.9749 34.216L63.6266 22.1504Z"
            fill="#F25F4C"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.8, x: 0, transition: { delay: 0.6 } }}
          />
          <motion.path
            d="M43.5545 22.1414C41.9413 21.1695 41.9413 18.8305 43.5545 17.8586L70.7099 1.49874C72.3761 0.494914 74.5 1.69491 74.5 3.64015V36.3598C74.5 38.3051 72.3761 39.5051 70.7099 38.5013L43.5545 22.1414Z"
            fill="#F25F4C"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.8, x: 0, transition: { delay: 0.9 } }}
          />
          <motion.path
            d="M43.5545 22.1414C41.9413 21.1695 41.9413 18.8305 43.5545 17.8586L70.7099 1.49874C72.3761 0.494914 74.5 1.69491 74.5 3.64015V36.3598C74.5 38.3051 72.3761 39.5051 70.7099 38.5013L43.5545 22.1414Z"
            fill="#E53170"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, transition: { delay: 1.2 } }}
          />
          <motion.ellipse
            opacity="0.85"
            cx="35.5002"
            cy="20.4999"
            rx="18.5"
            ry="17.5"
            transform="rotate(-180 35.5002 20.4999)"
            fill="#A7A9BE"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 0.8, y: 0, transition: { delay: 1.5 } }}
          />
          <motion.path
            opacity="0.76"
            d="M27.4735 17.8622C29.0788 18.8354 29.0788 21.1647 27.4735 22.1379L4.796 35.8854C3.12991 36.8954 1 35.6959 1 33.7475L1 6.25258C1 4.30425 3.12991 3.10472 4.796 4.11473L27.4735 17.8622Z"
            fill="#FF8906"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, transition: { delay: 1.8 } }}
          />
        </motion.g>

        <defs>
          <clipPath id="clip0">
            <motion.path
              d="M88 37C88 38.6569 86.6569 40 85 40L3 40C1.34315 40 -2.38419e-06 38.6569 -2.38419e-06 37V3C-2.38419e-06 1.34314 1.34314 -1.43051e-06 3 -1.43051e-06L85 -1.43051e-06C86.6569 -1.43051e-06 88 1.34314 88 3V37Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Logo;
