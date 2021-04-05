import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Inllustration01 from "../components/Illustration01";

import { getXPTime } from "../utils/date-helpers";
import { skillsData, Skill } from "../data/skills";
import styles from "../styles/pages/Skills.module.css";

interface SkillProps {
  skill: Skill;
}

export default function skills() {
  const skills = useRef(skillsData);

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h1>Skills</h1>

        {skills.current.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </main>

      <Inllustration01 />
    </div>
  );
}

const SkillItem: React.FC<SkillProps> = ({ skill }: SkillProps) => {
  return (
    <div>
      <h3>{skill.name}</h3>

      <motion.img src={skill.logo} width={30} height={30} />

      <div>
        <p>{skill.category}</p>
        <p>{skill.start.toLocaleDateString()}</p>
        <p>{skill.xpTime}</p>
        <p>{skill.level}</p>
      </div>
    </div>
  );
};
