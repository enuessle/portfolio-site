"use client";

import styles from "./projects.module.css";
import ProjectCard from "./projectCard";

//TODO: Add Scalable Projects Section Blocks
export default function Projects() {
  return (
    <div>
      <h1> WIP: Projects</h1>
      <div className={styles["row"]}>
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
