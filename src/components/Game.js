import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Game(props) {
  const { det } = props;

  const [data, setData] = useState(det);
  const [memory, updateMemory] = useState([]);

  const creatCard = () => {
    return shuffleArray(data).map((datum) => {
      return <Card data={datum} key={datum.id} act={getMemory} />;
    });
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getMemory = (v) => {
    if (memory.includes(v)) {
      console.log("over...");
    } else {
      updateMemory([...memory, v]);
      console.log(memory);
    }
  };

  useEffect(() => {
    setData(det);
  }, [det]);

  return (
    <>
      <div className='main'>
        <div className='cardCont'>{creatCard()}</div>
      </div>
    </>
  );
}
