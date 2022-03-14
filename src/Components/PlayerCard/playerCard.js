import { useState } from "react";
import styles from "./playerCard.module.css";
import React from "react";

let hand = 1;
var scoreBook = new Map();

const PlayerCard = () => {
  const [players, setPlayers] = useState({
    p1: "Player 1",
    p2: "Player 2",
    p3: "Player 3",
    p4: "Player 4",
  });
  const [scores, setScores] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  });
  const [hands, setHands] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
  });

  const handleNameChange = (e, player) => {
    setPlayers({ ...players, [player]: e.target.value });
  };
  const handleHandChange = (e, player) => {
    setHands({ ...hands, [player]: parseInt(e.target.value) });
  };

  const updateScore = () => {
    //Add the current hand to the players score.
    let updatedScores = { ...scores };
    updatedScores.p1 += hands.p1;
    updatedScores.p2 += hands.p2;
    updatedScores.p3 += hands.p3;
    updatedScores.p4 += hands.p4;
    setScores(updatedScores);

    //record the current score in the scorebook
    let currentHand = [hands.p1, hands.p2, hands.p3, hands.p4];
    scoreBook.set(hand, currentHand);
    hand++;

    //reset
    resetHand();
  };

  const resetHand = () => {
    setHands({ p1: 0, p2: 0, p3: 0, p4: 0 });
  };

  const handScoreButtons = (player, amount) => {
    //Shoot the Moon
    if (amount == 26) {
      let updatedHands = { ...hands };
      for (let hand in updatedHands) {
        if (hand != player) {
          updatedHands = { ...updatedHands, [hand]: 26 };
        } else {
          updatedHands = { ...updatedHands, [hand]: 0 };
        }
      }
      setHands(updatedHands);
      updateScore();
      return;
    }
    //Evaluate if the amount of points remaining will allow the score action.
    //if (player.hand <= pointsRemaining(player.hand) - amount) {
    //const updatedScore = players.map((player) => (player.score = player.score + amount));
    //old    // let newPlayers = [...players];
    // player.hand = player.hand + amount;
    // setPlayers(newPlayers);
    // let updatedScore = 0;
    // updatedScore = players[player].hand + amount;
    // setPlayerHelper(player, "hand", updatedScore);
    //updateHands();
    setHands({ ...hands, [player]: hands[player] + amount });
  };

  return (
    <div className={styles.main}>
      {Object.keys(players).map((player) => (
        <div className={styles.scoreCard}>
          <div className={styles.scoreCardUpper}>
            <input type="text" className={styles.playerName} value={players[player]} onChange={(e) => handleNameChange(e, player)} />
            <h1 className={styles.score}>{scores[player]}</h1>
          </div>
          <div className={styles.scoreCardLower}>
            <button onClick={() => handScoreButtons(player, 26)} className={styles.scoreButton}>
              Moon
            </button>
            <button onClick={() => handScoreButtons(player, -1)} className={styles.scoreButton}>
              -1
            </button>
            <input type="number" value={hands[player]} onChange={(e) => handleHandChange(e, player)} />
            <button onClick={() => handScoreButtons(player, 1)} className={styles.scoreButton}>
              +1
            </button>
            <button onClick={() => handScoreButtons(player, 5)} className={styles.scoreButton}>
              +5
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => updateScore()}>submit!</button>
    </div>
  );
};

export default PlayerCard;
