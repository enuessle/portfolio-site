"use client";

import styles from "./projects.module.css";

//TODO: Add Scalable Projects Section Blocks
export default function ProjectCard() {
  return (
    <div className={styles["card"]}>
      <h4>Project Name</h4>
      <h5>Links</h5>
      <p>Project Details</p>
    </div>
  );
}
