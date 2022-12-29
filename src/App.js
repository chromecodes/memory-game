import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infoApi } from "./components/modules/data";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Scoreboard from "./components/Scoreboard";
import Gameover from "./components/Gameover";

function App() {
  const [data, setData] = useState(1);
  const [score, scoreUp] = useState(0);
  const [best, bestUp] = useState(0);
  const [over, reset] = useState(false);

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

  const scoreIncre = () => {
    scoreUp((prevScore) => prevScore + 1);
  };

  const scoreRct = () => {
    scoreUp(0);
  };

  const load = () => {
    if (over === true) {
      return <Gameover resetGame={resetGame} />;
    } else {
      if (data === 1) {
        return <Loading />;
      } else {
        return (
          <Game
            det={data}
            scrUp={scoreIncre}
            scrRct={scoreRct}
            gmOvr={gameOver}
            next={nextLevel}
          />
        );
      }
    }
  };

  const resetGame = () => {
    reset(false);
    setData(1);
    getData();
  };
  const nextLevel = () => {
    infoApi.limit.lvlUp();
    console.log(infoApi.limit.val);
    resetGame();
  };

  const gameOver = () => {
    reset(true);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (score > best) {
      bestUp(score);
    }
  }, [score]);

  return (
    <div className='app'>
      <Header />
      <Scoreboard score={score} best={best} />
      {load()}
      <Footer />
    </div>
  );
}

export default App;
