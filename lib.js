import { routes } from './routes.js';

export function loadCSS(href, id = 'route-style') {
  const isExists = [...document.head.querySelectorAll('link')].some(link => link.href.endsWith(href));
  if (isExists) {
    return;
  }

  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

export function removeExistingRouteCSS() {
  const existingLink = document.getElementById('route-style');
  if (existingLink) existingLink.remove();
}

export async function router() {
  const hash = location.hash.slice(1) || 'home';
  const route = routes[hash];

  if (route) {
    try {
      const page = `pages/${hash}/${route.template}`;
      const res = await fetch(page);
      const html = await res.text();
      document.title = route.title;
      document.getElementById('app').innerHTML = html;

      removeExistingRouteCSS();
      if (route.css) {
        const css = `pages/${hash}/${route.css}`;
        loadCSS(css);
      }
    } catch (e) {
      document.getElementById('app').innerHTML = `<h1>Error route ${hash}</h1>`;
      console.error(e);
    }
  } else {
    document.getElementById('app').innerHTML = `<h1>404</h1><p>Page not found</p>`;
  }
}
