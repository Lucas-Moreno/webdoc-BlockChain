import React, { useState } from 'react';
import './Home.css';
import Cryptomonnaies from './Cryptomonnaies/Cryptomonnaies';
import Echanges from './Echanges/Echanges';
import Revolutions from './Revolution/Revolution';
import Technologies from './Technologie/Technologie';

const Home = () => {
  const [crypto, setCrypto] = useState(true);
  const [echange, setEchange] = useState(false);
  const [revo, setRevo] = useState(false);
  const [techno, setTechno] = useState(false);

  const Crypto = () => {
    setCrypto(true);
    setEchange(false);
    setRevo(false);
    setTechno(false);
  };

  const Echange = () => {
    setEchange(true);
    setCrypto(false);
    setRevo(false);
    setTechno(false);
  };

  const Revolution = () => {
    setRevo(true);
    setCrypto(false);
    setTechno(false);
    setEchange(false);
  };

  const Technologie = () => {
    setTechno(true);
    setCrypto(false);
    setEchange(false);
    setRevo(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="home">
          {crypto ? <Cryptomonnaies /> : null}
          {echange ? <Echanges /> : null}
          {revo ? <Revolutions /> : null}
          {techno ? <Technologies /> : null}
          <button onClick={Crypto}>Crypto</button>
          <button onClick={Echange}>Echanges</button>
          <button onClick={Revolution}>Revo</button>
          <button onClick={Technologie}>Techno</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
