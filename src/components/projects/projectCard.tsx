"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import styles from "./projects.module.css";

interface projectDetails {
  name?: string;
  link?: string;
  image?: string;
  details?: string;
  tech?: string;
}

//TODO: Add Scalable Projects Section Blocks
export default function ProjectCard(props: projectDetails) {
  return (
    <div className={styles["card"]}>
      <h3>{props.name}</h3>
      <h5>
        <a href={props.link}>{props.link}</a>
      </h5>
      <img className={styles["image"]} src={props.image}></img>
      <p className={styles["details"]}>{props.details}</p>
      <p className={styles["tech"]}>
        <b>Technologies: {props.tech}</b>
      </p>
    </div>
  );
}
