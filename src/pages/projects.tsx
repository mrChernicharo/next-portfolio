import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { appProjects, Project } from "../data/projects";
import { FaGithub, FaWifi } from "react-icons/fa";
import { BiFontSize, BiWorld } from "react-icons/bi";

import styles from "../styles/pages/Projects.module.css";
import { skillsList } from "../data/skills";
import { getScreenSize } from "../utils/window-helper";
import { getCardSplashSize, getModalImgSize } from "../utils/project-helper";
interface ProjectProps {
  project: Project;
  // screenSize: { width: number; height: number };
}

export default function Projects() {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function toggleProjectModal(project) {
    // console.log(project);
    setSelectedProject(project);
    setShowModal(!showModal);
  }

  useEffect(() => {
    console.log(selectedProject);
    console.log(showModal);
  }, [showModal]);

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
          <div onClick={() => toggleProjectModal(project)}>
            <ProjectItem key={project.title} project={project} />
          </div>
        ))}
      </main>

      {showModal && selectedProject && (
        <div
          className={styles.Overlay}
          onClick={() => toggleProjectModal(selectedProject)}
        >
          <ProjectModal project={selectedProject} />
        </div>
      )}
    </div>
  );
}

const ProjectItem: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  const size = getCardSplashSize(project);

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
      </section>
    </div>
  );
};

const ProjectModal: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  const size = getModalImgSize(project);

  useEffect(() => console.log(project.size), []);
  return (
    <>
      <div className={styles.ProjectModal}>
        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <div>
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              width={size.width}
              height={size.height}
            ></video>
          ) : project.gif ? (
            <motion.img
              src={project.gif}
              width={size.width}
              height={size.height}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
