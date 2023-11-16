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
      <label>
        Armor Class:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.armorClass
              : armorClass
          }
          onChange={(e) =>
            handleAttributeChange("armorClass", parseInt(e.target.value))
          }
        />
      </label>
      <label>
        Initiative:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.initiative
              : initiative
          }
          onChange={(e) =>
            handleAttributeChange("initiative", parseInt(e.target.value))
          }
        />
      </label>
      <label>
        Speed:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.speed
              : speed
          }
          onChange={(e) =>
            handleAttributeChange("speed", parseInt(e.target.value))
          }
        />
      </label>
      <label>
        Current Hit Points:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.currentHitPoints
              : currentHitPoints
          }
          onChange={(e) =>
            handleAttributeChange(
              "currentHitPoints",
              parseInt(e.target.value)
            )
          }
        />
      </label>
      <label>
        Maximum Hit Points:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.maximumHitPoints
              : maximumHitPoints
          }
          onChange={(e) =>
            handleAttributeChange(
              "maximumHitPoints",
              parseInt(e.target.value)
            )
          }
        />
      </label>
      <label>
        Temporal Hit Points:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.temporalHitPoints
              : temporalHitPoints
          }
          onChange={(e) =>
            handleAttributeChange(
              "temporalHitPoints",
              parseInt(e.target.value)
            )
          }
        />
      </label>
      <label>
        Hit Dice:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.hitDice
              : hitDice
          }
          onChange={(e) =>
            handleAttributeChange("hitDice", parseInt(e.target.value))
          }
        />
      </label>
      <label>
        Death Saves Success:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.deathSavesSuccess
              : deathSavesSuccess
          }
          onChange={(e) =>
            handleAttributeChange(
              "deathSavesSuccess",
              parseInt(e.target.value)
            )
          }
        />
      </label>
      <label>
        Death Saves Fail:
        <input
          type="number"
          defaultValue={
            currentCharacter?.physicalAttributes
              ? currentCharacter.physicalAttributes.deathSavesFail
              : deathSavesFail
          }
          onChange={(e) =>
            handleAttributeChange(
              "deathSavesFail",
              parseInt(e.target.value)
            )
          }
        />
      </label>
    </div>
  );
};

export default PhysicalAttributes;
