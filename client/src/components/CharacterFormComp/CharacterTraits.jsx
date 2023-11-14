const CharacterTraits = ({ handleTraitChange }) => {
  const handleTraitValueChange = (trait, value) => {
    handleTraitChange(trait, value);
  };

  return (
    <div>
      <h2>CharacterTraits</h2>
      <label>
        Languages:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("languages", e.target.value)}
        />
      </label>
      <label>
        Proficiencies:
        <input
          type="text"
          onChange={(e) =>
            handleTraitValueChange("proficiencies", e.target.value)
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
        />
      </label>
      <label>
        Ideals:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("ideals", e.target.value)}
        />
      </label>
      <label>
        Bonds:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("bonds", e.target.value)}
        />
      </label>
      <label>
        Flaws:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("flaws", e.target.value)}
        />
      </label>
      <label>
        Features:
        <input
          type="text"
          onChange={(e) => handleTraitValueChange("features", e.target.value)}
        />
      </label>
    </div>
  );
};

export default CharacterTraits;
