"use client";

import styles from "./projects.module.css";
import ProjectCard from "./projectCard";

//TODO: Add Scalable Projects Section Blocks
export default function Projects() {
  return (
    <div>
      <div className={styles["row"]}>
        <ProjectCard
          name="Project Name"
          links="https://github.com/GameXplode/Chip8"
          image="https://raw.githubusercontent.com/GameXplode/Chip8/main/pics/TETRIS.png"
          details="A feature-complete emulator for the CHIP-8 interpreted programming language,
          coded in C++. Uses the SDL2 library to provide cross-platform graphics and user-input support.
          Optimized to draw to the screen at 60 frames a second providing a smooth user experience for a wide
          variety of games coded for CHIP-8. "
          tech="C/C++, OpenGL, SDL2, Make"
        />
        <ProjectCard name="Project 2 Name" />
      </div>
    </div>
  );
}
