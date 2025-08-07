export function removeCSS(href = null, id = null) {
  if (!href && !id) {
    console.error('removeCSS(): Provide href or Id');
    return;
  }

  if (link) {
    const link = [...document.head.querySelectorAll('link')].find(link => link.href.endsWith(href));
    if (!link) {
      console.error(`removeCSS(): Link not found for href: ${link}`);
      return;
    }

    link.remove();
  } else if (id) {
    const el = document.getElementById(id);
    if (!el) {
      console.error(`removeCSS(): Link not found for id: ${link}`);
      return;
    }

    el.remove();
  }
}

export function removeExistingRouteCSS() {
  const existingLink = document.getElementById('route-style');
  if (existingLink) existingLink.remove();
}

export function loadCSS(href, id) {
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

export async function injectRouteStyleFromFile(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`Failed to fetch CSS from ${path}`);
    }
    const css = await res.text();
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-route-style', 'true');
    document.head.appendChild(style);
  } catch (e) {
    console.warn(`[CSS] ${e.message}`);
  }
}


export function removeRouteStyles() {
  const existing = document.querySelector('style[data-route-style]');
  if (existing) {
    existing.remove();
  }

}

export function loadRouteCSS(href) {
  removeExistingRouteCSS();
  loadCSS(href, 'route-style');
}