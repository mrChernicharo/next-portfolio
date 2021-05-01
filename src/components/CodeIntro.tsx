import React, { useEffect, useState } from "react";
import { motion, transform } from "framer-motion";
import { nanoid } from "nanoid";

import styles from "../styles/components/CodeIntro.module.css";

interface Props {}

const introTextArr = [
  "import { SoftwareDeveloper } from ‘felipe-chernicharo’;",
  "var helloStranger = `welcome to my ${Portfolio}`;",
  "soGladYouHere( ) {",
  "_{ please: ‘take a look around’ },",
  "_{ see: ‘a little bit of my work and...’}",
  "_return wheneverYouLike();",
  "};",
];

const divVars = {
  hidden: { opacity: 0 },
  done: {
    opacity: [1, 0.82, 1],
    transition: { yoyo: Infinity, duration: 0.2 },
  },
};

const pVars = (delay) => {
  return {
    hidden: { opacity: 0 },
    done: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.03,
        delay: delay * 2 + 3,
      },
    },
  };
};

const spanVars = {
  hidden: { display: "none" },
  done: { display: "inline" },
};

const bleepVars = {
  hidden: { opacity: 1 },
  animate: {
    opacity: [0, 1, 0],
    transition: { yoyo: Infinity, duration: 0.5 },
  },
};

const CodeIntro = () => {
  return (
    <motion.div
      variants={divVars}
      className={styles.container}
      initial="hidden"
      animate="done"
    >
      {introTextArr.map((line, i) => (
        <motion.p variants={pVars(i)} key={nanoid()} className={"p-" + i}>
          {line
            .replace("_", " ")
            .split("")
            .map((letter, i) => (
              <motion.span
                className={"span-" + i}
                variants={spanVars}
                key={nanoid()}
              >
                {letter}
              </motion.span>
            ))}

          {/* <motion.span className={styles.bleepCursor} variants={bleepVars}>
            &nbsp;
          </motion.span> */}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default CodeIntro;
