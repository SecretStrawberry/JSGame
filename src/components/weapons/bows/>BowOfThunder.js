import WeaponStats from "../../WeaponStats";

/* 
 weaponName,
    weaponOverall,
    primaryStats,
    secondaryStats,
    requiredLevel,
    miscellaneous
*/

const weaponName = "Bow Of Thunder";

const weaponOverall = {
  weaponImage: "image",
  weaponDescription: "Ancient Legendary Two-Handed Bow",
  weaponTotalDamage: "2,123.6",
  weaponWield: "2-Hand",
};

const damagePerSecond = {
  damage: ["1657-1890", "Damage"],
  attack: ["2.10", "Attacks pe Second"],
};

const primaryStats = {
  magicDamage: ["1344-1600", "Fire Damage"],
  inteligence: ["1431", "Inteligence"],
  strenght: ["346", "Strenght"],
  dexterity: ["809", "Dexterity"],
};

const secondaryStats = {
  lifePerHit: ["12,122", "Life Per Hit"],
  magicFind: ["40%", "Chance to find magic items"],
};

const requiredLevel = 78;

const sellValue = {
  sellValue: ["Sell Value:", "3220"],
};

const durability = {
  durability: ["45 / 45", "Durability"],
};

const sword = new WeaponStats(
  weaponName,
  weaponOverall,
  damagePerSecond,
  primaryStats,
  secondaryStats,
  requiredLevel,
  sellValue,
  durability
);

console.log(sword);

function BowOfThunder() {
  return sword.displayStats();
}

export default BowOfThunder;
