const Spells = ({ spells, handleSpellsChange, currentCharacter }) => {
	const handleSpellChange = (index, field, value) => {
		const updatedSpells = [...spells];
		updatedSpells[index][field] = value;
		handleSpellsChange(updatedSpells);
	};

	const addNewSpell = (e) => {
		e.preventDefault();
		handleSpellsChange([...spells, { spellName: "", spellLevel: 0 }]);
	};

	const removeSpell = (index) => {
		const updatedSpells = [...spells];
		updatedSpells.splice(index, 1);
		handleSpellsChange(updatedSpells);
	};

	return (
		<div>
			{currentCharacter?.profile &&
				currentCharacter?.spells.map((spell, index) => (
					<div key={index}>
						<label>
							My Spell:
							<input
								type="text"
								value={spell.spellName}
								onChange={(e) =>
									handleSpellChange(index, "spellName", e.target.value)
								}
							/>
						</label>
						<label>
							Spell Level:
							<input
								type="number"
								value={spell.spellLevel}
								onChange={(e) =>
									handleSpellChange(
										index,
										"spellLevel",
										parseInt(e.target.value)
									)
								}
							/>
						</label>
					</div>
				))}
			{spells.spellLevel &&
				spells.map((spell, index) => (
					<div key={index}>
						<label>
							Spell Name:
							<input
								type="text"
								value={spell.spellName}
								onChange={(e) =>
									handleSpellChange(index, "spellName", e.target.value)
								}
							/>
						</label>
						<label>
							Spell Level:
							<input
								type="number"
								value={spell.spellLevel}
								onChange={(e) =>
									handleSpellChange(
										index,
										"spellLevel",
										parseInt(e.target.value)
									)
								}
							/>
						</label>
						<button onClick={(e) => removeSpell(index)}>Remove</button>
					</div>
				))}
			<button onClick={addNewSpell}>Add New Spell</button>
		</div>
	);
};

export default Spells;
