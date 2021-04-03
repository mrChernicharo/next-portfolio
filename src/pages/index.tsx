import { Head } from "next/document";
import { motion } from "framer-motion";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.css";
import CodeIntro from "../components/CodeIntro";

export default function Home() {
  return (
    <>
      <title>Felipe's Portifolio</title>

      <div className={styles.container}>
        <Header />
        <motion.h1 initial={{ y: -200 }} animate={{ y: 0 }}>
          Hello Portfolio
        </motion.h1>

        <main>
          <CodeIntro />
        </main>
        {/* </> */}
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
