import { routes } from '../routes.js';
import { App } from './constant.js';
import { fetchHtml } from './html.js';
import { loadRouteCSS, removeExistingRouteCSS } from './css.js';

export async function router() {
  const hash = location.hash.slice(1) || 'home';
  const route = routes[hash];

  if (route) {
    try {
      const page = `pages/${hash}/${route.template}`;
      const html = await fetchHtml(page);
      document.title = route.title;
      App.innerHTML = html;
      removeExistingRouteCSS();

      if (route.css) {
        const css = `pages/${hash}/${route.css}`;
        loadRouteCSS(css);
      }
    } catch (e) {
      App.innerHTML = `<h1>Error route ${hash}</h1>`;
      console.error(e);
    }
  } else {
    try {
      const html = await fetchHtml('404.html');
      App.innerHTML = html;
    } catch (e) {
      console.warn('404 page not found. Defaulting to default 404 template')
      App.innerHTML = `<h1>404</h1><p>Page not found</p>`;
    }
  }
}