import { routes } from '../routes.js';
import { App } from './constant.js';
import { fetchHtml } from './html.js';
import { injectRouteStyleFromFile, removeRouteStyles } from './css.js';

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

// TODO: change to dir based routing
export async function router() {
  const path = location.pathname;
  const route = routes.find((route) => route.path === path);

  if (route) {
    const { component } = route;
    try {
      const page = `pages/${route.name}/${component.template}`;
      const html = await fetchHtml(page);
      document.title = route.title;
      App.innerHTML = html;
      removeRouteStyles();

      if (component.css) {
        const cssPath = `pages/${route.name}/${component.css}`;
        injectRouteStyleFromFile(cssPath);
      }
    } catch (e) {
      App.innerHTML = `<h1>Error fetching route ${route.name}</h1>`;
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

export function highlightActiveLink() {
  const hash = location.hash || '#home';
  document.querySelectorAll('.glass-nav a').forEach(a => {
    if (a.getAttribute('href') === hash) {
      a.style.color = '#60a5fa';
    } else {
      a.style.color = 'rgba(255, 255, 255, 0.85)';
    }
  });
}