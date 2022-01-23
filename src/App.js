import "./App.css";
import React from "react";

import HeroWindow from "./components/HeroWindow";
import SwordOfMagic from "./components/weapons/swords/SwordOfMagic";
import BowOfThunder from "./components/weapons/bows/>BowOfThunder";

function App() {
  return (
    <div className="App">
      <h1>learnig JS</h1>
      <HeroWindow />
      <SwordOfMagic />
      <BowOfThunder />
    </div>
  );
}

export default App;
