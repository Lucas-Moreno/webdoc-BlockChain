import $ from 'jquery';

export const Chapters = (_) => {
  /* Horizontal Scroll Sticky Header & Icons */
  // Init position Sticky on reloading page
  $(document).ready(function () {
    $('.chapter-header').css('left', $(this).scrollLeft());
    $('.icons').css('left', $(this).scrollLeft() - 25);
    $('.chapter-navigation').css('left', $(this).scrollLeft());
  });
  // Update position on scroll
  $(window).scroll(function () {
    $('.chapter-header').css('left', $(this).scrollLeft());
    $('.icons').css('left', $(this).scrollLeft() - 25);
    $('.chapter-navigation').css('left', $(this).scrollLeft());
  });

  /* Burger Menu &  Nav opening */
  const menuBurger = document.querySelector('.menu__burger');
  const chapterNavigation = document.querySelector('.chapter-navigation');

  menuBurger.addEventListener('click', function () {
    chapterNavigation.classList.toggle('is-open');
  });

  /* Quiz Opening */
  const startQuiz = document.querySelector('.button--quiz');
  const containerQuiz = document.querySelector('.container-quiz');
  const closeButtons = document.querySelectorAll('.quiz__close');

  startQuiz.addEventListener('click', function () {
    containerQuiz.classList.add('is-open');
  });

  for (let i = 0; i < closeButtons.length; i++) {
    const closeButton = closeButtons[i];

    closeButton.addEventListener('click', function () {
      containerQuiz.classList.remove('is-open');
    });
  }
};
