import { useEffect, useState } from "react";

const Skor = ({ team, changeTeam, children }) => {
  const [skor, setSkor] = useState(0);
  let skor2 = 0;

  const skorArttir = () => {
    setSkor(skor + 1);
  };

  const skor2Arttir = () => {
    console.log("skor2 >", skor2);
    skor2++;
    console.log("skor2 >", skor2);
  };

  useEffect(() => {
    console.log("Skor değeri güncellendi: ", skor);
  }, [skor]);

  useEffect(() => {
    // component did update
    console.log("PARAMETRESİZ! compnent rerender oldu: componentDidUpdate");
  });

  useEffect(() => {
    // component did update
    console.log("PARAMETRELİ! compnent rerender oldu: componentDidUpdate");
  }, [skor, team, changeTeam, children]);

  return (
    <div>
      {team}
      SKOR: {skor}
      <button onClick={skorArttir}>Arttır</button>
      <br />
      SKOR 2: {skor2}
      <button onClick={skor2Arttir}>Arttır</button>
      <button onClick={changeTeam}>Change Team from SKOR Component</button>
      <hr />
      {children}
    </div>
  );
};

export default Skor;
