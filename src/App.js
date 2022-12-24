import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { infoApi } from "./components/modules/data";
import React, { useEffect, useState } from "react";

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

  useEffect(()=>{
    import { useEffect, useState } from "react"

export default function Test() {

  const [data, setData] = useState('')


  useEffect(() => {

    const callData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/10').then(data => data.json())
      setData(data)

    }


    callData()
  }, [])

  return (data === '' ? <>loading ... </> : <div>{data.title}</div>)

}
  },[])


  return (
    <div className='app'>
      <Header />
      <Game data={data === [] ? 1 : data} />
      <button onClick={resetData}>RESET</button>
      <Footer />
    </div>
  );
}

export default App;
