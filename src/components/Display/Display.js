import React from "react";
import styles from "./styles.module.scss";

function Display({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.titlePhoto} className={styles.dp} />
      </div>
      <div className={styles.first}>
        {/* <span>First Name</span> */}
        {data.firstName}
      </div>
      <div className={styles.first}>{data.lastName}</div>
      <div className={styles.country}>{data.country}</div>
      <div className={styles.rating}>{data.rating}</div>
    </div>
  );
}

export default Display;
