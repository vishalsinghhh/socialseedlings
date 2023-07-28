"use client";
import React from "react";
import styles from "./DarkModeToggle.module.css";
import { useAppContext } from "../../context/appContext";

const DarkModeToggle = () => {
  const { mode, changeTheme } = useAppContext();
  return (
    <div
      className={styles.container}
      onClick={() => {
        mode == "light" ? 
        changeTheme("dark") : changeTheme("light")
      }}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode == "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
