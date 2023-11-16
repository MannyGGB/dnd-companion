const SavingThrows = ({
  API_Url,
  handleSavingThrowsChange,
  currentCharacter,
}) => {
  const handleThrowChange = (stat, value) => {
    handleSavingThrowsChange(stat, value);
  };

  return (
    <div>
      <label>
        Strength:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("strength", parseInt(e.target.value))
          }
          value={
            currentCharacter?.savingThrows
              ? currentCharacter.savingThrows.strength
              : undefined
          }
        />
      </label>
      <label>
        Dexterity:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("dexterity", parseInt(e.target.value))
          }
          value={
            currentCharacter?.savingThrows
              ? currentCharacter.savingThrows.dexterity
              : undefined
          }
        />
      </label>
      {/* Add input fields for other saving throws */}
      <label>
        Constitution:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("constitution", parseInt(e.target.value))
          }
          value={
            currentCharacter?.savingThrows
              ? currentCharacter.savingThrows.constitution
              : undefined
          }
        />
      </label>
      <label>
        Intelligence:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("intelligence", parseInt(e.target.value))
          }
          value={
            currentCharacter?.savingThrows
              ? currentCharacter.savingThrows.intelligence
              : undefined
          }
        />
      </label>
      <label>
        Wisdom:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("wisdom", parseInt(e.target.value))
          }
          value={
            currentCharacter?.savingThrows
              ? currentCharacter.savingThrows.wisdom
              : undefined
          }
        />
      </label>
      <label>
        Charisma:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("charisma", parseInt(e.target.value))
          }
          value={
            currentCharacter?.savingThrows
              ? currentCharacter.savingThrows.charisma
              : undefined
          }
        />
      </label>
    </div>
  );
};

export default SavingThrows;
