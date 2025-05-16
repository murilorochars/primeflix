import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Prime Flix</h1>
      <button className={styles.button}>
        <span className={styles.label}>+ Meus filmes</span>
        <span className={styles.gradientContainer}>
          <span className={styles.gradient}></span>
        </span>
      </button>
    </div>
  );
};

export default Header;
