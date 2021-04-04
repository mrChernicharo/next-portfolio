import { Head } from "next/document";
import { motion } from "framer-motion";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.css";
import CodeIntro from "../components/CodeIntro";
import Inllustration01 from "../components/Illustration01";

export default function Home() {
  return (
    <>
      <title>Felipe's Portifolio</title>

      <div className={styles.container}>
        <Header />

        <div className={styles.body}>
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{
              x: 0,
              transition: { duration: 2, delay: 2, type: "tween" },
            }}
          >
            <p>Hello, welcome to my portfolio</p>

            <p>I'm Felipe and I ❤︎ to build things with code</p>
          </motion.h1>
          <main>
            <CodeIntro />
          </main>

          <Inllustration01 />
        </div>
      </div>
    </>
  );
}

// import * as FelipeChernicharo from ‘software-engineering’

// var helloStranger = ‘welcome to my ${Portfolio}’

// GladYouHere() {
// 	{ please: ‘take a look around’ }
// 	{ see: ‘a little bit of my work’}
// 	continue true;
// }
