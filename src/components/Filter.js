import React from "react";

function Filter() {
  return (
    <div className="search">
      <input list="items" />
      <datalist id="items">
      <option value="potasio"></option>
      <option value="Arroz"></option>
      <option value="con leche"></option>
      </datalist>
    </div>
  );
}

export default Filter;