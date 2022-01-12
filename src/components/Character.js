import React from "react";

import Inventory from "./inventory";
import CharacterItems from "./CharacterItems";

import "./Character.scss";

import {
  GiHeartPlus,
  GiCrossedSwords,
  GiWingfoot,
  GiArrowsShield,
} from "react-icons/gi";

function Caracter(props) {
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
        <div className="charcter_abilities">
          <div className="charcter_abilities--attributes">
            <span>Health</span>
            <span className="charcter_abilities--attributes_value">
              <GiHeartPlus className="charcter_healthIcon" />
              {props.charcter_health}
            </span>
          </div>
          <div className="charcter_abilities--attributes">
            <span>Attack</span>
            <span className="charcter_abilities--attributes_value">
              <GiCrossedSwords className="charcter_attackIcon" />
              {props.charcter_attack}
            </span>
          </div>
          <div className="charcter_abilities--attributes">
            <span>Agility</span>
            <span className="charcter_abilities--attributes_value">
              <GiWingfoot className="charcter_agilityIcon" />
              {props.charcter_agility}
            </span>
          </div>
          <div className="charcter_abilities--attributes">
            <span>Defence</span>
            <span className="charcter_abilities--attributes_value">
              <GiArrowsShield className="charcter_defenceIcon" />
              {props.charcter_defence}
            </span>
          </div>
        </div>
      </div>
      <div className="charcter_inventory">
        <h5>Inventory</h5>
        <Inventory />
      </div>
    </div>
  );
}

export default Caracter;
