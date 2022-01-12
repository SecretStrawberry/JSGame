import React from "react";
import "./inventory.scss";

function Inventory() {
  const grid = [];

  function makeGrid(cellNumber) {
    for (let i = 0; i < cellNumber; i++) {
      grid.push(
        <div key={i} id={"cell_" + i} className="inventory_cell">
          {"cell_" + i}
        </div>
      );
    }
    return grid;
  }

  return <div className="inventory">{makeGrid(40).flat()}</div>;
}

export default Inventory;
