import { Head } from "next/document";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <title>Felipe's Portifolio</title>

      <div className={styles.container}>
        <Header />
        <h1>Hello Portfolio</h1>

        <main></main>
        {/* <CodeIntro /> */}
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
