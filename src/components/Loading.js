import React from "react";
import P1 from "../IMG/P1.png";

export default function Loading(props) {
  const { error } = props;

  const loading = () => {
    if (error.code) {
      return (
        <div className='main'>
          <div className='loadImg'></div>
          <div className='loadTxt'>
            {error.code + ": " + error.message + " !!!"}
          </div>
          <h3 style={{ marginBottom: 0 }}>Please Reload the page.</h3>
          <h3>Check the network connection or try again later.</h3>
        </div>
      );
    } else {
      return (
        <div className='main'>
          <div className='loadImg' style={{ paddingBottom: "20px" }}>
            <img
              src='https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif'
              alt=''
            />
            <img src={P1} alt='' className='ball' />
          </div>
          <div className='loadTxt'>
            <span>loading.</span>
            <span className='blinkf'>.</span>
            <span className='blinks'>.</span>
          </div>
        </div>
      );
    }
  };
  return <>{loading()}</>;
}
