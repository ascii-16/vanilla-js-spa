export async function fetchHtml(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${path}`);
  }
  return await res.text();
}