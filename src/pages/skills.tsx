import React, { useEffect, useRef, useState } from "react";
import {} from "next/image";
import styles from "../styles/pages/Skills.module.css";
import Inllustration01 from "../components/Illustration01";
import Header from "../components/Header";
import { skillsData, Skill } from "../data/skills";
import { motion } from "framer-motion";
import { getXPTime } from "../utils/date-helpers";

interface SkillProps {
  skill: Skill;
}

const skills = () => {
  const skills = useRef(skillsData);

  useEffect(() => {
    const a = new Date(2020, 3, 9);
    const b = new Date(2019, 4, 12);

    getXPTime(a);
    getXPTime(b);
  }, []);

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
};

export default skills;

const SkillItem: React.FC<SkillProps> = ({ skill }: SkillProps) => {
  return (
    <div>
      <h3>{skill.name}</h3>

      <motion.img src={skill.logo} width={30} height={30} />
    </div>
  );
};
