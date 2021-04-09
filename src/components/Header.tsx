import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import styles from "../styles/components/Header.module.css";
import Logo from "./Logo";
import { FaHome, FaHamburger } from "react-icons/fa";
import { FiMenu, FiList } from "react-icons/fi";
import { getLocation, getScreenSize } from "../utils/window-helper";

interface DropdownProps {
  closeDropdown: () => void;
  location: string;
}

interface HeaderLinkProps {
  location: string;
}

const Header = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [location, setLocation] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  function handleResize() {
    const size = getScreenSize();
    setScreenSize(size);
  }

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }
  //listen to resize
  useEffect(() => {
    setLocation(getLocation());
    console.log(location);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(screenSize);
  }, [screenSize]);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <header className={styles.container}>
      <div>
        <Logo />
        <span>Portfolio</span>
      </div>
      <nav>
        {screenSize.width >= 600 && <HeaderLinks location={location} />}

        {screenSize.width < 600 && (
          <div className={styles.dropdownMenu}>
            <FiMenu size={36} onClick={toggleDropdown} />

            {showDropdown && (
              <HeaderDropdown
                closeDropdown={toggleDropdown}
                location={location}
              />
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

const HeaderDropdown: React.FC<DropdownProps> = ({
  closeDropdown,
  location,
}: DropdownProps) => {
  const [overlay, setOverlay] = useState(true);
  function killOverlay() {
    setOverlay(false);
    closeDropdown();
  }

  return (
    <>
      <div className={styles.dropdown}>
        <HeaderLinks location={location} />
      </div>

      <div
        className={styles.overlay}
        onClick={killOverlay}
        style={{ display: overlay ? "block" : "none" }}
      ></div>
    </>
  );
};

const HeaderLinks = ({ location }: HeaderLinkProps) => {
  return (
    <>
      <Link href="/">
        <motion.a className={location === "/" ? styles.active : ""}>
          Home
        </motion.a>
      </Link>
      <Link href="/projects">
        <motion.a className={location === "/projects" ? styles.active : ""}>
          Projects
        </motion.a>
      </Link>
      <Link href="/skills">
        <motion.a className={location === "/skills" ? styles.active : ""}>
          Skills
        </motion.a>
      </Link>
      <Link href="/about">
        <motion.a className={location === "/about" ? styles.active : ""}>
          About
        </motion.a>
      </Link>
      <Link href="/contact">
        <motion.a className={location === "/contact" ? styles.active : ""}>
          Contact
        </motion.a>
      </Link>
    </>
  );
};

export default Header;
/* <FaHome size={22} /> */
