import React from "react";
import styles from "./Card.module.css"

const BackgroundName = (name) => {
  return (
    <div className={styles.backName}>
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
