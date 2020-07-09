import React, { useEffect } from 'react';
import { homeAnimations } from './Home';
import SliderHome from './SliderHome/SliderHome';
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
                text="Fût un temps, l’Homme créait le téléphone, dans le but de faciliter la communication, puis ce fût le tour d’internet, qui à changé notre façon de vivre et également celle de percevoir notre monde. Aujourd’hui, la blockchain est sur le point de bouleverser à nouveau notre façon de vivre."
              />
              <SliderHome
                title="ÉCHANGES"
                text="Depuis l’aube de l’humanité, l’Homme a toujours effectué des échanges, comme le troc, puis les pièces de divers métaux sont devenues la norme, et aujourd’hui, nous pouvons échanger de l’argent avec nos cartes bancaires, nos téléphones. À cette époque, il devient difficile de connaitre la provenance de l'argent, la blockchain permet une total transparence et une tracabilité sur les échanges que nous effectuons."
              />
              <SliderHome
                title="RÉVOLUTION"
                text="Le jour où la blockchain ne sera plus un sujet d'interrogation, de fantasme du darknet, mais bien la norme, notre société s’en verra profondément modifiée. Les questions que l’on peut se poser aujourd’hui, sur la réelle provenance d’un steak haché ou encore de certains médicaments, si l’assurance va rapidement vous verser une indemnité lors d'un préjudice ou d'un incident, ne seront plus qu’un lointain souvenir."
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
