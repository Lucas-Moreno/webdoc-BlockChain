import $ from 'jquery';

export const ChapterOnePartFiveScript = (inView) => {
  if (inView) {
    const container = $('.part--five');
    let containerOffsetLeft = container.offset().left;

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });
  }
};
