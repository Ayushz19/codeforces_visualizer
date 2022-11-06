import React from 'react';
import styles from "./styles.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <div className={styles.cf}>
          <ul>Codeforces</ul>
        </div>
        <div className={styles.compare}>
          <ul>compare</ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
