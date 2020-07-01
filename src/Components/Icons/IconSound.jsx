import React, { useState } from "react";
import Sound from "react-sound";
import soundfile from "../../Assets/audio/test.wav";

const IconSound = () => {
  const [swapSound, setSwapSound] = useState(Sound.status.PLAYING);

  const toggle = () => {
    if (swapSound === Sound.status.PLAYING) {
      setSwapSound(Sound.status.STOPPED);
    } else {
      setSwapSound(Sound.status.PLAYING);
    }
  };

  return (
    <div className="icon icon--sound" title="Modifier le son">
      <Sound url={soundfile} playStatus={swapSound} loop={true} />
      <div className="contents" onClick={toggle}>
        <span
          dangerouslySetInnerHTML={{
            __html: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.01894 9.44401H0V20.6249H5.01894L14.507 27.6624C14.507 27.6624 16.2507 29.1193 16.2507 27.6137C16.2507 26.1038 16.2507 3.61004 16.2507 2.23652C16.2507 1.05457 14.7159 2.20946 14.7159 2.20946L5.01894 9.44401Z" fill="#186FE1"/>
<path d="M21.6537 7.2616C21.1548 6.76371 20.3473 6.76371 19.8484 7.2616C19.3494 7.76165 19.3494 8.57235 19.8484 9.06483C21.4914 10.7111 22.3053 12.8477 22.3086 15.0005C22.3042 17.1577 21.4903 19.3073 19.8484 20.9481C19.3494 21.445 19.3494 22.2589 19.8484 22.7579C20.0973 23.0068 20.4231 23.1302 20.7532 23.1302C21.079 23.1302 21.4048 23.0079 21.6537 22.7579C23.7936 20.6159 24.863 17.8028 24.8608 15.0005C24.863 12.2015 23.7903 9.39711 21.6537 7.2616Z" fill="#186FE1"/>
<path d="M25.1182 3.24109C24.6127 2.73995 23.8075 2.73995 23.3042 3.24109C22.8095 3.74222 22.8095 4.54859 23.3042 5.04972C26.0631 7.8076 27.441 11.4021 27.4431 15.014C27.441 18.6421 26.0685 22.2594 23.3042 25.0259C22.8074 25.5249 22.8095 26.3323 23.3042 26.8335C23.5553 27.0813 23.8854 27.2058 24.2112 27.2058C24.5391 27.2058 24.8682 27.0813 25.1182 26.8335C28.3718 23.5669 29.9997 19.2861 29.9997 15.014C29.9997 10.756 28.361 6.49036 25.1182 3.24109Z" fill="#186FE1"/>
</svg>
`
          }}
        />
      </div>
    </div>
  );
};

export default IconSound;
