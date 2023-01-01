import React from "react";

export default function Gameover(props) {
  const { resetGame, score } = props;
  return (
    <>
      <div className='main'>
        <div className='over'>
          <div className='loadTxt'>GAME OVER..</div>
          <div className='loadTxt'>Congrats!! You Scored {score} Points.</div>

          <button className='try' onClick={resetGame}>
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
