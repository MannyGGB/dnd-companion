import React, { useState, useEffect } from "react";
import axios from "axios";

const SpellForm = ({ API_Url }) => {
  const [classes, setClasses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [spells, setSpells] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSpell, setSelectedSpell] = useState("");

  useEffect(() => {
    const API_ENDPOINT = "your-dnd-api-endpoint";

    const getClassesAndLevels = async () => {
      const classesResponse = await axios.get(`${API_ENDPOINT}/classes`); // change to actual link
      const levelsResponse = await axios.get(`${API_ENDPOINT}/levels`); // change to actual link

      setClasses(classesResponse.data);
      setLevels(levelsResponse.data);
    };

    getClassesAndLevels();
  }, []);

  const getSpells = async (classType, spellLevel) => {
    const response = await axios.get(`${API_ENDPOINT}/spells`, {
      // change link to actual
      params: {
        class: classType,
        level: spellLevel,
      },
    });

    const spellData = response.data;
    setSpells(spellData);
  };

  const handleAddToSpellList = async () => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/spell-list`, {
        // change link to actual
        spell: selectedSpell,
      });
      console.log("Spell added to spell list:", response.data);
    } catch (error) {
      console.error("Error adding spell to spell list:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getSpells(selectedClass, selectedLevel);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class:
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map((classOption) => (
            <option key={classOption} value={classOption}>
              {classOption}
            </option>
          ))}
        </select>
      </label>

      <label>
        Level:
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          {levels.map((levelOption) => (
            <option key={levelOption} value={levelOption}>
              {levelOption}
            </option>
          ))}
        </select>
      </label>

      {spells.length > 0 && (
        <label>
          Spells:
          <select
            value={selectedSpell}
            onChange={(e) => setSelectedSpell(e.target.value)}
          >
            {spells.map((spell) => (
              <option key={spell.id} value={spell.name}>
                {spell.name}
              </option>
            ))}
          </select>
        </label>
      )}

      <button type="submit">Search Spells</button>
      <button type="button" onClick={handleAddToSpellList}>
        Add to Spell List
      </button>
    </form>
  );
};

export default SpellForm;
