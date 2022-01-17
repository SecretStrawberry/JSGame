import React from "react";

// import Inventory from "./inventory";
import CharacterItems from "./CharacterItems";

import "./CharacterIdentity.scss";

function CaracterIdentity(props) {
  return (
    <div className="charcter">
      <div className="charcter_stats">
        <div className="charcter_identity">
          <div className="charcter_credentials">
            <span className="charcter_name">{props.character_name}</span>
            <span className="charcter_class">
              Class - {props.character_class}
            </span>
            <span className="charcter_tribe">
              Tribe - {props.character_tribe}
            </span>
          </div>
          <div className="charcter_level">
            <span>Level</span>
            {props.character_level}
          </div>
        </div>
        <div>
          <CharacterItems />
          <img
            className="charcter_image"
            alt="hero"
            src={props.character_image}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CaracterIdentity;
