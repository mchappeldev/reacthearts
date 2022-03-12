import styles from "./controlPanel.module.css";
import React from "react";

const ControlPanel = () => {
  return (
    <div className={styles.buttonContainer}>
      Total: 10 <br />
      <br />
      <button>Submit!</button>
      <button>Reset Hand</button>
    </div>
  );
};

export default ControlPanel;
