"use client";

import styles from "./projects.module.css";
import ProjectCard from "./projectCard";
import type { projectDetails } from "./projectCard";

import * as Projects from "./projects/projectIndex";

//TODO: Add Scalable Projects Section Blocks
export default function ProjectPage() {
  const projectCards = Object.entries(Projects)
    .sort(([, a], [, b]) => a.priority - b.priority)
    .map(([key, project]) => <ProjectCard key={key} {...project} />);

  return (
    <>
      <div className={styles["flex-container"]}>{projectCards}</div>
    </>
  );
}