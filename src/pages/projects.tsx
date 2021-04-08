import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { appProjects, Project } from "../data/projects";
import { FaGithub, FaWifi } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import styles from "../styles/pages/Projects.module.css";
import { skillsList } from "../data/skills";
import { getScreenSize } from "../utils/window-helper";
interface ProjectProps {
  project: Project;
  // screenSize: { width: number; height: number };
}

export default function Projects() {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const projectsData = useRef(appProjects);

  useEffect(() => {
    console.log(skillsList);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Projects</h1>
      <main>
        {projectsData.current.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </main>
    </div>
  );
}

const ProjectItem: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  const size = { borderRadius: 0, width: 0, height: 0, margin: 0 };

  switch (project.size) {
    case 1:
      size.height = 250;
      size.width = 120;
      size.borderRadius = 14;
      // size.margin = 100;
      break;
    case 2:
      size.height = 230;
      size.width = 260;
      size.borderRadius = 6;
      // size.margin = 30;
      break;
    case 3:
      size.height = 200;
      size.width = 300;
      size.borderRadius = 4;
      // size.margin = 10;
      break;
    default:
      break;
  }
  return (
    <div className={styles.item}>
      <section>
        <header>
          <h2>{project.title}</h2>
        </header>

        {project.techs.length && (
          <div className={styles.techContainer}>
            {project.techs.map((tech) => (
              <div key={tech?.name}>
                {tech?.logo && <img src={tech.logo} width={20} />}
              </div>
            ))}
          </div>
        )}

        <div className={styles.splashContainer}>
          {project.splash ? (
            <img
              src={project.splash}
              width={size.width}
              height={size.height}
              style={{
                borderRadius: size.borderRadius,
              }}
            />
          ) : (
            ""
          )}
        </div>

        <div className={styles.links}>
          {project.url && (
            <button type="button">
              <span>
                <Link href={project.url}>
                  <a target="_blank">
                    <BiWorld color={""} size={22} />
                  </a>
                </Link>
              </span>
            </button>
          )}

          <button type="button">
            <span>
              <Link href={project.github}>
                <a target="_blank">
                  <FaGithub size={22} />
                </a>
              </Link>
            </span>
          </button>
        </div>

        {/* <p>{project.description}</p> */}

        {/* {project.gif && <motion.img src={project.gif} width={50} height={40} />} */}

        {/* 
      {project.video && (
        <video src={project.video} autoPlay width={300} height={200}></video>
      )} */}
      </section>
    </div>
  );
};
