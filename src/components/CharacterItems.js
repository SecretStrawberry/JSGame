import React from "react";

import "./CharacterItems.scss";
import BowOfThunder from "../components/weapons/bows/>BowOfThunder";

import {
  GiElfHelmet,
  GiCapeArmor,
  GiLegArmor,
  GiLightningBow,
} from "react-icons/gi";

function CharacterItems() {
  return (
    <div className="character_itmesContainer">
      <div className="character_item character_helm">
        <GiElfHelmet />
      </div>
      <div className="character_item character_wepon">
        <div className="character_stats-container">
          <BowOfThunder />
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
