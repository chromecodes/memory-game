import React, { useEffect } from "react";
import Card from "./Card";

export default function Game(props) {
  console.log(props.data);

  const { data } = props;

  console.log(data);
  const createCard = () => {
    if (data === data[0]) {
      data.forEach((datum) => {
        <Card data={datum} />;
      });
    }
  };

  useEffect(() => {
    createCard();
  }, [data]);
  return (
    <>
      <div className='main'>{createCard()}</div>
    </>
  );
}
