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

  // skor 0 -> 1
  // useEffect(() => {
  //   console.log("Skor değeri güncellendi: ", skor);

  //   return () => {
  //     console.log("Skor değeri güncellenecek, eski skor: ", skor);
  //   };
  // }, [skor]);

  useEffect(() => {
    console.log("Skor Did Mount!");

    return () => {
      console.log("Skor Will Unmount! ");
      alert("Skor komponenti kaldırılacaktır");
    };
  }, []);

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
