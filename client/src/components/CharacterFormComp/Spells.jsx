const Spells = ({ spells, handleSpellsChange }) => {
  const handleSpellChange = (index, field, value) => {
    const updatedSpells = [...spells];
    updatedSpells[index][field] = value;
    handleSpellsChange(updatedSpells);
  };

  const addNewSpell = (e) => {
    e.preventDefault();
    handleSpellsChange([...spells, { spellName: "", spellLevel: 0 }]);
  };

  const removeSpell = (index) => {
    const updatedSpells = [...spells];
    updatedSpells.splice(index, 1);
    handleSpellsChange(updatedSpells);
  };

  return (
    <div>
      <h2>Spells</h2>
      {spells.map((spell, index) => (
        <div key={index}>
          <label>
            Spell Name:
            <input
              type="text"
              value={spell.spellName}
              onChange={(e) =>
                handleSpellChange(index, "spellName", e.target.value)
              }
            />
          </label>
          <label>
            Spell Level:
            <input
              type="number"
              value={spell.spellLevel}
              onChange={(e) =>
                handleSpellChange(index, "spellLevel", parseInt(e.target.value))
              }
            />
          </label>
          <button onClick={(e) => removeSpell(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addNewSpell}>Add Spell</button>
    </div>
  );
};

export default Spells;
