import React from "react";

import "./OffensiveStats.scss";

function OffensiveStats() {
  return (
    <div className="offence">
      <div className="offence_box offence_damage">
        <span>Damage</span>
        <span>239</span>
      </div>
      <div className="offence_box offence_accuracy">
        <span>Accuracy</span> <span>877</span>
      </div>
      <div className="offence_box offence_dmageType">
        <span>Type</span> <span>Range</span>
      </div>
      <div className="offence_box offence_speed">
        <span>Speed</span> <span>Medium</span>
      </div>
    </div>
  );
}

export default OffensiveStats;
