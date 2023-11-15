const SavingThrows = ({ API_Url, handleSavingThrowsChange }) => {
  const handleThrowChange = (stat, value) => {
    handleSavingThrowsChange(stat, value);
  };

  return (
    <div>
      <h2>Saving Throws</h2>
      <label>
        Strength:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("strength", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Dexterity:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("dexterity", parseInt(e.target.value) || 0)
          }
        />
      </label>
      {/* Add input fields for other saving throws */}
      <label>
        Constitution:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("constitution", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Intelligence:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("intelligence", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Wisdom:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("wisdom", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Charisma:
        <input
          type="number"
          onChange={(e) =>
            handleThrowChange("charisma", parseInt(e.target.value) || 0)
          }
        />
      </label>
    </div>
  );
};

export default SavingThrows;
