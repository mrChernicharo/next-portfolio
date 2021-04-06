import { Head } from "next/document";
import { motion } from "framer-motion";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.css";
import CodeIntro from "../components/CodeIntro";
import LayingGuy from "../ilustrations/layingGuy";

export default function Home() {
  return (
    <>
      <title>Felipe's Portifolio</title>

      <div className={styles.container}>
        <Header />

        <div className={styles.body}>
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{
              y: 0,
              transition: { type: "spring", damping: 8 },
            }}
          >
            <p>Hi, I'm Felipe</p>

            <p>
              and I <span>❤︎ </span>
              to build things with <span>{`{ code }`}</span>
            </p>
          </motion.h1>
          <main>
            <CodeIntro />
          </main>

          <LayingGuy />
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
