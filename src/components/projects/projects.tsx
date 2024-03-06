"use client";

import styles from "./projects.module.css";
import ProjectCard from "./projectCard";

//TODO: Add Scalable Projects Section Blocks
export default function Projects() {
  return (
    <div>
      <h1> WIP: Projects</h1>
      <div className={styles["row"]}>
        <ProjectCard
          name="Project Name"
          links="Links"
          image="https://raw.githubusercontent.com/GameXplode/Chip8/main/pics/TETRIS.png"
          details="Stuff"
          tech="Tech"
        />
        <ProjectCard name="Project 2 Name" />
      </div>
    </div>
  );
}
