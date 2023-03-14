import { useState } from "react";
import "./App.css";
import Skor from "./Skor";

function App() {
  const [team, setTeam] = useState("Galatasaray");
  const [showSkor, setShowSkor] = useState(true);

  const changeTeam = () => {
    setTeam("team_" + Math.ceil(Math.random() * 999));
  };

  const toggleSkor = () => {
    setShowSkor(!showSkor);
  };

  return (
    <div className="App">
      {showSkor && (
        <Skor team={team} changeTeam={changeTeam}>
          <strong>children prop olarak gider</strong>
          <button>Button from children</button>
        </Skor>
      )}
      <button onClick={changeTeam}>Takımı değiştir!</button>
      <button onClick={toggleSkor}>Skor Toggle!</button>
    </div>
  );
}

export default App;
