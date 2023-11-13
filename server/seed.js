const mongoose = require("mongoose");
require("dotenv").config();
const Character = require("./models/character");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Character.create([
    {
      profile: {
        characterName: "Eldorin Shadowblade",
        race: "Human",
        characterClass: "Rogue",
        level: 5,
        experiencePoints: 12000,
      },
      abilityScores: {
        strength: 12,
        dexterity: 18,
        constitution: 14,
        intelligence: 14,
        wisdom: 10,
        charisma: 16,
      },
      savingThrows: {
        strength: 1,
        dexterity: 4,
        constitution: 2,
        intelligence: 2,
        wisdom: 0,
        charisma: 3,
      },
      skills: {
        acrobatics: 5,
        animalHandling: 1,
        arcana: 2,
        athletics: 1,
        deception: 5,
        history: 2,
        insight: 1,
        intimidation: 3,
        investigation: 4,
        medicine: 0,
        nature: 2,
        perception: 4,
        performance: 3,
        persuasion: 4,
        religion: 1,
        sleightOfHand: 6,
        stealth: 6,
        survival: 1,
      },
      traits: {
        languages: "Common, Elvish, Thieves' Cant",
        proficiencies: "Daggers, Shortbows, Thieves' Tools",
        personality:
          "Cunning and reserved, Eldorin prefers the shadows to direct confrontation.",
        ideals:
          "Freedom - Everyone should be free to live their life as they choose.",
        bonds: "Protective of the orphanage where he grew up.",
        flaws:
          "Has a weakness for gambling and occasionally takes unnecessary risks.",
        features: "Sneak Attack, Cunning Action",
      },
      physicalAttributes: {
        armorClass: 15,
        initiative: 4,
        speed: 30,
        currentHitPoints: 28,
        maximumHitPoints: 36,
        temporalHitPoints: 0,
        hitDice: 5,
        deathSavesSuccess: 1,
        deathSavesFail: 0,
      },
      attacks: {
        attackName: "Shortsword",
        attackBonus: 6,
        damageType: "Piercing",
      },
      inventory: {
        equipment:
          "Thieves' Tools, Shortsword, Leather Armor, Backpack with basic supplies",
        cp: 25,
        sp: 15,
        ep: 0,
        gp: 50,
        pp: 5,
      },
    },
  ]);
  console.log("Character created");
  mongoose.disconnect();
}

seed();
