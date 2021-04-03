import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/components/Header.module.css";

interface Props {}
const hasWindow = typeof window !== "undefined";
function getScreenSize() {
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
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
      <Image src="/img/logo5.svg" alt="Logo" width={80} height={40} />

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
