import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/link";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import { appProjects, Project } from "../data/projects";
import { FaGithub, FaWifi } from "react-icons/fa";

import styles from "../styles/pages/Projects.module.css";
import { skillsList } from "../data/skills";
interface ProjectProps {
  project: Project;
}

export default function Projects() {
  const projectsData = useRef(appProjects);

  useEffect(() => {
    console.log(skillsList);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Projects</h1>
      <h2>Check my work out</h2>

      <main>
        {projectsData.current.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </main>
    </div>
  );
}

const ProjectItem: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  const size = { borderRadius: 0, width: 0, height: 0 };

  switch (project.size) {
    case 1:
      size.height = 250;
      size.width = 120;
      size.borderRadius = 14;
      break;
    case 2:
      size.height = 230;
      size.width = 260;
      size.borderRadius = 6;
      break;
    case 3:
      size.height = 200;
      size.width = 300;
      size.borderRadius = 4;
      break;
    default:
      break;
  }
  return (
    <div className={styles.item}>
      <section>
        <h2>{project.title}</h2>

        {project.techs.length && (
          <div>
            {project.techs.map((tech) => (
              <div key={tech?.name}>
                {tech?.logo && <img src={tech.logo} width={16} />}
              </div>
            ))}
          </div>
        )}

        {project.splash ? (
          <img
            src={project.splash}
            width={size.width}
            height={size.height}
            style={{ borderRadius: size.borderRadius }}
          />
        ) : (
          ""
        )}

        <div className="links">
          {project.url && (
            <Link href={project.url}>
              <a target="_blank">
                <FaWifi color={""} size={22} />
              </a>
            </Link>
          )}

          <Link href={project.github}>
            <a target="_blank">
              <FaGithub size={22} />
            </a>
          </Link>
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
