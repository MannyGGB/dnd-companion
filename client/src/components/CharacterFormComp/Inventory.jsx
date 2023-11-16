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
          onChange={(e) => handleEquipmentChange(e.target.value)}
          defaultValue={
            currentCharacter?.inventory
              ? currentCharacter.inventory.equipment
              : undefined
          }
        />
      </label>
      <label>
        CP:
        <input
          type="number"
          onChange={(e) =>
            handleCurrencyChange("cp", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.inventory
              ? currentCharacter.inventory.cp
              : undefined
          }
        />
      </label>
      <label>
        SP:
        <input
          type="number"
          onChange={(e) =>
            handleCurrencyChange("sp", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.inventory
              ? currentCharacter.inventory.sp
              : undefined
          }
        />
      </label>
      <label>
        EP:
        <input
          type="number"
          onChange={(e) =>
            handleCurrencyChange("ep", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.inventory
              ? currentCharacter.inventory.ep
              : undefined
          }
        />
      </label>
      <label>
        GP:
        <input
          type="number"
          onChange={(e) =>
            handleCurrencyChange("gp", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.inventory
              ? currentCharacter.inventory.gp
              : undefined
          }
        />
      </label>
      <label>
        PP:
        <input
          type="number"
          onChange={(e) =>
            handleCurrencyChange("pp", parseInt(e.target.value) || 0)
          }
          defaultValue={
            currentCharacter?.inventory
              ? currentCharacter.inventory.pp
              : undefined
          }
        />
      </label>
    </div>
  );
};

export default Inventory;
