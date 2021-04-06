import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/pages/Skills.module.css";

import Header from "../components/Header";
import ParkIllustration from "../ilustrations/park";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStarHalf,
  FaStarHalfAlt,
  FaStar,
  FaStarOfLife,
} from "react-icons/fa";

import { getXPTime } from "../utils/date-helpers";
import { skillsData, techCategories, Skill } from "../data/skills";

interface SkillProps {
  skill: Skill;
}

interface CategoryProps {
  category: string;
}

export default function skills() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    techCategories[categoryIndex]
  );

  function prevBtnPress() {
    if (categoryIndex > 0) {
      setCategoryIndex(categoryIndex - 1);
    }
  }
  function nextBtnPress() {
    if (categoryIndex < techCategories.length - 1) {
      setCategoryIndex(categoryIndex + 1);
    }
  }

  useEffect(() => {
    setSelectedCategory(techCategories[categoryIndex]);
  }, [categoryIndex]);

  return (
    <div className={styles.container}>
      <Header />

      <h1>Skills</h1>

      <main>
        {techCategories.map((category) => {
          return (
            category === selectedCategory && (
              <section>
                <nav>
                  <button onClick={prevBtnPress} type="button">
                    <FaChevronLeft />
                  </button>
                  <span>{category}</span>
                  <button onClick={nextBtnPress} type="button">
                    <FaChevronRight />
                  </button>
                </nav>

                <Category key={category} category={category} />
              </section>
            )
          );
        })}
      </main>

      <ParkIllustration />
    </div>
  );
}

const Category: React.FC<CategoryProps> = ({ category }: CategoryProps) => {
  //
  const categorySkills = useRef(
    skillsData.filter((skill) => skill.category === category)
  );

  const [selectedSkill, setSelectedSkill] = useState<Skill>(
    categorySkills.current[0]
  );

  function handleClick(skill) {
    console.log(skill);
    setSelectedSkill(skill);
  }

  return (
    <div className={styles.category}>
      <ul>
        {categorySkills.current.map((skill) => {
          return (
            <li onClick={() => handleClick(skill)}>
              <SkillItem key={skill.name} skill={skill} />
            </li>
          );
        })}
      </ul>

      <div>
        <SkillDetail skill={selectedSkill} />
      </div>
    </div>
  );
};

const SkillItem: React.FC<SkillProps> = ({ skill }: SkillProps) => {
  return (
    <div>
      <h3>{skill.name}</h3>

      <motion.img src={skill.logo} width={30} height={30} />
    </div>
  );
};

const SkillDetail: React.FC<SkillProps> = ({ skill }: SkillProps) => {
  const starsArr = Array(5)
    .fill(0)
    .map((item, i) => (skill.level > i ? 1 : 0));

  return (
    <div>
      <h1>{skill.name}</h1>

      <motion.img src={skill.logo} width={60} height={60} />

      <p>{skill.xpTime}</p>

      {starsArr.map((number) => {
        return number === 1 ? <FaStarOfLife size={20} /> : <FaStar size={20} />;
      })}
    </div>
  );
};
