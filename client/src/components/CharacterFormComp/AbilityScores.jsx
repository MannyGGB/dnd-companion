const AbilityScores = ({
  API_Url,
  characterData,
  handleAbilityScoreRoll,
  currentCharacter,
}) => {
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
      <div className="ability-div">
        <span>
          Strength:{" "}
          {currentCharacter?.abilityScores
            ? currentCharacter.abilityScores.strength
            : strength}
        </span>
        <button onClick={(e) => rollAbilityScore(e, "strength")}>Roll</button>
      </div>
      <div className="ability-div">
        <span>
          Dexterity:{" "}
          {currentCharacter?.abilityScores
            ? currentCharacter.abilityScores.dexterity
            : dexterity}
        </span>
        <button onClick={(e) => rollAbilityScore(e, "dexterity")}>Roll</button>
      </div>
      <div className="ability-div">
        <span>
          Constitution:{" "}
          {currentCharacter?.abilityScores
            ? currentCharacter.abilityScores.constitution
            : constitution}
        </span>
        <button onClick={(e) => rollAbilityScore(e, "constitution")}>Roll</button>
      </div>
      <div className="ability-div">
        <span>
          Intelligence:{" "}
          {currentCharacter?.abilityScores
            ? currentCharacter.abilityScores.intelligence
            : intelligence}
        </span>
        <button onClick={(e) => rollAbilityScore(e, "intelligence")}>Roll</button>
      </div>
      <div className="ability-div">
        <span>
          Wisdom:{" "}
          {currentCharacter?.abilityScores
            ? currentCharacter.abilityScores.wisdom
            : wisdom}
        </span>
        <button onClick={(e) => rollAbilityScore(e, "wisdom")}>Roll</button>
      </div>
      <div className="ability-div">
        <span>
          Charisma:{" "}
          {currentCharacter?.abilityScores
            ? currentCharacter.abilityScores.charisma
            : charisma}
        </span>
        <button onClick={(e) => rollAbilityScore(e, "charisma")}>Roll</button>
      </div>
    </div>
  );
};

export default AbilityScores;
