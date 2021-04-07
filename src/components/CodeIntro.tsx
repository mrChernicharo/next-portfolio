import React, { useEffect, useState } from "react";
import { motion, transform } from "framer-motion";

import styles from "../styles/components/CodeIntro.module.css";

interface Props {}

const introTextArr = [
  "import { FelipeChernicharo } from ‘software-developer’;#",
  "var helloStranger = `welcome to my ${Portfolio}`;#",
  "soGladYouHere( ) {#",
  "_{ please: ‘take a look around’ },#",
  "_{ see: ‘a little bit of my work and...’}#",
  "_return wheneverYouLike();#",
  "};#",
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

// function generateClassNames() {
//   for (let [i, p] of Object.entries(introTextArr)) {
//     const paragraph = `.container p:nth-child(${Number(i) + 1})`;

//     for (let [j, span] of Object.entries(p.split(""))) {
//       const spanText = `span:nth-child(${Number(j) + 1})`;

//       console.log(paragraph + spanText);
//     }
//   }
// }
// generateClassNames();

const CodeIntro = () => {
  return (
    <motion.div
      variants={divVars}
      className={styles.container}
      initial="hidden"
      animate="done"
    >
      {introTextArr.map((line, i) => (
        <motion.p
          variants={pVars(i)}
          key={line + Math.random()}
          className={"p-" + line}
        >
          {line
            .replace("#", "")
            .replace("_", " ")
            .split("")
            .map((l, i) => (
              <motion.span
                className={"span-" + i}
                variants={spanVars}
                key={l + Math.random()}
              >
                {l}
              </motion.span>
            ))}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default CodeIntro;
