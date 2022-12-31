import React from "react";

export default function Gameover(props) {
  const { resetGame } = props;
  return (
    <>
      <div className='main'>
        <div className='over'>
          <div className='loadTxt'>GAME OVER</div>
          <button className='try' onClick={resetGame}>
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
