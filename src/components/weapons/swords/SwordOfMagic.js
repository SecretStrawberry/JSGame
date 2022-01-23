import WeaponStats from "../../WeaponStats";

/* 
 weaponName,
    weaponOverall,
    primaryStats,
    secondaryStats,
    requiredLevel,
    miscellaneous
*/

const weaponName = "Sword of Magic";

const weaponOverall = {
  weaponImage: "image",
  weaponDescription: "Ancient Legendary Two-Handed Sword",
  weaponTotalDamage: "4,123.6",
  weaponWield: "1-Hand",
};

const damagePerSecond = {
  damage: ["1842-1923", "Damage"],
  attack: ["1.10", "Attacks pe Second"],
};

const primaryStats = {
  magicDamage: ["1824-1900", "Fire Damage"],
  inteligence: ["1221", "Inteligence"],
  strenght: ["649", "Strenght"],
  dexterity: ["1234", "Dexterity"],
};

const secondaryStats = {
  lifePerHit: ["11.222", "Life Per Hit"],
  magicFind: ["10%", "Chance to find magic items"],
};

const requiredLevel = 78;

const sellValue = {
  sellValue: ["Sell Value:", "322"],
};

const durability = {
  durability: ["32 / 32", "Durability"],
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

function SwordOfMagic() {
  return sword.displayStats();
}

export default SwordOfMagic;
