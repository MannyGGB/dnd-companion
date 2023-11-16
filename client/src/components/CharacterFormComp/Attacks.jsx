const Attacks = ({ attacks, handleAttacksChange, currentCharacter }) => {
  const handleAttackChange = (index, field, value) => {
    const updatedAttacks = [...attacks];
    updatedAttacks[index][field] = value;
    handleAttacksChange(updatedAttacks);
  };

  const addNewAttack = (e) => {
    e.preventDefault();
    handleAttacksChange([
      ...attacks,
      { attackName: "", attackBonus: 0, damageType: "" },
    ]);
  };

  const removeAttack = (index) => {
    const updatedAttacks = [...attacks];
    updatedAttacks.splice(index, 1);
    handleAttacksChange(updatedAttacks);
  };

  return (
    <div>
      {currentCharacter?.profile &&
        currentCharacter.attacks.map((attack, index) => (
          <div key={index}>
            <label>
              My Attack:
              <input type="text" value={attack.attackName} />
            </label>
            <label>
              Attack Bonus:
              <input type="number" value={attack.attackBonus} />
            </label>
            <label>
              Damage Type:
              <input type="text" value={attack.damageType} />
            </label>
            <button onClick={() => removeAttack(index)}>Remove</button>
          </div>
        ))}
      {attacks.attackBonus &&
        attacks.map((attack, index) => (
          <div key={index}>
            <label>
              Attack Name:
              <input
                type="text"
                value={attack.attackName}
                onChange={(e) =>
                  handleAttackChange(index, "attackName", e.target.value)
                }
              />
            </label>
            <label>
              Attack Bonus:
              <input
                type="number"
                value={attack.attackBonus}
                onChange={(e) =>
                  handleAttackChange(
                    index,
                    "attackBonus",
                    parseInt(e.target.value) || 0
                  )
                }
              />
            </label>
            <label>
              Damage Type:
              <input
                type="text"
                value={attack.damageType}
                onChange={(e) =>
                  handleAttackChange(index, "damageType", e.target.value)
                }
              />
            </label>
            <button onClick={() => removeAttack(index)}>Remove</button>
          </div>
        ))}

      <button onClick={addNewAttack}>Add New Attack</button>
    </div>
  );
};

export default Attacks;
