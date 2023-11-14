import React, { useState } from "react";
import ProfileSection from "./CharacterFormComp/ProfileSection";
import AbilityScores from "./CharacterFormComp/AbilityScores";
import PhysicalAttributes from "./CharacterFormComp/PhysicalAttributes";
import Attacks from "./CharacterFormComp/Attacks";
import Inventory from "./CharacterFormComp/Inventory";
import SavingThrows from "./CharacterFormComp/SavingThrow";
import Skills from "./CharacterFormComp/Skills";
import CharacterTraits from "./CharacterFormComp/CharacterTraits";
import Spells from "./CharacterFormComp/Spells";

const CharacterForm = () => {
  const initialCharacterState = {
    profile: {
      characterName: "",
      race: "",
      class: "",
      level: 1,
      experiencePoints: 0,
    },
    abilityScores: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    physicalAttributes: {
      armorClass: 0,
      initiative: 0,
      speed: 0,
      currentHitPoints: 0,
      maximumHitPoints: 0,
      temporalHitPoints: 0,
      hitDice: 0,
      deathSavesSuccess: 0,
      deathSavesFail: 0,
    },
    attacks: [{ attackName: "", attackBonus: 0, damageType: "" }],

    spells: [
      {
        spellName: "",
        spellLevel: 0,
      },
    ],
    inventory: {
      equipment: "",
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 0,
      pp: 0,
    },

    savingThrows: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    skills: {
      acrobatics: 0,
      animalHandling: 0,
      arcana: 0,
      athletics: 0,
      deception: 0,
      history: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      medicine: 0,
      nature: 0,
      perception: 0,
      performance: 0,
      persuasion: 0,
      religion: 0,
      sleightOfHand: 0,
      stealth: 0,
      survival: 0,
    },
    traits: {
      languages: "",
      proficiencies: "",
      personality: "",
      ideals: "",
      bonds: "",
      flaws: "",
      features: "",
    },
  };

  const [characterData, setCharacterData] = useState(initialCharacterState);

  const handleProfileChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCharacterData((prevData) => ({
      ...prevData,
      profile: {
        ...prevData.profile,
        [name]: value,
      },
    }));
  };

  const handleAbilityScoreRoll = (ability, score) => {
    setCharacterData((prevData) => ({
      ...prevData,
      abilityScores: {
        ...prevData.abilityScores,
        [ability]: score,
      },
    }));
  };

  const handlePhysicalAttributesChange = (attribute, value) => {
    setCharacterData((prevData) => ({
      ...prevData,
      physicalAttributes: {
        ...prevData.physicalAttributes,
        [attribute]: value,
      },
    }));
  };

  const handleAttacksChange = (updatedAttacks) => {
    setCharacterData((prevData) => ({
      ...prevData,
      attacks: updatedAttacks,
    }));
  };

  const handleInventoryChange = (updatedInventory) => {
    setCharacterData((prevData) => ({
      ...prevData,
      inventory: updatedInventory,
    }));
  };
  const handleSavingThrowsChange = (ability, value) => {
    setCharacterData((prevData) => ({
      ...prevData,
      savingThrows: {
        ...prevData.savingThrows,
        [ability]: value,
      },
    }));
  };

  const handleSkillsChange = (skill, value) => {
    setCharacterData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [skill]: value,
      },
    }));
  };

  const handleTraitsChange = (updatedTraits) => {
    setCharacterData((prevData) => ({
      ...prevData,
      traits: updatedTraits,
    }));
  };

  const handleSpellsChange = (updatedSpells) => {
    setCharacterData((prevData) => ({
      ...prevData,
      spells: updatedSpells,
    }));
  };

  return (
    <form>
      <ProfileSection
        characterData={characterData}
        handleProfileChange={handleProfileChange}
      />
      <AbilityScores
        characterData={characterData}
        handleAbilityScoreRoll={handleAbilityScoreRoll}
      />
      <PhysicalAttributes
        physicalAttributes={characterData.physicalAttributes}
        handlePhysicalAttributesChange={handlePhysicalAttributesChange}
      />
      <Attacks
        attacks={characterData.attacks}
        handleAttacksChange={handleAttacksChange}
      />
      <Spells
        spells={characterData.spells}
        handleSpellsChange={handleSpellsChange}
      />
      <Inventory
        inventory={characterData.inventory}
        handleInventoryChange={handleInventoryChange}
      />
      <SavingThrows
        savingThrows={characterData.savingThrows}
        handleSavingThrowsChange={handleSavingThrowsChange}
      />
      <Skills
        skills={characterData.skills}
        handleSkillsChange={handleSkillsChange}
      />
      <CharacterTraits
        traits={characterData.traits}
        handleTraitsChange={handleTraitsChange}
      />
    </form>
  );
};

export default CharacterForm;
