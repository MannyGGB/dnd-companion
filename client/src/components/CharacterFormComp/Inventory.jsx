const Inventory = ({
  API_Url,
  inventory,
  handleInventoryChange,
  currentCharacter,
}) => {
  const handleEquipmentChange = (value) => {
    handleInventoryChange({ ...inventory, equipment: value });
  };

  const handleCurrencyChange = (currency, value) => {
    handleInventoryChange({ ...inventory, [currency]: value });
  };

  return (
    <div>
      <label>
        Equipment:
        <input
          type="text"
          value={
            currentCharacter?.inventory
              ? currentCharacter.inventory.equipment
              : inventory.equipment
          }
          onChange={(e) => handleEquipmentChange(e.target.value)}
        />
      </label>
      <label>
        CP:
        <input
          type="number"
          value={
            currentCharacter?.inventory
              ? currentCharacter.inventory.cp
              : inventory.cp
          }
          onChange={(e) =>
            handleCurrencyChange("cp", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        SP:
        <input
          type="number"
          value={
            currentCharacter?.inventory
              ? currentCharacter.inventory.sp
              : inventory.sp
          }
          onChange={(e) =>
            handleCurrencyChange("sp", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        EP:
        <input
          type="number"
          value={
            currentCharacter?.inventory
              ? currentCharacter.inventory.ep
              : inventory.ep
          }
          onChange={(e) =>
            handleCurrencyChange("ep", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        GP:
        <input
          type="number"
          value={
            currentCharacter?.inventory
              ? currentCharacter.inventory.gp
              : inventory.gp
          }
          onChange={(e) =>
            handleCurrencyChange("gp", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        PP:
        <input
          type="number"
          value={
            currentCharacter?.inventory
              ? currentCharacter.inventory.pp
              : inventory.pp
          }
          onChange={(e) =>
            handleCurrencyChange("pp", parseInt(e.target.value) || 0)
          }
        />
      </label>
    </div>
  );
};

export default Inventory;
