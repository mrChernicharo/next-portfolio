import React from "react";
import styles from "../styles/pages/Skills.module.css";
import Inllustration01 from "../components/Illustration01";
import Header from "../components/Header";
interface Props {}

const skills = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h1>Skills</h1>
      </main>

      <Inllustration01 />
    </div>
  );
};

export default skills;
