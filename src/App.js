import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infoApi } from "./components/modules/data";
import React, { useState } from "react";

async function getData() {
  let data = await infoApi.fetchData();
  console.log(data);
  return data;
}
function App() {
  const [data, setData] = useState(getData);

  const resetData = () => {
    setData(getData);
  };
  ascsac;
  ascsac;
  ascascasc;

  return (
    <div className='app'>
      <Header />
      <Game />
      <button onClick={resetData}>RESET</button>
      <Footer />
    </div>
  );
}

export default App;
