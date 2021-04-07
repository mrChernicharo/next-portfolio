import { motion } from "framer-motion";
import Link from "next/link";
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
  return (
    <div className={styles.item}>
      <article>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </article>

      {project.gif && <motion.img src={project.gif} width={50} height={40} />}

      {project.video && (
        <video src={project.video} autoPlay width={300} height={200}></video>
      )}

      {project.url && (
        <Link href={project.url}>
          <a target="_blank">
            <FaWifi color={""} size={22} />
          </a>
        </Link>
      )}

      {project.techs.length && (
        <div>
          {project.techs.map((tech) => (
            <div key={tech.name}>
              <span>{tech.name}</span>
              <img src={tech.logo} width={16} />
            </div>
          ))}
        </div>
      )}

      <Link href={project.github}>
        <a target="_blank">
          <FaGithub size={22} />
        </a>
      </Link>
    </div>
  );
};
