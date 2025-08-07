import { router, navigateTo, highlightActiveLink } from './lib/router.js';

function main() {
  window.addEventListener('popstate', router);
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(e.target.href);
        highlightActiveLink();
      }
    });

    router();
    highlightActiveLink();
  });
}

main();
