import axios from "axios";
import { useState, useEffect } from "react";

const ProfileSection = ({ API_Url, characterData, handleProfileChange }) => {
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
      <h2>Character Profile</h2>
      <label>
        Character Name:
        <input
          type="text"
          name="characterName"
          value={characterName}
          onChange={handleProfileChange}
        />
      </label>
      <label>Race:</label>
      <select onChange={handleProfileChange} name="race">
        <option value=""></option>
        {races.map((race, index) => (
          <option value={race} key={index}>
            {race}
          </option>
        ))}
      </select>
      <label>Class:</label>
      <select onChange={handleProfileChange} name="characterClass">
        <option value=""></option>
        {classes.map((characterClass, index) => (
          <option value={characterClass} key={index}>
            {characterClass}
          </option>
        ))}
      </select>
      <label>
        Level:
        <input
          type="number"
          name="level"
          value={level}
          onChange={handleProfileChange}
        />
      </label>
      <label>
        Experience Points:
        <input
          type="number"
          name="experiencePoints"
          value={experiencePoints}
          onChange={handleProfileChange}
        />
      </label>
    </div>
  );
};

export default ProfileSection;
