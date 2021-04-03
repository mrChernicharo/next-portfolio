import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Header.module.css";

interface Props {}

const Header = () => {
  return (
    <header className={styles.container}>
      {/* <Image src="/img/logo.svg" alt="Logo" width={155} height={33} /> */}

      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-300">NextJS</a>
        </Link>
        <Link href="/tailwind">
          <a className="tracking-wide hover:text-gray-300">Tailwind</a>
        </Link>
        <Link href="/framermotion">
          <a className="tracking-wide hover:text-gray-300">Framer Motion</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
