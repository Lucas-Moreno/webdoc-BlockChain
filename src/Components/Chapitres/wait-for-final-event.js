// Fire event after window resize complete

// https://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed

const waitForFinalEvent = (function() {
  var timers = {};

  return function(callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }

    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }

    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

export { waitForFinalEvent };
