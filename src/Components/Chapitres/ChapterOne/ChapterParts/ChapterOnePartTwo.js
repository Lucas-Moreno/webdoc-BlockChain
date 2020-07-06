import $ from 'jquery';

export const ChapterOnePartTwoScript = (inView) => {
  console.log('HELLO PART II ' + inView);

  if (inView) {
    // Scroll Auto in full part
    const container = $('.part--two');
    let containerOffsetLeft = container.offset().left;

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });
  }
};
