import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {}

const introText = [
  "import * as FelipeChernicharo from ‘software-engineering’;#",
  "var helloStranger = `welcome to my ${Portfolio}`;#",
  "GladYouHere() {#",
  "_{ please: ‘take a look around’ },#",
  "_{ see: ‘a little bit of my work and...’}#",
  "_continue true;#",
  "}#",
];

let i = 1;
const divVars = {
  hidden: { opacity: 0 },
  done: {
    opacity: 1,
    transition: {
      // duration: 2,
      // when: "beforeChildren",
      // staggerChildren: 0.8,
    },
  },
};

const pVars = (delay) => {
  return {
    hidden: { opacity: 0 },
    done: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.02,
        delay: delay * 1,
      },
    },
  };
};

const spanVars = {
  hidden: { opacity: 0 },
  done: { opacity: 1 },
};

const CodeIntro = () => {
  return (
    <motion.div initial="hidden" animate="done" variants={divVars}>
      {introText.map((line, i) => (
        <motion.p variants={pVars(i)} key={line + Math.random()}>
          {line
            .replace("#", "")
            .replace("_", " ")
            .split("")
            .map((l, i) => (
              <motion.span variants={spanVars} key={l + Math.random()}>
                {l}
              </motion.span>
            ))}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default CodeIntro;
