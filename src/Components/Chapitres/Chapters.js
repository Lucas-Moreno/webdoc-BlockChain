import $ from 'jquery';

export const Chapters = (_) => {
  /* Horizontal Scroll Sticky Header & Icons */
  // Init position Sticky on reloading page
  $(document).ready(function () {
    $('.chapter-header').css('left', $(this).scrollLeft());
    $('.icons').css('left', $(this).scrollLeft() - 25);
  });
  // Update position on scroll
  $(window).scroll(function () {
    $('.chapter-header').css('left', $(this).scrollLeft());
    $('.icons').css('left', $(this).scrollLeft() - 25);
  });

  /* Burger Menu &  Nav opening */
  const menuBurger = document.querySelector('.menu__burger');
  const chapterNavigation = document.querySelector('.chapter-navigation');

  menuBurger.addEventListener('click', function () {
    chapterNavigation.classList.toggle('is-open')
  })
};
