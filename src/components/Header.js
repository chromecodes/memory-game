import React from "react";

export default function Header(props) {
  const { score } = props;
  return (
    <>
      <div className='header'>
        <div className='title'>PokeMemory</div>
        <div className='score'>{score}</div>
      </div>
    </>
  );
}
