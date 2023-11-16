const PhysicalAttributes = ({
  API_Url,
  physicalAttributes,
  handlePhysicalAttributesChange,
  currentCharacter,
}) => {
  const {
    armorClass,
    initiative,
    speed,
    currentHitPoints,
    maximumHitPoints,
    temporalHitPoints,
    hitDice,
    deathSavesSuccess,
    deathSavesFail,
  } = physicalAttributes;

  const handleAttributeChange = (attribute, value) => {
    handlePhysicalAttributesChange(attribute, value);
  };

  return (
    <div>
      <label>Armor Class:</label>
      <input
        name="armorClass"
        onChange={(e) =>
          handleAttributeChange("armorClass", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.armorClass
            : undefined
        }
      />

      <label>Initiative:</label>
      <input
        type="number"
        name="initiative"
        onChange={(e) =>
          handleAttributeChange("initiative", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.initiative
            : undefined
        }
      />

      <label>Speed:</label>
      <input
        type="number"
        name="speed"
        onChange={(e) =>
          handleAttributeChange("speed", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.speed
            : undefined
        }
      />

      <label>Current Hit Points:</label>
      <input
        type="number"
        name="currentHitPoints"
        onChange={(e) =>
          handleAttributeChange("currentHitPoints", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.currentHitPoints
            : undefined
        }
      />

      <label>Maximum Hit Points:</label>
      <input
        type="number"
        name="maximumHitPoints"
        onChange={(e) =>
          handleAttributeChange("armorClass", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.maximumHitPoints
            : undefined
        }
      />
      <label>Temporal Hit Points:</label>
      <input
        type="number"
        name="temporalHitPoints"
        onChange={(e) =>
          handleAttributeChange("temporalHitPoints", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.temporalHitPoints
            : undefined
        }
      />
      <label>Hit Dice:</label>
      <input
        type="number"
        name="hitDice"
        onChange={(e) =>
          handleAttributeChange("hitDice", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.hitDice
            : undefined
        }
      />

      <label>Death Saves Success:</label>
      <input
        type="number"
        name="deathSavesSuccess"
        onChange={(e) =>
          handleAttributeChange("deathSavesSuccess", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.deathSavesSuccess
            : undefined
        }
      />

      <label>Death Saves Fail:</label>
      <input
        type="number"
        name="deathSavesFail"
        onChange={(e) =>
          handleAttributeChange("deathSavesFail", parseInt(e.target.value))
        }
        defaultValue={
          currentCharacter?.physicalAttributes
            ? currentCharacter.physicalAttributes.deathSavesFail
            : undefined
        }
      />
    </div>
  );
};

export default PhysicalAttributes;
