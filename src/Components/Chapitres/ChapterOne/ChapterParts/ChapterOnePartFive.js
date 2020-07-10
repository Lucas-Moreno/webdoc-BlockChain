import $ from 'jquery';

export const ChapterOnePartFiveScript = (inView) => {
  if (inView) {
    const container = $('.part--five');
    let containerOffsetLeft = container.offset().left;

    window.scrollTo({
      left: containerOffsetLeft,
      behavior: 'smooth',
    });

    /* Progression Chapter Parts */
    const stepButtons = document.querySelectorAll('.progression__step');
    for (let i = 0; i < stepButtons.length; i++) {
      const step = stepButtons[i];
      if (i === 4) {
        step.classList.add('is-active');
      } else {
        step.classList.remove('is-active');
      }
    }
  }
};
