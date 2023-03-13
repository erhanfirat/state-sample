import { useState } from "react";
import "./App.css";
import Skor from "./Skor";

function App() {
  const [team, setTeam] = useState("Galatasaray");

  const changeTeam = () => {
    setTeam("team_" + Math.ceil(Math.random() * 999));
  };

  return (
    <div className="App">
      <Skor team={team} changeTeam={changeTeam}>
        <strong>children prop olarak gider</strong>
        <button>Button from children</button>
      </Skor>
      <button onClick={changeTeam}>Takımı değiştir!</button>
    </div>
  );
}

export default App;
