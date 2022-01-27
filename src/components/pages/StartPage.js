import React from "react";

import "./StartPage.scss";

import showHeroes from "../../components/ShowHeroesList";

import heroesList from "../users/user1/heroes/Heroes"; // just an objesct with a list of arrays that contains the heroes
import HeroWindow from "../HeroWindow";

import Joja from "../../images/joja.jpg";

import CharacterIdentity from "../CharacterIdentity";
import CharacterFluids from "../CharacterFluids";
import OffensiveStats from "../OffensiveStats";
import DeffensiveStats from "../DeffensiveStats";

function StartPage() {
  return (
    <div className="startPage">
      <header className="startPage_header">
        <h1>Extraordinary Adventure</h1>
        <div className="startPage_user-tab">User Name</div>
      </header>

      <div className="startPage_heroDetails">
        <div className="startPage_heroDetails--listContainer">
          <div className="startPage_heroDetails--title">
            <h4>Heroes</h4>
          </div>
          <div className="startPage_heroDetails--HeroList">
            {showHeroes(heroesList)}
          </div>
          <button>Create new Hero</button>
        </div>
        <div className="startPage_heroScreen">
          <div>
            <CharacterIdentity
              character_name="Joja"
              character_class="Archer"
              character_tribe="Denalers"
              character_level="74"
              character_image={Joja}
            />
          </div>
          <div>
            <CharacterFluids />
            <OffensiveStats />
            <DeffensiveStats />
          </div>
        </div>
      </div>
      <HeroWindow />
    </div>
  );
}

export default StartPage;
