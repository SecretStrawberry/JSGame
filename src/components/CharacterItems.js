import React from "react";

import "./CharacterItems.scss";

import {
  GiElfHelmet,
  GiCapeArmor,
  GiLegArmor,
  GiLightningBow,
} from "react-icons/gi";

function CharacterItems() {
  const wepStatsObject = {
    damage: 100,
    durability: 212,
    level: 69,
    magicDamage: 24,
  };

  function weponStats(statsObject) {
    const { ...stats } = statsObject;
    const statsArray = [];
    for (const [key, value] of Object.entries(stats)) {
      console.log(key, value);
      statsArray.push(
        <div key={key} className="character_wepon-stats">
          <span className="character_wepon-stats--name">{key}</span>
          <span className="character_wepon-stats--value">{value}</span>
        </div>
      );
    }
    return statsArray;
  }

  return (
    <div className="character_itmesContainer">
      <div className="character_item character_helm">
        <GiElfHelmet />
      </div>
      <div className="character_item character_wepon">
        <div className="character_stats-container">
          <p>Lightning Bow</p>
          {weponStats(wepStatsObject)}
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
