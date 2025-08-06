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

export function loadRouteCSS(href) {
  removeExistingRouteCSS();
  loadCSS(href, 'route-style');
}