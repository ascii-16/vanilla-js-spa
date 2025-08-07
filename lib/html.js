export async function fetchFileContent(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${path}`);
  }
  return await res.text();
}

export function compileHbs(source, data) {
  const template = Handlebars.compile(source);
  const html = template(data);
  return html;
}