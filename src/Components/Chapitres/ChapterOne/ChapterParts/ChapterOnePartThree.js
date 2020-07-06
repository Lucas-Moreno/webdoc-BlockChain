import $ from 'jquery';

export const ChapterOnePartThreeScript = (inView) => {
  console.log('HELLO PART III ' + inView);

  if (inView) {
    const container = $('.part--three');
    let containerOffsetLeft = container.offset().left;

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });
  }
};
