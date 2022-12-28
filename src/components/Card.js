import React from "react";

export default function Card(props) {
  const { data, act } = props;

  const catchPoke = (e) => {
    act(e.target.dataset.index);
  };

  return (
    <>
      <div className='card' onClick={catchPoke} data-index={data.id}>
        <div className='pokeImg' data-index={data.id}>
          <img src={data.img} alt={data.name} data-index={data.id} />
        </div>
        <div className='pokeName' data-index={data.id}>
          {data.name}
        </div>
      </div>
    </>
  );
}
