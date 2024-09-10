import React, { useState } from 'react';
import './App.css';

const CakeComponent = ({ name, message }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const blowCandles = () => {
    setCandlesBlown(true);
  };

  return (
    <div className="cake-container">
      <div className={`cake ${candlesBlown ? 'candles-blown-out' : ''}`}>
        <div className="candle">
          <div className="flame"></div>
        </div>
        <div className="candle">
          <div className="flame"></div>
        </div>
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>
      {!candlesBlown && (
        <button onClick={blowCandles}>Mumlara Üfle</button>
      )}
      {candlesBlown && (
        <div className="message">
          <h3>Doğum Günün Kutlu Olsun, {name}!</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default CakeComponent;
