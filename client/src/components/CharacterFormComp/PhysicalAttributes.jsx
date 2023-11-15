const PhysicalAttributes = ({
  API_Url,
  physicalAttributes,
  handlePhysicalAttributesChange,
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
      <h2>Physical Attributes</h2>
      <label>
        Armor Class:
        <input
          type="number"
          value={armorClass}
          onChange={(e) =>
            handleAttributeChange("armorClass", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Initiative:
        <input
          type="number"
          value={initiative}
          onChange={(e) =>
            handleAttributeChange("initiative", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Speed:
        <input
          type="number"
          value={speed}
          onChange={(e) =>
            handleAttributeChange("speed", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Current Hit Points:
        <input
          type="number"
          value={currentHitPoints}
          onChange={(e) =>
            handleAttributeChange(
              "currentHitPoints",
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
      <label>
        Maximum Hit Points:
        <input
          type="number"
          value={maximumHitPoints}
          onChange={(e) =>
            handleAttributeChange(
              "maximumHitPoints",
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
      <label>
        Temporal Hit Points:
        <input
          type="number"
          value={temporalHitPoints}
          onChange={(e) =>
            handleAttributeChange(
              "temporalHitPoints",
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
      <label>
        Hit Dice:
        <input
          type="number"
          value={hitDice}
          onChange={(e) =>
            handleAttributeChange("hitDice", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Death Saves Success:
        <input
          type="number"
          value={deathSavesSuccess}
          onChange={(e) =>
            handleAttributeChange(
              "deathSavesSuccess",
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
      <label>
        Death Saves Fail:
        <input
          type="number"
          value={deathSavesFail}
          onChange={(e) =>
            handleAttributeChange(
              "deathSavesFail",
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
    </div>
  );
};

export default PhysicalAttributes;
