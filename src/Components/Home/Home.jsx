import React, { useState } from 'react';
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
    <div className="wrapper wrapper--home">
      <div className="container">
        <div className="contents">
          <div className="carousel">
            {crypto ? <Cryptomonnaies /> : null}
            {echange ? <Echanges /> : null}
            {revo ? <Revolutions /> : null}
            {techno ? <Technologies /> : null}
            <div className="bullets">
              <span className="bullet" onClick={Crypto}></span>
              <span className="bullet" onClick={Echange}></span>
              <span className="bullet" onClick={Revolution}></span>
              <span className="bullet" onClick={Technologie}></span>
            </div>
          </div>
          <div className="illustration">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
