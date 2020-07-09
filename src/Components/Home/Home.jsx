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
                text="Les cryptomonnaies, et notamment le Bitcoin, ont été le premier support
        d’application de la blockchain. Des monnaies propulsées par un projet,
        décentralisées, dont le cours ne dépend pas du marché, mais bien des
        acteurs porteurs du projet."
              />
              <SliderHome
                title="TECHNOLOGIES"
                text="Fût un temps, l’Homme créait le téléphone, pour communiquer plus facilement, puis ce fût le tour d’internet, qui a changé notre façon de vivre et de voir le monde. Aujourd’hui, la blockchain est sur le point de bouleverser à nouveau notre façon de vivre."
              />
              <SliderHome
                title="ÉCHANGES"
                text="Depuis l’aube de l’humanité, l’Homme a toujours effectué des échanges, avec le troc, puis l'échange de pièces de divers métaux, et aujourd’hui, nous pouvons échanger de l’argent avec nos cartes bancaires, nos téléphones. À cette époque, où il devient difficile de savoir d’où vient l’argent, la blockchain permet une transparence à 100% sur les échanges que nous effectuons."
              />
              <SliderHome
                title="RÉVOLUTION"
                text="Le jour où la blockchain ne sera plus un sujet d'interrogation, de fantasme du DarkNet, mais bien la norme, notre société s’en verra profondément modifiée. Les questions que l’on peut se poser aujourd’hui, sur la provenance réelle d’un steak haché par exemple, ou bien si l’assurance va rapidement vous verser une indemnité après avoir été inondé, ne seront plus qu’un lointain souvenir."
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
