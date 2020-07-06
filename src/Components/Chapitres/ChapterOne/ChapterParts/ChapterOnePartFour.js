import $ from 'jquery';

export const ChapterOnePartFourScript = (inView) => {
  console.log('HELLO PART IV ' + inView);

  if (inView) {
    const container = $('.part--four');
    let containerOffsetLeft = container.offset().left;

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });
  }
};
