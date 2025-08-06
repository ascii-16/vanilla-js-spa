import { routes } from './routes.js';
import { App } from './constant.js';

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

export async function fetchHtml(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${path}`);
  }
  return await res.text();
}

export function removeCSS(href = null, id = null) {
  if (!href && !id) {
    console.error('Provide href or Id');
    return;
  }

  if (link) {
    const link = [...document.head.querySelectorAll('link')].find(link => link.href.endsWith(href));
    if (!link) {
      console.error(`Link not found for href: ${link}`);
      return;
    }

    link.remove();
  } else if (id) {
    const el = document.getElementById(id);
    if (!el) {
      console.error(`Link not found for id: ${link}`);
      return;
    }

    el.remove();
  }
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
      const html = await fetchHtml(page);
      document.title = route.title;
      App.innerHTML = html;
      removeExistingRouteCSS();

      if (route.css) {
        const css = `pages/${hash}/${route.css}`;
        loadCSS(css);
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
