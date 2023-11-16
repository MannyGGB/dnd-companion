import axios from "axios";
import { useState, useEffect } from "react";

const ProfileSection = ({
  API_Url,
  characterData,
  handleProfileChange,
  currentCharacter,
}) => {
  const { characterName, characterClass, level, race, experiencePoints } =
    characterData.profile;

  const [races, setRaces] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getRaces();
    getClasses();
  }, []);

  async function getRaces() {
    const API = `http://localhost:8080/form/races`;
    const res = await axios.get(API);
    setRaces(res.data);
  }

  async function getClasses() {
    const API = `http://localhost:8080/form/classes`;
    const res = await axios.get(API);
    setClasses(res.data);
  }

  return (
    <div>
      {/* <img
				id="characterImage"
				src={
					currentCharacter?.characterImage
						? `./Public/${characterImage}.png`
						: `./Public/DnD_comp_Manny.png`
				}
			/>
			<label>Character image</label>
			<select
				onChange={() => handleProfileChange(characterImage)}
				name="characterImage"
			>
				<option value="DnD_comp_Manny">Character A</option>
				<option value="DnD_comp_Max">Character B</option>
				<option value="DnD_comp_Nellie">Character C</option>
				<option value="DnD_comp_Stephen">Character D</option>
			</select> */}
      <label>
        Character Name:
        <input
          type="text"
          name="characterName"
          defaultValue={
            currentCharacter?.profile
              ? currentCharacter.profile.characterName
              : characterName
          }
          onChange={handleProfileChange}
        />
      </label>
      <label>Race:</label>
      <select onChange={handleProfileChange} name="race">
        <option value="">
          {currentCharacter?.profile ? currentCharacter.profile.race : race}
        </option>
        {races.map((race, index) => (
          <option value={race} key={index}>
            {race}
          </option>
        ))}
      </select>
      <label>Class:</label>
      <select onChange={handleProfileChange} name="characterClass">
        <option value="">
          {currentCharacter?.profile
            ? currentCharacter.profile.characterClass
            : characterClass}
        </option>
        {classes.map((characterClass, index) => (
          <option value={characterClass} key={index}>
            {characterClass}
          </option>
        ))}
      </select>
      <label>Level:</label>
      <input
        type="number"
        name="level"
        onChange={handleProfileChange}
        defaultValue={
          currentCharacter?.profile ? currentCharacter.profile.level : undefined
        }
      />

      <label>Experience Points:</label>
      <input
        type="number"
        name="experiencePoints"
        onChange={handleProfileChange}
        defaultValue={
          currentCharacter?.profile
            ? currentCharacter.profile.experiencePoints
            : undefined
        }
      />
    </div>
  );
};

export default ProfileSection;
