import React from "react";

import "./CharacterItems.scss";

import {
  GiElfHelmet,
  GiCapeArmor,
  GiLegArmor,
  GiLightningBow,
} from "react-icons/gi";

function CharacterItems() {
  const armsStats = {
    damage: ["Damage", 100],
    durability: ["Durability", 212],
    level: ["Level", 69],
    magicDamage: ["Magic Damage", 24],
  };

  function showWepStats(wepObject) {
    const { ...stats } = wepObject;
    const array = [];
    for (const [key, value] of Object.entries(stats)) {
      array.push(
        <div key={key} className="character_wepon-stats">
          <span className="character_wepon-stats--name">{value[0]}</span>
          <span className="character_wepon-stats--value">{value[1]}</span>
        </div>
      );
    }

    return array;
  }

  return (
    <div className="character_itmesContainer">
      <div className="character_item character_helm">
        <GiElfHelmet />
      </div>
      <div className="character_item character_wepon">
        <div className="character_stats-container">
          <p>Lightning Bow</p>
          {showWepStats(armsStats)}
        </div>
        <GiLightningBow />
      </div>
      <div className="character_item character_armor">
        <GiCapeArmor />
      </div>
      <div className="character_item character_boots">
        <GiLegArmor />
      </div>
    </div>
  );
}

export default CharacterItems;
