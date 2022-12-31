import React from "react";

export default function Scoreboard(props) {
  const { score, best } = props;
  return (
    <>
      <div className='txt'>catch em' all! Only Ones tho'</div>
      <div className='scoreboard'>
        <div className='score'>Score : {score}</div>
        <div className='best'> Best : {best}</div>
      </div>
      <div className='levelBoard'>
        <div className='levelUp'></div>
        <div className='levelDown'></div>
      </div>
    </>
  );
}
