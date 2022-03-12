import styles from "./playerCard.module.css";
import React from "react";

const PlayerCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.scoreCard}>
        <div className={styles.scoreCardUpper}>
          <input type="text" className={styles.playerName} />
          <h1>30</h1>
        </div>
        <div className={styles.scoreCardLower}>
          <button className={styles.scoreButton}>Moon</button>
          <button className={styles.scoreButton}>-1</button>
          <input type="number" />
          <button className={styles.scoreButton}>+1</button>
          <button className={styles.scoreButton}>+5</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
