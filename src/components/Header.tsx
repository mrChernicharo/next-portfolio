import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import styles from "../styles/components/Header.module.css";
import Logo from "./Logo";
import { FaHome } from "react-icons/fa";

interface Props {}
const hasWindow = typeof window !== "undefined";

const width = () => (hasWindow ? window.innerWidth : null);
let height = () => (hasWindow ? window.innerHeight : null);

function getScreenSize() {
  return {
    width: width(),
    height: height(),
  };
}

const Header = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function handleResize() {
    const size = getScreenSize();
    setScreenSize(size);
  }
  //listen to resize
  useEffect(() => {
    // if (hasWindow) {

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // }
  }, []);

  useEffect(() => {
    console.log(screenSize);
  }, [screenSize]);

  return (
    <header className={styles.container}>
      {/* <Image src="/img/logo5.svg" alt="Logo" width={80} height={40} /> */}

      <div>
        <Logo />
        <span>Programmer Portfolio</span>
      </div>

      <nav>
        <Link href="/">
          <motion.a>
            {/* <FaHome size={22} /> */}
            Home
          </motion.a>
        </Link>

        <Link href="/projects">
          <motion.a>Projects</motion.a>
        </Link>
        <Link href="/skills">
          <motion.a>Skills</motion.a>
        </Link>
        <Link href="/about">
          <motion.a>About</motion.a>
        </Link>
        <Link href="/contact">
          <motion.a>Contact</motion.a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
