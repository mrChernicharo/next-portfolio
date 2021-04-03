import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/components/Header.module.css";

interface Props {}

function getScreenSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Header = () => {
  const [screenSize, setscreenSize] = useState(getScreenSize());

  //listen to resize
  useEffect(() => {
    function handleResize() {
      setscreenSize(getScreenSize());
      console.log(screenSize);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.container}>
      <Image src="/img/logo3.svg" alt="Logo" width={155} height={33} />

      <nav>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
