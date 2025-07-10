"use client";

import styles from "./projects.module.css";
import ProjectCard from "./projectCard";

import * as Projects from "./projects/projectIndex";

//TODO: Add Scalable Projects Section Blocks
export default function ProjectPage() {

  const projectCards = Object.keys(Projects).map((key: string) => {
    const project = Projects[key as keyof typeof Projects];
    return <ProjectCard key={key} {...project} />;
  });

  return (
    <div>
      <div className={styles["flex-container"]}>{projectCards}</div>
    </div>
  );
}