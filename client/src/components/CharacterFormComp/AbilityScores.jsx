const AbilityScores = ({ API_Url, characterData, handleAbilityScoreRoll }) => {
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } =
    characterData.abilityScores;

  const rollAbilityScore = (e, ability) => {
    e.preventDefault();
    // trying with DnD rules as written, roll 4 minus the lowest
    const diceValues = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 6) + 1
    );
    const minDice = Math.min(...diceValues);
    const totalScore = diceValues.reduce((acc, val) => acc + val, 0) - minDice;

    handleAbilityScoreRoll(ability, totalScore);
  };
  return (
    <div>
      <h2>Ability Scores</h2>
      <div>
        <button onClick={(e) => rollAbilityScore(e, "strength")}>Roll</button>
        <span>strength: {strength}</span>
      </div>
      <div>
        <button onClick={(e) => rollAbilityScore(e, "dexterity")}>Roll</button>
        <span>dexterity: {dexterity}</span>
      </div>
      <div>
        <button onClick={(e) => rollAbilityScore(e, "constitution")}>
          Roll
        </button>
        <span>Constitution: {constitution}</span>
      </div>
      <div>
        <button onClick={(e) => rollAbilityScore(e, "intelligence")}>
          Roll
        </button>
        <span>Intelligence: {intelligence}</span>
      </div>
      <div>
        <button onClick={(e) => rollAbilityScore(e, "wisdom")}>Roll</button>
        <span>Wisdom: {wisdom}</span>
      </div>
      <div>
        <button onClick={(e) => rollAbilityScore(e, "charisma")}>Roll</button>
        <span>Charisma: {charisma}</span>
      </div>
    </div>
  );
};

export default AbilityScores;
