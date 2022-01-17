import React from "react";

import "./HeroWindow.scss";

import CharacterIdentity from "./CharacterIdentity";
import CharacterFluids from "./CharacterFluids";
import OffensiveStats from "./OffensiveStats";
import DeffensiveStats from "./DeffensiveStats";

import Inventory from "./inventory";

import Joja from "../images/joja.jpg";

function HeroWindow() {
  return (
    <div className="heroWindow">
      <h1>Hero</h1>
      <div className="hero_generalContainer">
        <div className="hero_identity">
          <CharacterIdentity
            character_name="Joja"
            character_class="Archer"
            character_tribe="Denalers"
            character_level="74"
            character_image={Joja}
          />
        </div>
        <div className="hero_stats">
          <div className="hero_stats--innerBox hero_fluids">
            <h3>Fluids Stats</h3>
            <CharacterFluids />
          </div>
          <div className="hero_stats--innerBox hero_offence">
            <h3>Offensive Stats</h3>
            <OffensiveStats />
          </div>
          <div className="hero_stats--innerBox hero_deffence">
            <h3>Deffensive Stats</h3>
            <DeffensiveStats />
          </div>
        </div>
        <div className="hero_inventory">
          <Inventory />
        </div>
      </div>
    </div>
  );
}

export default HeroWindow;
