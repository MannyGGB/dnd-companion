const Inventory = ({ inventory, handleInventoryChange }) => {
  const handleEquipmentChange = (value) => {
    handleInventoryChange({ ...inventory, equipment: value });
  };

  const handleCurrencyChange = (currency, value) => {
    handleInventoryChange({ ...inventory, [currency]: value });
  };

  return (
    <div>
      <h2>Inventory</h2>
      <label>
        Equipment:
        <input
          type="text"
          value={inventory.equipment}
          onChange={(e) => handleEquipmentChange(e.target.value)}
        />
      </label>
      <label>
        CP:
        <input
          type="number"
          value={inventory.cp}
          onChange={(e) =>
            handleCurrencyChange("cp", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        SP:
        <input
          type="number"
          value={inventory.sp}
          onChange={(e) =>
            handleCurrencyChange("sp", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        EP:
        <input
          type="number"
          value={inventory.ep}
          onChange={(e) =>
            handleCurrencyChange("ep", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        GP:
        <input
          type="number"
          value={inventory.gp}
          onChange={(e) =>
            handleCurrencyChange("gp", parseInt(e.target.value) || 0)
          }
        />
      </label>
      <label>
        PP:
        <input
          type="number"
          value={inventory.pp}
          onChange={(e) =>
            handleCurrencyChange("pp", parseInt(e.target.value) || 0)
          }
        />
      </label>
    </div>
  );
};

export default Inventory;
