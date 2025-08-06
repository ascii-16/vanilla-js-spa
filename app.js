import { router } from './lib.js';

function main() {
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
}

main();
