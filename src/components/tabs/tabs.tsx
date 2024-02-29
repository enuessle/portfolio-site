"use client";

import styles from "./tabs.module.css";
import { useState } from "react";

//Select Which Tab, Contains all Tab Components
export default function Tabs() {
  const [tab, setTab] = useState("project");

  return (
    <div>
      <button
        className={styles["tab"]}
        onClick={() => {
          setTab("project");
        }}
      >
        <h1>Projects</h1>
      </button>
    </div>
  );
}
