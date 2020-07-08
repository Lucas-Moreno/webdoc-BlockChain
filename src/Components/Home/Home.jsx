import React, { useEffect } from "react";
import { homeAnimations } from "./Home";
import SliderHome from "./SliderHome/SliderHome";
import Slider from "react-slick";
import HomeAnimation from "./Animation/Animation.jsx";
import Scroll from "./Scroll/Scroll.jsx";

const Home = () => {
  // Settings Carousel
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  useEffect(() => {
    homeAnimations();
  });

  return (
    <div className="wrapper wrapper--home">
      <div className="container">
        <div className="home">
          <div className="home__carousel">
            <h1 className="slide__title">BlockChain</h1>
            <Slider {...settings}>
              <SliderHome
                title="cryptomonnaies"
                text="il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain."
              />
              <SliderHome
                title="TECHNOLOGIES"
                text="il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain."
              />
              <SliderHome
                title="ÉCHANGES"
                text="il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain."
              />
              <SliderHome
                title="RÉVOLUTION"
                text="il est temps d'identifier et de hiérarchiser les différents domaines d'intérêt dans les organisations publiques et privées qui peuvent bénéficier de la technologie de la blockchain et éduquer le marché sur le potentiel de la blockchain."
              />
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
