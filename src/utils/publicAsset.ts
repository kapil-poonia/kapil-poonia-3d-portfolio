/** Resolve paths under `public/` for GitHub Pages (subpath base). */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${p}`;
}
