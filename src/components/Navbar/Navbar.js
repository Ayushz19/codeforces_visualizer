import React, { Component } from "react";
import styles from "./styles.module.scss";
import image from "./cf.webp";
import { Link, useNavigate } from "react-router-dom";

class Navbar extends Component {
  render() {
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
            <ul>
              <Link className={styles.button} to="/compare">
                Compare
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
