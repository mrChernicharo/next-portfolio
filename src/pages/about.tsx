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
      <h1>About</h1>
      <main>
        <h2>Felipe who?</h2>

        <div className="links-list">
          <ul>
            {/* <li> <strong>Phone:</strong> +55 21 98878-8359 </li> */}

            {/* <li>
              <span>
                <strong>
                  <FaStar size={20} /> Date of Birth:&nbsp;
                </strong>
                April 29th, 1987
              </span>
            </li> */}
            <li>
              <span>
                <strong>
                  <FiMapPin size={20} /> Current Location:&nbsp;
                </strong>
                Washington DC
              </span>
            </li>
            <li>
              <Link href="https://string7dev@gmail.com">
                <a target="_blank">
                  <span>
                    <strong>
                      <FiMail size={20} /> string7dev@gmail&nbsp;
                    </strong>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/felipe-chernicharo-27ba911a8/">
                <a target="_blank">
                  <strong>
                    <FaLinkedin size={20} /> Felipe Chernicharo&nbsp;
                    <span></span>
                  </strong>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/mrChernicharo">
                <a target="_blank">
                  <span>
                    <strong>
                      <FaGithub size={20} /> mrChernicharo&nbsp;
                    </strong>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://stackoverflow.com/users/13111779/felipe-chernicharo">
                <a target="_blank">
                  <span>
                    <strong>
                      <FaStackOverflow size={20} /> Felipe&nbsp;
                    </strong>
                  </span>
                </a>
              </Link>
            </li>
          </ul>

          <p>Web | Systems | Solutions Developer</p>
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
