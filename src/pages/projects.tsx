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
  openModal?: (project) => void;
}

export default function Projects() {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>(null);

  function toggleProjectModal(project) {
    setSelectedProject(project);
    setShowModal(!showModal);
  }

  // useEffect(() => {
  //   console.log(selectedProject);
  //   console.log(showModal);
  // }, [showModal]);

  const projectsData = useRef(appProjects);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Projects</h1>
      <main>
        {projectsData.current.map((project) => (
          <ProjectItem openModal={toggleProjectModal} project={project} />
        ))}
      </main>

      {showModal && selectedProject && (
        <>
          <ProjectModal key={selectedProject.title} project={selectedProject} />

          <div
            className={styles.Overlay}
            onClick={() => toggleProjectModal(selectedProject)}
          ></div>
        </>
      )}
    </div>
  );
}

const ProjectItem: React.FC<ProjectProps> = ({
  project,
  openModal,
}: ProjectProps) => {
  const size = getCardSplashSize(project);

  return (
    <div onClick={() => openModal(project)} className={styles.item}>
      <section>
        <header>
          {project.date.toLocaleDateString("en", { dateStyle: "long" })}

          <h2>{project.title}</h2>

          {project.techs.length && (
            <div key={project.description} className={styles.techContainer}>
              {project.techs.map((tech) => (
                <div key={tech?.name}>
                  {tech?.logo && <img src={tech.logo} width={20} />}
                </div>
              ))}
            </div>
          )}
        </header>

        <div className={styles.splashContainer}>
          {project.splash ? (
            <img
              key={project.splash}
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
      </section>
    </div>
  );
};

const ProjectModal: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  const size = getModalImgSize(project);

  useEffect(() => console.log(project.size), []);
  return (
    <AnimatePresence>
      <motion.div
        className={styles.ProjectModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>{project.title}</h1>

        <p>{project.description}</p>

        {project.techs.length && (
          <div key={project.description} className={styles.techContainer}>
            {project.techs.map((tech) => (
              <div key={tech?.name}>
                {tech?.logo && <img src={tech.logo} width={20} />}
              </div>
            ))}
          </div>
        )}

        <div>
          {project.video && (
            <video
              src={project.video}
              autoPlay
              width={size.width}
              height={size.height}
            ></video>
          )}
          {!project.video && project.gif && (
            <img src={project.gif} width={size.width} height={size.height} />
          )}
        </div>

        <div>
          {project.date.toLocaleDateString("en", { dateStyle: "long" })}
        </div>

        <div className={styles.Links}>
          {project.url && (
            <button type="button">
              <span>
                <Link href={project.url}>
                  <a target="_blank">
                    <BiWorld size={22} />
                    Visit me Online
                  </a>
                </Link>
              </span>
            </button>
          )}

          <button type="button">
            <span>
              <Link href={project.github}>
                <a target="_blank">
                  <span>
                    <FaGithub size={22} />
                    Check me
                  </span>
                </a>
              </Link>
            </span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
