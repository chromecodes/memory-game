import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infoApi } from "./components/modules/data";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState(1);
  const [score, scoreUp] = useState(0);

  const filterData = (dumps) => {
    let temp2 = [];
    dumps.forEach((dump) => {
      temp2.push({
        id: dump.id,
        name: dump.name,
        img: dump.sprites.other["official-artwork"].front_default,
      });
    });
    setData(temp2);
  };

  async function getData() {
    let temp = await infoApi.fetchData();
    filterData(temp);
  }

  useEffect(() => {
    getData();
  }, []);

  const load = () => {
    if (data === 1) {
      return <Loading />;
    } else {
      return <Game det={data} />;
    }
  };
  return (
    <div className='app'>
      <Header score={score} />
      {load()}
      <Footer />
    </div>
  );
}

export default App;
