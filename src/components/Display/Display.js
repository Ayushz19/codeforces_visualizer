import React from "react";
import styles from "./styles.module.scss";

function Display({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.titlePhoto} className={styles.dp} />
      </div>
      <div className={styles.data}>
        <div className={styles.first}>{data.firstName}</div>
        <div className={styles.first}>{data.lastName}</div>
        <div className={styles.first}>{data.country}</div>
        <div className={styles.first}>{data.rating}</div>
        <div className={styles.first}>{data.maxRating}</div>
        <div className={styles.first}>{data.rank}</div>
      </div>
    </div>
  );
}

export default Display;
