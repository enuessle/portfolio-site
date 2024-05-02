"use client";

import Markdown from "react-markdown";

import styles from "./projects.module.css";
import ProjectCard from "./projectCard";

import * as Projects from "./projects/projectIndex";

//TODO: Add Scalable Projects Section Blocks
export default function ProjectPage() {
  return (
    <div>
      <div className={styles["flex-container"]}>
        <ProjectCard {...Projects.Chip8} />
        <ProjectCard title="Project 2 Name" />
        <ProjectCard {...Projects.Chip8} />
        <ProjectCard {...Projects.Chip8} />
        <ProjectCard {...Projects.Chip8} />
      </div>
    </div>
  );
}