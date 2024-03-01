"use client";

import Contact from "@/components/contact/contact";
import Projects from "../projects/projects";
import Resume from "../resume/resume";

import styles from "./tabs.module.css";
import { useState } from "react";

//Select Which Tab, Contains all Tab Components
export default function Tabs() {
  const [tab, setTab] = useState("projects");

  const currentTab = (tab: string) => {
    switch (tab) {
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
    }
  };

  return (
    <>
      <div className={styles["tabSwitch"]}>
        <button
          onClick={() => {
            setTab("projects");
          }}
        >
          <h1>Projects</h1>
        </button>

        <p>|</p>

        <button
          onClick={() => {
            setTab("resume");
          }}
        >
          <h1>Resume</h1>
        </button>

        <p>|</p>

        <button
          onClick={() => {
            setTab("contact");
          }}
        >
          <h1>Contact</h1>
        </button>
      </div>

      <div>{currentTab(tab)}</div>
    </>
  );
}
