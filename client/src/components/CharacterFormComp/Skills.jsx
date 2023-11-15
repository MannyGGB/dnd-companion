const Skills = ({ API_Url, handleSkillsChange }) => {
  const handleSkillValueChange = (skill, value) => {
    handleSkillsChange(skill, value);
  };

  return (
    <div>
      <h2>Skills</h2>
      <label>
        Acrobatics:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("acrobatics", parseInt(e.target.value) || 0)
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
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
      <label>
        Arcana:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("arcana", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Athletics:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("athletics", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Deception:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("deception", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        History:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("history", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        Insight:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("insight", parseInt(e.target.value) || 0)
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
              parseInt(e.target.value) || 0
            )
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
              parseInt(e.target.value) || 0
            )
          }
        />
      </label>
      <label>
        Medicine:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("medicine", parseInt(e.target.value) || 0)
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
        />
      </label>
      <label>
        Perception:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("perception", parseInt(e.target.value) || 0)
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
        />
      </label>
      <label>
        Persuasion:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("persuasion", parseInt(e.target.value) || 0)
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
        />
      </label>
      <label>
        Stealth:
        <input
          type="number"
          onChange={(e) =>
            handleSkillValueChange("stealth", parseInt(e.target.value) || 0)
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
        />
      </label>
    </div>
  );
};

export default Skills;
