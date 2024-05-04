"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Markdown from "react-markdown";
import styles from "./projects.module.css";

interface projectDetails {
  title?: string;
  subtitle?: string;
  image?: string;
  description?: string;
  technologies?: string;
}


//TODO: Add Scalable Projects Section Blocks
export default function ProjectCard(props: projectDetails) {
  return (
    <div className={styles["flex-card"]}>
      <Markdown className={styles["title"]}>{props.title}</Markdown>
      <Markdown className={styles["subtitle"]}>{props.subtitle}</Markdown>
      <img className={styles["image"]} src={props.image}></img>
      <Markdown className={styles["description"]}>{props.description}</Markdown>
      <p className={styles["technologies"]}>
        <b>Technologies: {props.technologies}</b>
      </p>
    </div>
  );
}

