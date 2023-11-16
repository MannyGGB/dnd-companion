const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema([
	{
		profile: {
			// characterImage: String,
			characterName: String,
			race: String,
			characterClass: String,
			level: Number,
			experiencePoints: Number,
		},
		abilityScores: {
			strength: Number,
			dexterity: Number,
			constitution: Number,
			intelligence: Number,
			wisdom: Number,
			charisma: Number,
		},
		savingThrows: {
			strength: Number,
			dexterity: Number,
			constitution: Number,
			intelligence: Number,
			wisdom: Number,
			charisma: Number,
		},
		skills: {
			acrobatics: Number,
			animalHandling: Number,
			arcana: Number,
			athletics: Number,
			deception: Number,
			history: Number,
			insight: Number,
			intimidation: Number,
			investigation: Number,
			medicine: Number,
			nature: Number,
			perception: Number,
			performance: Number,
			persuasion: Number,
			religion: Number,
			sleightOfHand: Number,
			stealth: Number,
			survival: Number,
		},
		traits: {
			languages: String,
			proficiencies: String,
			personality: String,
			ideals: String,
			bonds: String,
			flaws: String,
			features: String,
		},
		physicalAttributes: {
			armorClass: Number,
			initiative: Number,
			speed: Number,
			currentHitPoints: Number,
			maximumHitPoints: Number,
			temporalHitPoints: Number,
			hitDice: Number,
			deathSavesSuccess: Number,
			deathSavesFail: Number,
		},
		attacks: [
			{
				attackName: String,
				attackBonus: Number,
				damageType: String,
			},
		],
		spells: [
			{
				spellName: String,
				spellLevel: Number,
			},
		],
		inventory: {
			equipment: String,
			cp: Number,
			sp: Number,
			ep: Number,
			gp: Number,
			pp: Number,
		},
	},
]);

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
