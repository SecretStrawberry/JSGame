import React from "react";

import "./DeffensiveStats.scss";

function DeffensiveStats() {
  return (
    <div className="deffence">
      <div className="deffence_box deffence_total">
        <span>Total Defence</span> <span>400</span>
      </div>
      <div className="deffence_box deffence_magic">
        <span>Magic Defence</span> <span>123</span>
      </div>
      <div className="deffence_box deffence_dexterity">
        <span>Dexterity</span> <span>23</span>
      </div>
    </div>
  );
}

export default DeffensiveStats;
