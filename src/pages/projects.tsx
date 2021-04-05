import { motion } from "framer-motion";
import React, { useRef } from "react";
import Header from "../components/Header";
import { appProjects, Project } from "../data/projects";

import styles from "../styles/pages/Projects.module.css";
interface ProjectProps {
  project: Project;
}

export default function Projects() {
  const projectsData = useRef(appProjects);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>Projects</h1>

        {projectsData.current.map((project) => (
          <ProjectItem project={project} />
        ))}
      </main>
    </div>
  );
}

const ProjectItem: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  return (
    <div>
      <p>{project.title}</p>
      <p>{project.description}</p>
      <p>{project.github}</p>

      <motion.img src={project.gif} />
    </div>
  );
};
