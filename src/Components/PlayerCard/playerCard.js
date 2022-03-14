import { useState } from "react";
import styles from "./playerCard.module.css";
import React from "react";

const PlayerCard = () => {
  const [players, setPlayers] = useState([
    { score: 0, hand: 0, name: "Player 1" },
    { score: 0, hand: 0, name: "Player 2" },
    { score: 0, hand: 0, name: "Player 3" },
    { score: 0, hand: 0, name: "Player 4" },
  ]);
  //const [score, setScore] = useState(0);
  const [name, setName] = useState("Player 1");
  const handleNameChange = (e, player) => {
    //let newPlayers = [...players];
    player.name = e.target.value;
    //setPlayers(newPlayers);
  };

  const updateScore = () => {
    //Add the current hand to the players score.
    players[0].score += players[0].hand;
    players[1].score += players[1].hand;
    players[2].score += players[2].hand;
    players[3].score += players[3].hand;

    //record the current score in the scorebook
    let currentHand = [players[0].score, players[1].score, players[2].score, players[3].score];
    //scoreBook.set(hand, currentHand);
    // scoreBook = scoreBook;
    // hand++;

    //reset
    // resetHand();
  };

  const scoreButtons = (player, amount) => {
    //Shoot the Moon
    if (amount == 26) {
      for (var i in players) {
        if (players[i] != player) {
          players[i].hand = 26;
        } else {
          players[i].hand = 0;
        }
      }
      //updateScore();
      //resetHand();
      return;
    }

    //Evaluate if the amount of points remaining will allow the score action.
    //if (player.hand <= pointsRemaining(player.hand) - amount) {
    //const updatedScore = players.map((player) => (player.score = player.score + amount));

    let newPlayers = [...players];
    player.hand = player.hand + amount;
    setPlayers(newPlayers);

    //updateHands();
  };

  return (
    <div className={styles.main}>
      {players.map((player) => (
        <div className={styles.scoreCard}>
          <div className={styles.scoreCardUpper}>
            <input type="text" className={styles.playerName} value={player.name} onChange={(e) => handleNameChange(e, player)} />
            <h1 className={styles.score}>{player.score}</h1>
          </div>
          <div className={styles.scoreCardLower}>
            <button className={styles.scoreButton}>Moon</button>
            <button onClick={() => scoreButtons(player, -1)} className={styles.scoreButton}>
              -1
            </button>
            <input type="number" value={player.hand} />
            <button onClick={() => scoreButtons(player, 1)} className={styles.scoreButton}>
              +1
            </button>
            <button onClick={() => scoreButtons(player, 5)} className={styles.scoreButton}>
              +5
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => updateScore()}>Reset</button>
    </div>
  );
};

export default PlayerCard;
