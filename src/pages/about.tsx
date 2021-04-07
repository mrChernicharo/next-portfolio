import Link from "next/link";
import React from "react";
import Header from "../components/Header";

import {
  FaMarker,
  FaStar,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

import { FiMail, FiMapPin } from "react-icons/fi";
import styles from "../styles/pages/About.module.css";
import ParkIllustration from "../ilustrations/park";
interface Props {}

const About = () => {
  interface Props {}

  return (
    <div className={styles.container}>
      <Header />
      <h2>About</h2>
      <main>
        <h1>Felipe who?</h1>

        <div className="links-list">
          <ul>
            <li>
              <span>
                <strong>
                  <FaStar /> Date of Birth:&nbsp;
                </strong>
                April 29th, 1987
              </span>
            </li>
            <li>
              <span>
                <strong>
                  <FiMapPin /> Current Location:&nbsp;
                </strong>
                Rio de Janeiro - Brazil
              </span>
            </li>
            {/* <li> <strong>Phone:</strong> +55 21 98878-8359 </li> */}
            <li>
              <strong>
                <FiMail /> string7dev@gmail&nbsp;
              </strong>
              <Link href="https://string7dev@gmail.com">
                <a target="_blank"></a>
              </Link>
            </li>
            <li>
              <strong>
                <FaLinkedin /> Felipe Chernicharo&nbsp;
              </strong>
              <Link href="https://linkedin.com/in/felipe-chernicharo-27ba911a8/">
                <a target="_blank"></a>
              </Link>
            </li>
            <li>
              <strong>
                <FaGithub /> mrChernicharo&nbsp;
              </strong>
              <Link href="https://github.com/mrChernicharo">
                <a target="_blank"></a>
              </Link>
            </li>
            <li>
              <strong>
                <FaStackOverflow /> Felipe
              </strong>
              <Link href="https://stackoverflow.com/users/13111779/felipe-chernicharo">
                <a target="_blank"></a>
              </Link>
            </li>
          </ul>

          <p>33 year old Brazilian Web | Systems | Solutions Developer</p>
          <p>Coding since 2018</p>
        </div>

        <button type="button">
          <Link href="https://mrchernicharo.github.io/curriculum/">
            <a target="_blank">Get CV</a>
          </Link>
        </button>
      </main>

      <ParkIllustration />
    </div>
  );
};

export default About;
