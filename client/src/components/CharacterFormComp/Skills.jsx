const Skills = ({ API_Url, handleSkillsChange, currentCharacter }) => {
  const handleSkillValueChange = (skill, value) => {
    handleSkillsChange(skill, value);
  };

  return (
    <div>
      <label>
        Acrobatics:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("acrobatics", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.acrobatics : undefined
          }
        />
      </label>
      <label>
        Animal Handling:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange(
              "animalHandling",
              parseInt(e.target.value)
            )
          }
          defaultValue={
            currentCharacter?.skills
              ? currentCharacter.skills.animalHandling
              : undefined
          }
        />
      </label>
      <label>
        Arcana:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("arcana", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.arcana : undefined
          }
        />
      </label>
      <label>
        Athletics:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("athletics", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.athletics : undefined
          }
        />
      </label>
      <label>
        Deception:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("deception", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.deception : undefined
          }
        />
      </label>
      <label>
        History:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("history", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.history : undefined
          }
        />
      </label>
      <label>
        Insight:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("insight", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.insight : undefined
          }
        />
      </label>
      <label>
        Intimidation:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange(
              "intimidation",
              parseInt(e.target.value)
            )
          }
          defaultValue={
            currentCharacter?.skills
              ? currentCharacter.skills.intimidation
              : undefined
          }
        />
      </label>
      <label>
        Investigation:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange(
              "investigation",
              parseInt(e.target.value)
            )
          }
          defaultValue={
            currentCharacter?.skills
              ? currentCharacter.skills.investigation
              : undefined
          }
        />
      </label>
      <label>
        Medicine:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("medicine", parseInt(e.target.value))
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.medicine : undefined
          }
        />
      </label>
      <label>
        Nature:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("nature", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.nature : undefined
          }
        />
      </label>
      <label>
        Perception:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("perception", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.perception : undefined
          }
        />
      </label>
      <label>
        Performance:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("performance", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills
              ? currentCharacter.skills.performance
              : undefined
          }
        />
      </label>
      <label>
        Persuasion:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("persuasion", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.persuasion : undefined
          }
        />
      </label>
      <label>
        Religion:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("religion", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.religion : undefined
          }
        />
      </label>
      <label>
        Sleight of Hand:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange(
              "sleightOfHand",
              parseInt(e.target.value) || 0
            )
          }
          defaultValue={
            currentCharacter?.skills
              ? currentCharacter.skills.sleightOfHand
              : undefined
          }
        />
      </label>
      <label>
        Stealth:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("stealth", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.stealth : undefined
          }
        />
      </label>
      <label>
        Survival:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("survival", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.skills ? currentCharacter.skills.survival : undefined
          }
        />
      </label>
    </div>
  );
};

export default Skills;
