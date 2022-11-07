import React from "react";
import styles from "./styles.module.scss";

function Compare({ data }) {
  return (
    data.length !== 0 && (
      <div className={styles.container}>
        <div className={styles.compare}>
          <div className={styles.image}>
            <img src={data[0].titlePhoto} className={styles.dp} />
          </div>
          <div className={styles.data}>
            <div className={styles.first}>
              {" "}
              <span>first name:-</span>
              <span>{data[0].firstName}</span>
            </div>
            <div className={styles.first}>
              <span>Last Name:-</span>
              <span>{data[0].lastName}</span>
            </div>
            <div className={styles.first}>
              <span>Country:-</span>
              <span>{data[0].country}</span>
            </div>
            <div className={styles.first}>
              <span>Rating:-</span>
              <span>{data[0].rating}</span>
            </div>
            <div className={styles.first}>
              <span>Max Rating:-</span>
              <span>{data[0].maxRating}</span>
            </div>
            <div className={styles.first}>
              <span>Rank:-</span>
              <span>{data[0].rank}</span>
            </div>
          </div>
          <div className={styles.image}>
            <img src={data[1].titlePhoto} className={styles.dp} />
          </div>
          <div className={styles.data}>
            <div className={styles.first}>
              {" "}
              <span>first name:-</span>
              <span>{data[1].firstName}</span>
            </div>
            <div className={styles.first}>
              <span>Last Name:-</span>
              <span>{data[1].lastName}</span>
            </div>
            <div className={styles.first}>
              <span>Country:-</span>
              <span>{data[1].country}</span>
            </div>
            <div className={styles.first}>
              <span>Rating:-</span>
              <span>{data[1].rating}</span>
            </div>
            <div className={styles.first}>
              <span>Max Rating:-</span>
              <span>{data[1].maxRating}</span>
            </div>
            <div className={styles.first}>
              <span>Rank:-</span>
              <span>{data[1].rank}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Compare;
