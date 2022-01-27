import React from "react";
import "./WeaponStats.scss";

import { GiTwoCoins } from "react-icons/gi";

//Weapon stats take in:
/* 
weaponName : string

weaponOverall : {
    weaponImage : image,
    weaponDescription : "Ancient sword ....",
    weaponTotalDamage: 4231,
    weaponWield: "1-Hand" or "2-hand"
}

primaryStats: {
    magicDamage: ["1824-1900", "Fire Damage"],
    inteligence: [1221, "Inteligence"],
    strenght: [649, "Strenght"], 
    dexterity: [1234, "Dexterity"],
}

secondaryStats: {
    lifePerHit: ["11.222", "Life Per Hit"],  and such
    magicFind: [10%, "Chance to find magic items"],

}

requiredLevel: 78

sellValue: {
    sellValue: [322, "Sell Value"]
}

durability: { 
     durability: [32/32, "Durability"]
}

damagePerSecond : {
  damage: ["1842-1923", "Damage"],
  attack: ["1.10", "Attacks pe Second"]
}

*/

class WeaponStats {
  constructor(
    weaponName,
    weaponOverall,
    damagePerSecond,
    primaryStats,
    secondaryStats,
    requiredLevel,
    sellValue,
    durability
  ) {
    this.weaponName = weaponName;
    this.weaponOverall = weaponOverall;
    this.damagePerSecond = damagePerSecond;
    this.primaryStats = primaryStats;
    this.secondaryStats = secondaryStats;
    this.requiredLevel = requiredLevel;
    this.sellValue = sellValue;
    this.durability = durability;
  }

  displayStats = function () {
    function stats(wepObject) {
      const { ...stats } = wepObject;
      const array = [];
      // iterating over object to get the arrays
      for (const [key, value] of Object.entries(stats)) {
        array.push(
          // maping over each array and returning each item in a span
          <li key={key}>
            {value.map((item, key) => (
              <span key={key}>{item}</span>
            ))}
          </li>
        );
      }

      return array;
    }

    const primaryStats = stats(this.primaryStats);
    const secondaryStats = stats(this.secondaryStats);
    const sellValue = stats(this.sellValue);
    const durability = stats(this.durability);
    const damagePerSecond = stats(this.damagePerSecond);

    return (
      <div className="weapon">
        <div className="weapon_name">{this.weaponName}</div>
        <div className="weapon_stats">
          <div className="weapon_overall">
            <img src="#" alt="weapon" className="weapon_overall--image" />
            <span className="weapon_overall--description">
              {this.weaponOverall.weaponDescription}
            </span>
            <span className="weapon_overall--totalDamage">
              {this.weaponOverall.weaponTotalDamage}
            </span>
            <span className="weapon_overall--damagePerSecond">
              Damage Per Second
              <ul>{damagePerSecond}</ul>
            </span>
            <span className="weapon_overall--wield">
              {this.weaponOverall.weaponWield}
            </span>
          </div>
          <ul className="weapon_damageStats">
            <li>Primary</li>
            {primaryStats}
          </ul>
          <ul className="weapon_damageStats">
            <li>Secondary</li>
            {secondaryStats}
          </ul>
          <div className="weapon_level">
            <span>Required level:</span> <span>{this.requiredLevel}</span>
          </div>
        </div>
        <div className="weapon_miscellaneous">
          <ul>
            <div className="weapon_sellValue">
              {sellValue}
              <GiTwoCoins className="weapon_sellValue--coinColor" />
            </div>
            <div className="weapon_durability">{durability}</div>
          </ul>
        </div>
      </div>
    );
  };
}

export default WeaponStats;
