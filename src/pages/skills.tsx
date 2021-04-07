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
import { isEven } from "../utils/math-helpers";

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
              <section key={`section-${category}`}>
                <nav>
                  {categoryIndex > 0 ? (
                    <button onClick={prevBtnPress} type="button">
                      <FaChevronLeft />
                    </button>
                  ) : (
                    <div className={styles.buttonPlaceholder}></div>
                  )}

                  <span>{category}</span>

                  {categoryIndex < techCategories.length - 1 ? (
                    <button onClick={nextBtnPress} type="button">
                      <FaChevronRight />
                    </button>
                  ) : (
                    <div className={styles.buttonPlaceholder}></div>
                  )}
                </nav>

                <Category key={`category-${category}`} category={category} />
              </section>
            )
          );
        })}
      </main>
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
            <li key={`li-${skill.name}`} onClick={() => handleClick(skill)}>
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
    <div className={styles.skillListItem}>
      <motion.img src={skill.logo} width={30} height={30} />
    </div>
  );
};

const SkillDetail: React.FC<SkillProps> = ({ skill }: SkillProps) => {
  const starsArr = Array(10) // [1,1,1,1,1,1,1,0,0,0]
    .fill(0)
    .map((item, i) => (skill.level > i ? 1 : 0));

  return (
    <div className={styles.detail}>
      <h1>{skill.name}</h1>

      <motion.img src={skill.logo} width={60} height={60} />

      <p>{skill.xpTime}</p>
      <div className={styles.starsContainer}>
        {starsArr.map((number, i) => {
          return (
            <>
              {number === 1 ? (
                isEven(i) ? (
                  <FaStarHalf
                    className={styles.star}
                    size={20}
                    color={"#fff"}
                  />
                ) : (
                  <FaStarHalf
                    className={styles.star}
                    size={20}
                    color={"#fff"}
                  />
                )
              ) : !isEven(i) ? (
                <FaStarHalf className={styles.star} size={20} color={"#336"} />
              ) : (
                <FaStarHalf className={styles.star} size={20} color={"#336"} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
