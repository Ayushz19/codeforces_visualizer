import React from "react";
import styles from "./styles.module.scss";
import image from "./cf.webp";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <div className={styles.img}>
            <img className={styles.logo} src={image} />
        </div>
        <div className={styles.cf}>
          <ul>
            Codeforces
            <br />
            Visualizer
          </ul>
        </div>
        <div className={styles.compare}>
          <ul>Compare</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
