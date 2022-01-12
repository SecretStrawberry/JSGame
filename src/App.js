import "./App.css";

import Character from "./components/Character";

import Joja from "../src/images/joja.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>The MMORPG learnig JS</h1>
        <Character
          character_name="Joja"
          character_class="Archer"
          character_tribe="Denalers"
          character_level="74"
          character_image={Joja}
          charcter_health="100"
          charcter_attack="231"
          charcter_agility="12"
          charcter_defence="90"
        />
      </header>
    </div>
  );
}

export default App;
