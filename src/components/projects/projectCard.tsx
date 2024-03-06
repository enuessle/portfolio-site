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
  links?: string;
  image?: string;
  details?: string;
  tech?: string;
}

//TODO: Add Scalable Projects Section Blocks
export default function ProjectCard(props: projectDetails) {
  return (
    <div className={styles["card"]}>
      <h4>{props.name}</h4>
      <h5>{props.links}</h5>
      <img className={styles["image"]} src={props.image}></img>
      <p>{props.details}</p>
      <p>{props.tech}</p>
    </div>
  );
}
