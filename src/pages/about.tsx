import Link from "next/link";
import React from "react";
import Header from "../components/Header";

import styles from "../styles/pages/About.module.css";
interface Props {}

const About = () => {
  interface Props {}

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>About</h1>
      </main>

      <button type="button">
        <Link href="https://mrchernicharo.github.io/curriculum/">
          <a target="_blank">CV</a>
        </Link>
      </button>
    </div>
  );
};

export default About;
