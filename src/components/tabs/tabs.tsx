"use client";

import ContactPage from "@/components/contact/contactPage";
import ProjectPage from "../projects/projectPage";
import ResumePage from "../resume/resumePage";

import styles from "./tabs.module.css";
import { useState } from "react";

//Select Which Tab, Contains all Tab Components
export default function Tabs() {
  const [tab, setTab] = useState("Projects");

  //Returns the component for current tab
  const currentTab = (tab: string) => {
    switch (tab) {
      case "Projects":
        return <ProjectPage />;
      case "Resume":
        return <ResumePage />;
      case "Contact":
        return <ContactPage />;
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
    <div className={styles["tabMain"]}>
      <div className={styles["tabSwitch"]}>
        {tabButton("Projects")}
        {tabButton("Resume")}
        {tabButton("Contact")}
      </div>

      <div>{currentTab(tab)}</div>
    </div>
  );
}
