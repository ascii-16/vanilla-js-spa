import { routes } from '../routes.js';
import { App } from './constant.js';
import { fetchFileContent, compileHbs } from './html.js';
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
      removeRouteStyles();
      if (component.css) {
        const cssPath = `pages/${route.name}/${component.css}`;
        injectRouteStyleFromFile(cssPath);
      }

      let html;
      const templateSplits = component.template.split('.');
      const templateExt = templateSplits[templateSplits.length - 1];
      const page = `pages/${route.name}/${component.template}`;

      if (templateExt === 'hbs') {
        const source = await fetchFileContent(page);
        const { getData } = await import(`/pages/${route.name}/${component.client}`);
        App.innerHTML = await fetchFileContent(`/pages/${route.name}/loading.html`)
        const data = await getData();
        html = compileHbs(source, data);
      } else {
        html = await fetchFileContent(page);
      }

      document.title = route.title;
      App.innerHTML = html;
    } catch (e) {
      App.innerHTML = `<h1>Error fetching route ${route.name}</h1>`;
      console.error(e);
    }
  } else {
    try {
      const html = await fetchFileContent('404.html');
      App.innerHTML = html;
    } catch (e) {
      console.warn('404 page not found. Defaulting to default 404 template')
      App.innerHTML = `<h1>404</h1><p>Page not found</p>`;
    }
  }
}

export function highlightActiveLink() {
  const path = location.pathname;
  document.querySelectorAll('.glass-nav a').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.style.color = '#60a5fa';
    } else {
      a.style.color = 'rgba(255, 255, 255, 0.85)';
    }
  });
}