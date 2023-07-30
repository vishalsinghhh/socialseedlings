import React from "react";
import styles from "./Card.module.css"
import { useAppContext } from "@/context/appContext";

const BackgroundName = (name) => {
  const {mode} = useAppContext()
  return (
    <div className={mode==='dark'?`${styles.backName}`:`${styles.backName2}`}>
      <div className={styles.backName1}>{name?.name}</div>
      <div className={styles.backName1}>{name?.name}</div>
      <div className={styles.backName1}>{name?.name}</div>
      <div className={styles.backName1}>{name?.name}</div>
      <div className={styles.backName1}>{name?.name}</div>
      <div className={styles.backName1}>{name?.name}</div>
    </div>
  );
};

export default BackgroundName;
