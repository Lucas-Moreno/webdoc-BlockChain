import React, { useEffect } from 'react';
import { homeAnimations } from './Home';
import Cryptomonnaies from './Cryptomonnaies/Cryptomonnaies';
import Echanges from './Echanges/Echanges';
import Revolutions from './Revolution/Revolution';
import Technologies from './Technologie/Technologie';
import Slider from 'react-slick';
import HomeAnimation from './Animation/Animation.jsx';
import Scroll from './Scroll/Scroll.jsx';

const Home = () => {
  // Settings Carousel
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  useEffect(() => {
    // Loader Animation
    homeAnimations();
  });

  return (
    <div className="wrapper wrapper--home">
      <div className="container">
        <div className="home">
          <div className="home__carousel">
            <h1 className="slide__title">BlockChain</h1>
            <Slider {...settings}>
              <Cryptomonnaies />
              <Echanges />
              <Revolutions />
              <Technologies />
            </Slider>
          </div>
          <div className="home__illustration">
            <HomeAnimation />
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Home;
