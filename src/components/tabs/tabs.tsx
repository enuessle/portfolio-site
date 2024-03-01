"use client";

import Contact from "@/components/contact/contact";
import Projects from "../projects/projects";
import Resume from "../resume/resume";

import styles from "./tabs.module.css";
import { useState } from "react";

//Select Which Tab, Contains all Tab Components
export default function Tabs() {
  const [tab, setTab] = useState("Projects");

  //Returns the component for current tab
  const currentTab = (tab: string) => {
    switch (tab) {
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
    }
  };

  //Returns a button that allows switching to the {name} tab
  const tabButton = (name: string) => {
    return (
      <button
        onClick={() => {
          setTab(name);
        }}
      >
        <h1
          className={name === tab ? styles["nameCurrent"] : styles["nameBase"]}
        >
          {name}
        </h1>
      </button>
    );
  };

  return (
    <>
      <div className={styles["tabSwitch"]}>
        {tabButton("Projects")}
        <p>|</p>
        {tabButton("Resume")}
        <p>|</p>
        {tabButton("Contact")}
      </div>

      <div>{currentTab(tab)}</div>
    </>
  );
}
