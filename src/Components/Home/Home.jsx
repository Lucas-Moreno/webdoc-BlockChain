import React from "react";
import Cryptomonnaies from "./Cryptomonnaies/Cryptomonnaies";
import Echanges from "./Echanges/Echanges";
import Revolutions from "./Revolution/Revolution";
import Technologies from "./Technologie/Technologie";

const Home = () => {
  return (
    <div className="wrapper wrapper--home">
      <div className="container">
        <div className="contents">
          <div className="carousel">
            <Cryptomonnaies />
            <Echanges />
            <Revolutions />
            <Technologies />
          </div>
          <div className="illustration"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
