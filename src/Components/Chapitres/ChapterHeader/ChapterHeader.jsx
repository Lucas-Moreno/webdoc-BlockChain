import React from 'react';
import Logo from '../../../Assets/images/logo.png';
import { Link } from 'react-router-dom';
import ChapterTitles from '../ChapterTitles/ChapterTitles';
import ChapterMenu from '../ChapterMenu/ChapterMenu';

const ChapterHeader = () => {
  return (
    <header className="chapter-header">
      <div
        className="chapter-header__flaque"
        dangerouslySetInnerHTML={{
          __html: `<svg width="429" height="370" viewBox="0 0 429 370" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M204.289 -124.389C209.883 -67.1729 233.682 -48.4929 261.002 -17.7869C288.322 12.9191 318.583 55.8833 305.394 79.3081C292.626 102.9 236.671 107.519 197.045 117.688C157.26 128.256 133.54 143.808 92.5191 185.776C51.4984 227.744 -7.40272 296.36 -29.7824 281.478C-52.3205 266.995 -38.0741 169.581 -81.6034 115.809C-125.712 62.2705 -227.176 52.5419 -265.451 17.4921C-303.568 -17.9571 -278.759 -79.2941 -240.213 -123.63C-201.667 -167.965 -149.224 -195.699 -102.627 -227.136C-56.0295 -258.574 -15.1191 -294.115 39.218 -319.249C92.9754 -344.15 159.58 -358.411 185.944 -317.917C212.73 -277.255 199.117 -181.438 204.289 -124.389Z" fill="#186FE1"/>
<path d="M204.289 -124.389C209.883 -67.1729 233.682 -48.4929 261.002 -17.7869C288.322 12.9191 318.583 55.8833 305.394 79.3081C292.626 102.9 236.671 107.519 197.045 117.688C157.26 128.256 133.54 143.808 92.5191 185.776C51.4984 227.744 -7.40272 296.36 -29.7824 281.478C-52.3205 266.995 -38.0741 169.581 -81.6034 115.809C-125.712 62.2705 -227.176 52.5419 -265.451 17.4921C-303.568 -17.9571 -278.759 -79.2941 -240.213 -123.63C-201.667 -167.965 -149.224 -195.699 -102.627 -227.136C-56.0295 -258.574 -15.1191 -294.115 39.218 -319.249C92.9754 -344.15 159.58 -358.411 185.944 -317.917C212.73 -277.255 199.117 -181.438 204.289 -124.389Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="-403" y1="-142" x2="455.5" y2="207" gradientUnits="userSpaceOnUse">
<stop offset="0.396106" stop-color="#3DFFFF"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

`,
        }}
      ></div>
      <div className="chapter-header__container">
        <Link to="/">
          <div className="container__logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="container__titles">
          <ChapterTitles />
        </div>
        <div className="container__menu">
          <ChapterMenu />
        </div>
      </div>
    </header>
  );
};

export default ChapterHeader;
