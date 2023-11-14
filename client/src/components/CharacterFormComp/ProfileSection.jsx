const ProfileSection = ({ characterData, handleProfileChange }) => {
  const { characterName, characterClass, level, race, experiencePoints } =
    characterData.profile;

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
      <label>
        Race:
        <input
          type="text" // would this be a drop down, so we can take it from the API?
          name="race"
          value={race}
          onChange={handleProfileChange}
        />
      </label>
      <label>
        Class:
        <input
          type="text" // would this be a drop down so we can take it form the API?
          name="class"
          value={characterClass}
          onChange={handleProfileChange}
        />
      </label>
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
