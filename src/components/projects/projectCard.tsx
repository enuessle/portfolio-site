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
    <div className={styles["card"]}>
      <h3>{props.title}</h3>
      <h5>
        <Markdown>{props.subtitle}</Markdown>
      </h5>
      <img className={styles["image"]} src={props.image}></img>
      <p className={styles["details"]}>
        <Markdown>{props.description}</Markdown>
      </p>
      <p className={styles["tech"]}>
        <b>Technologies: {props.technologies}</b>
      </p>
    </div>
  );
}
