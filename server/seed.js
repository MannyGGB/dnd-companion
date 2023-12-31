const mongoose = require("mongoose");
require("dotenv").config();
const Character = require("./models/character");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Character.create([
    {
      profile: {
        characterName: "Erevan Nightstar",
        race: "Elf",
        characterClass: "Rogue",
        level: 3,
        experiencePoints: 1200,
      },
      abilityScores: {
        strength: 10,
        dexterity: 16,
        constitution: 12,
        intelligence: 14,
        wisdom: 8,
        charisma: 14,
      },
      savingThrows: {
        strength: 0,
        dexterity: 5,
        constitution: 1,
        intelligence: 2,
        wisdom: -1,
        charisma: 2,
      },
      skills: {
        acrobatics: 5,
        stealth: 5,
        deception: 4,
        investigation: 2,
        perception: -1,
      },
      traits: {
        languages: "Elvish, Common",
        proficiencies: "Thieves' Tools, Longbow",
        personality: "Mysterious and Observant",
        ideals: "Freedom and Independence",
        bonds: "Loyalty to Companions",
        flaws: "Easily Distracted",
        features: "Cunning Action",
      },
      physicalAttributes: {
        armorClass: 14,
        initiative: 3,
        speed: 35,
        currentHitPoints: 21,
        maximumHitPoints: 28,
        temporalHitPoints: 0,
        hitDice: 3,
        deathSavesSuccess: 1,
        deathSavesFail: 0,
      },
      attacks: [
        {
          attackName: "Dagger",
          attackBonus: 5,
          damageType: "Piercing",
        },
        {
          attackName: "Shortbow",
          attackBonus: 5,
          damageType: "Piercing",
        },
      ],
      inventory: {
        equipment: "Thieves' Tools, Shortbow, Dagger, Leather Armor",
        cp: 25,
        sp: 15,
        ep: 0,
        gp: 50,
        pp: 2,
      },
    },
    {
      profile: {
        characterName: "Thorin Stonehammer",
        race: "Dwarf",
        characterClass: "Cleric",
        level: 4,
        experiencePoints: 2700,
      },
      abilityScores: {
        strength: 14,
        dexterity: 10,
        constitution: 16,
        intelligence: 12,
        wisdom: 18,
        charisma: 8,
      },
      savingThrows: {
        strength: 2,
        dexterity: 0,
        constitution: 3,
        intelligence: 1,
        wisdom: 7,
        charisma: -1,
      },
      skills: {
        religion: 3,
        medicine: 7,
        athletics: 2,
        insight: 7,
        persuasion: -1,
      },
      traits: {
        languages: "Dwarvish, Common",
        proficiencies: "Warhammer, Scale Mail",
        personality: "Stoic and Disciplined",
        ideals: "Protection and Justice",
        bonds: "Ancestral Heritage",
        flaws: "Stubborn",
        features: "Divine Domain (Life)",
      },
      physicalAttributes: {
        armorClass: 16,
        initiative: 0,
        speed: 25,
        currentHitPoints: 32,
        maximumHitPoints: 38,
        temporalHitPoints: 0,
        hitDice: 4,
        deathSavesSuccess: 2,
        deathSavesFail: 0,
      },
      attacks: [
        {
          attackName: "Warhammer",
          attackBonus: 4,
          damageType: "Bludgeoning",
        },
      ],
      inventory: {
        equipment: "Warhammer, Scale Mail, Shield, Holy Symbol",
        cp: 10,
        sp: 15,
        ep: 0,
        gp: 20,
        pp: 1,
      },
    },
    {
      profile: {
        characterName: "Lirael Moonshadow",
        race: "Tiefling",
        characterClass: "Sorcerer",
        level: 5,
        experiencePoints: 6500,
      },
      abilityScores: {
        strength: 8,
        dexterity: 14,
        constitution: 12,
        intelligence: 10,
        wisdom: 10,
        charisma: 18,
      },
      savingThrows: {
        strength: -1,
        dexterity: 2,
        constitution: 1,
        intelligence: 0,
        wisdom: 0,
        charisma: 7,
      },
      skills: {
        arcana: 4,
        persuasion: 7,
        deception: 7,
        insight: 2,
        perception: 2,
      },
      traits: {
        languages: "Infernal, Common",
        proficiencies: "Dagger, Arcane Focus",
        personality: "Charming and Witty",
        ideals: "Knowledge and Power",
        bonds: "Seeking Redemption",
        flaws: "Impulsive",
        features: "Font of Magic",
      },
      physicalAttributes: {
        armorClass: 12,
        initiative: 2,
        speed: 30,
        currentHitPoints: 30,
        maximumHitPoints: 35,
        temporalHitPoints: 0,
        hitDice: 5,
        deathSavesSuccess: 1,
        deathSavesFail: 0,
      },
      attacks: [
        {
          attackName: "Fire Bolt",
          attackBonus: 7,
          damageType: "Fire",
        },
      ],
      inventory: {
        equipment: "Dagger, Spellbook, Component Pouch",
        cp: 5,
        sp: 10,
        ep: 0,
        gp: 25,
        pp: 3,
      },
    },
    {
      profile: {
        characterName: "Aria Swiftwind",
        race: "Halfling",
        characterClass: "Ranger",
        level: 4,
        experiencePoints: 3400,
      },
      abilityScores: {
        strength: 12,
        dexterity: 18,
        constitution: 14,
        intelligence: 10,
        wisdom: 16,
        charisma: 10,
      },
      savingThrows: {
        strength: 1,
        dexterity: 6,
        constitution: 2,
        intelligence: 0,
        wisdom: 3,
        charisma: 0,
      },
      skills: {
        survival: 6,
        stealth: 8,
        athletics: 3,
        perception: 6,
        nature: 2,
      },
      traits: {
        languages: "Halfling, Common",
        proficiencies: "Shortbow, Shortsword, Nature",
        personality: "Optimistic and Curious",
        ideals: "Harmony with Nature",
        bonds: "Protecting the Wilderness",
        flaws: "Impatient",
        features: "Natural Explorer",
      },
      physicalAttributes: {
        armorClass: 15,
        initiative: 4,
        speed: 25,
        currentHitPoints: 28,
        maximumHitPoints: 34,
        temporalHitPoints: 0,
        hitDice: 4,
        deathSavesSuccess: 1,
        deathSavesFail: 1,
      },
      attacks: [
        {
          attackName: "Shortbow",
          attackBonus: 8,
          damageType: "Piercing",
        },
        {
          attackName: "Shortsword",
          attackBonus: 5,
          damageType: "Slashing",
        },
      ],
      inventory: {
        equipment: "Shortbow, Shortsword, Leather Armor, Explorer's Pack",
        cp: 12,
        sp: 20,
        ep: 0,
        gp: 15,
        pp: 1,
      },
    },
    {
      profile: {
        characterName: "Seraphina Stormcaller",
        race: "Aasimar",
        characterClass: "Warlock",
        level: 3,
        experiencePoints: 2100,
      },
      abilityScores: {
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 16,
        wisdom: 10,
        charisma: 18,
      },
      savingThrows: {
        strength: 0,
        dexterity: 1,
        constitution: 2,
        intelligence: 3,
        wisdom: 0,
        charisma: 7,
      },
      skills: {
        arcana: 5,
        deception: 7,
        persuasion: 7,
        insight: 0,
        religion: 5,
      },
      traits: {
        languages: "Celestial, Common",
        proficiencies: "Quarterstaff, Light Crossbow",
        personality: "Enigmatic and Charismatic",
        ideals: "Seeking Knowledge",
        bonds: "Guided by Celestial Patron",
        flaws: "Secretive",
        features: "Pact Magic",
      },
      physicalAttributes: {
        armorClass: 11,
        initiative: 1,
        speed: 30,
        currentHitPoints: 22,
        maximumHitPoints: 27,
        temporalHitPoints: 0,
        hitDice: 3,
        deathSavesSuccess: 0,
        deathSavesFail: 0,
      },
      attacks: [
        {
          attackName: "Eldritch Blast",
          attackBonus: 7,
          damageType: "Force",
        },
      ],
      inventory: {
        equipment: "Quarterstaff, Light Crossbow, Component Pouch",
        cp: 0,
        sp: 15,
        ep: 0,
        gp: 30,
        pp: 2,
      },
    },
  ]);

  console.log("Character created");
  mongoose.disconnect();
}

seed();
