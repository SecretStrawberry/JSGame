import React from "react";

import "./CharacterFluids.scss";
import FluidBar from "./FluidBar";

import { GiHeartPlus, GiPotionBall } from "react-icons/gi";

function CharacterFluids() {
  // calculates the fluids in percentage and puts them in te fluidsObject
  // takes in maximum fluid points ex: health, mana; and the percentage that should never be more then 100 or lesser then 0
  function fluidsCalculator(maxPionts, percentValue) {
    const maxBar = 100;
    const fluidSObject = {};
    if (percentValue <= 100 && percentValue >= 0) {
      const bar = (maxBar * percentValue) / 100;
      const points = (maxPionts * percentValue) / 100;
      fluidSObject.bar = bar;
      fluidSObject.points = points;
      fluidSObject.maxPoints = maxPionts;
    } else
      alert(
        `Percent should be between 0 and 100. Your percent is: ${percentValue}`
      );

    return fluidSObject;
  }

  const health = fluidsCalculator(200, 5); // (pointsValue, percentage )
  const mana = fluidsCalculator(400, 80);

  return (
    <div className="fluids">
      <div className="fluids_box ">
        <div className="fluids_icon-bar">
          <GiHeartPlus style={{ color: "#e36488" }} />
          <FluidBar width={health.bar + "%"} backgroundColor="#e36488" />
        </div>
        <div className="fluids_points-value">
          <span>Life Poins </span>
          <span>
            {health.points}/{health.maxPoints}
          </span>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div className="fluids_box">
        <div className="fluids_icon-bar">
          <GiPotionBall style={{ color: "#79b8d1" }} />
          <FluidBar width={mana.bar + "%"} backgroundColor="#79b8d1" />
        </div>
        <div className="fluids_points-value">
          <span>Mana </span>
          <span>
            {mana.points}/{mana.maxPoints}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CharacterFluids;
