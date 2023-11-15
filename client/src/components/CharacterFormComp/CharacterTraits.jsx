const CharacterTraits = ({ API_Url, handleTraitsChange, currentCharacter }) => {
  const handleTraitValueChange = (trait, value) => {
    handleTraitsChange(trait, value);
  };

  return (
    <div>
      <label>
        Languages:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("languages", e.target.value)}
          value={
            currentCharacter?.traits ? currentCharacter.traits.languages : undefined
          }
        />
      </label>
      <label>
        Proficiencies:
        <input
          type="text"
          onChange={(e) =>
            handleTraitValueChange("proficiencies", e.target.value)
          }
          value={
            currentCharacter?.traits
              ? currentCharacter.traits.proficiencies
              : undefined
          }
        />
      </label>
      <label>
        Personality:
        <input
          type="text"
          onChange={(e) =>
            handleTraitValueChange("personality", e.target.value)
          }
          value={
            currentCharacter?.traits
              ? currentCharacter.traits.personality
              : undefined
          }
        />
      </label>
      <label>
        Ideals:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("ideals", e.target.value)}
          value={
            currentCharacter?.traits ? currentCharacter.traits.ideals : undefined
          }
        />
      </label>
      <label>
        Bonds:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("bonds", e.target.value)}
          value={
            currentCharacter?.traits ? currentCharacter.traits.bonds : undefined
          }
        />
      </label>
      <label>
        Flaws:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("flaws", e.target.value)}
          value={
            currentCharacter?.traits ? currentCharacter.traits.flaws : undefined
          }
        />
      </label>
      <label>
        Features:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("features", e.target.value)}
          value={
            currentCharacter?.traits ? currentCharacter.traits.features : undefined
          }
        />
      </label>
    </div>
  );
};

export default CharacterTraits;
