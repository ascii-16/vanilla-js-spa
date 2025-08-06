import { router, highlightActiveLink } from './lib/router.js';

function main() {
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  window.addEventListener('hashchange', highlightActiveLink);
  window.addEventListener('load', highlightActiveLink);
}

main();
