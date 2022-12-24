import React from "react";
import Card from "./Card";

export default function Game() {
  const { data } = this.props;
  return (
    <>
      <div className='main'>
        {data.forEach((datum) => {
          <Card data={datum} />;
        })}
      </div>
      ;
    </>
  );
}
