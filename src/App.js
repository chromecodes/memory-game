import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infoApi } from "./components/modules/data";
// import React, { useState } from "react";

function App() {
  // const [data, setData] = useState(infoApi.fetchData());

  // const resetData = () => {
  //   console.log(data);
  //   setData(infoApi.fetchData());
  // };

  infoApi.fetchData();

  return (
    <div className='app'>
      <Header />
      <Game />
      {/* <button onClick={resetData}> RESET </button> */}
      <Footer />
    </div>
  );
}

export default App;
