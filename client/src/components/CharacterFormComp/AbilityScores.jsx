const AbilityScores = ({ characterData, handleAbilityScoreRoll }) => {
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
        <button onClick={(e) => rollAbilityScore(e, "strength")}>
          Roll Strength
        </button>
        <span>Strength: {strength}</span>
      </div>
      <div>
        <button onClick={() => rollAbilityScore("dexterity")}>
          Roll Dexterity
        </button>
        <span>Dexterity: {dexterity}</span>
      </div>
      <div>
        <button onClick={() => rollAbilityScore("constitution")}>
          Roll Constitution
        </button>
        <span>Constitution: {constitution}</span>
      </div>
      <div>
        <button onClick={() => rollAbilityScore("intelligence")}>
          Roll Intelligence
        </button>
        <span>Intelligence: {intelligence}</span>
      </div>
      <div>
        <button onClick={() => rollAbilityScore("wisdom")}>Roll Wisdom</button>
        <span>Wisdom: {wisdom}</span>
      </div>
      <div>
        <button onClick={() => rollAbilityScore("charisma")}>
          Roll Charisma
        </button>
        <span>Charisma: {charisma}</span>
      </div>
    </div>
  );
};

export default AbilityScores;
