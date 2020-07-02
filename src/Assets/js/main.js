import { ready } from './helpers/document-ready';

import { loaderHome } from './home/loader-home.js';

ready(function () {
  if (document.querySelector('.wrapper--home') !== null) {
    loaderHome();
  }
});
