import React from "react";
import styles from "./styles.module.scss";

function Display({ data }) {
    console.log(data)
  return (
    data && (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={data.titlePhoto} className={styles.dp} />
        </div>
        <div className={styles.data}>
          <div className={styles.first}>
            {" "}
            <span>first name:-</span>
            <span>{data.firstName}</span>
          </div>
          <div className={styles.first}>
            <span>Last Name:-</span>
            <span>{data.lastName}</span>
          </div>
          <div className={styles.first}>
            <span>Country:-</span>
            <span>{data.country}</span>
          </div>
          <div className={styles.first}>
            <span>Rating:-</span>
            <span>{data.rating}</span>
          </div>
          <div className={styles.first}>
            <span>Max Rating:-</span>
            <span>{data.maxRating}</span>
          </div>
          <div className={styles.first}>
            <span>Rank:-</span>
            <span>{data.rank}</span>
          </div>
        </div>
      </div>
    )
  );
}

export default Display;
