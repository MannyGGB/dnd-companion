import React, { useState } from "react";
import "../CSS/dice.css";

export default function Dice() {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [selectedDice, setSelectedDice] = useState(6);
  const [rollResult, setRollResult] = useState(null);

  const rollDice = (sides) => {
    let totalRoll = 0;
    for (let i = 0; i < numberOfDice; i++) {
      totalRoll += Math.floor(Math.random() * sides) + 1;

      setRollResult(totalRoll);
    }

    const handleDiceChange = (event) => {
      setSelectedDice(parseInt(event.target.value, 10));
    };

    const handleRoll = () => {
      switch (selectedDice) {
        case 4:
          rollDice(4);
          break;
        case 6:
          rollDice(6);
          break;
        case 8:
          rollDice(8);
          break;
        case 10:
          rollDice(10);
          break;
        case 20:
          rollDice(20);
          break;
        case 100:
          rollDice(100);
          break;
        default:
          rollDice(6);
      }
    };

    return (
      <main>
        <h2>Roll Different Dice</h2>
        <div>
          <label>Number of Dice:</label>
          <input
            type="number"
            value={numberOfDice}
            onChange={(event) => setNumberOfDice(event.target.value)}
          />
        </div>
        <div>
          <label>Select Dice Type:</label>
          <select value={selectedDice} onChange={handleDiceChange}>
            <option value={4}>d4</option>
            <option value={6}>d6</option>
            <option value={8}>d8</option>
            <option value={10}>d10</option>
            <option value={20}>d20</option>
            <option value={100}>d100</option>
          </select>
        </div>
        <button id="dice-button" onClick={handleRoll}>
          Roll Dice
        </button>
        {rollResult !== null && <p>Result: {rollResult}</p>}
      </main>
    );
  };
}
