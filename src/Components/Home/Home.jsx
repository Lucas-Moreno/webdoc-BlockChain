import React, { useEffect, useState } from "react";
import { homeAnimations } from "./Home";
import SliderHome from "./SliderHome/SliderHome";
import Slider from "react-slick";
import HomeAnimation from "./Animation/Animation.jsx";
import Scroll from "./Scroll/Scroll.jsx";
import axios from "axios";

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
    // Loader Animation
  });

  const url = "https://api-blockchain-backend.herokuapp.com/api/homes";
  const [contents, setContents] = useState("");

  useEffect(() => {
    homeAnimations();
    axios
      .get(url)
      .then(res => {
        setContents(res.data["hydra:member"]);
      })
      .catch(err => {});
  }, [contents]);

  return (
    <div className="wrapper wrapper--home">
      <div className="container">
        <div className="home">
          <div className="home__carousel">
            <h1 className="slide__title">BlockChain</h1>
            <Slider {...settings}>
              {Object.keys(contents).map((text, index) => {
                return (
                  <SliderHome
                    key={index}
                    title={contents[index].subTitle}
                    text={contents[index].content}
                  />
                );
              })}
              {console.log()}
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
