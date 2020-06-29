import React from "react";
import Header from "../Header/Header";
import Cryptomonnaies from "./Cryptomonnaies/Cryptomonnaies";
import Echanges from "./Echanges/Echanges";
import Revolutions from "./Revolution/Revolution";
import Technologies from "./Technologie/Technologie";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <div className="home">
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="contents">
            <div className="carousel">
              <h1 className="slide__title">BlockChain</h1>
              <Slider {...settings}>
                <Cryptomonnaies />
                <Echanges />
                <Revolutions />
                <Technologies />
              </Slider>
            </div>
            <div className="illustration">ILLUSTRATION CSS</div>
          </div>
          <div className="illustration"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
