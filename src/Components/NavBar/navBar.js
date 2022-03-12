import styles from "./navBar.module.css";
import React from "react";
let refresh = require("./refresh.png");
let heart = require("./heart.png");

const NavBar = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={heart} className={styles.headerimg} />
        <h1>React Hearts</h1>
      </div>
      <div>
        <img src={refresh} id={styles.refresh} />
      </div>
    </header>
  );
};

export default NavBar;
