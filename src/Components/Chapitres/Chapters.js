import $ from 'jquery';

export const Chapters = (_) => {
  /* Horizontal Scroll Sticky Header & Icons */
  $(document).ready(function () {
    $('.chapter-header').css('left', $(this).scrollLeft());
    $('.icons').css('left', $(this).scrollLeft() - 25);
  });
  // Update position on scroll
  $(window).scroll(function () {
    $('.chapter-header').css('left', $(this).scrollLeft());
    $('.icons').css('left', $(this).scrollLeft() - 25);
  });
};
