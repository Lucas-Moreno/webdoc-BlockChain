import SmoothScroll from 'smooth-scroll';

export const smoothScroll = () => {
  new SmoothScroll('a[href*="#"]');
};
