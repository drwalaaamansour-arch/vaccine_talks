import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'src/app');

const EXCLUDED_PREFIXES = ['/api', '/auth', '/copy', '/_not-found'];
const EXCLUDED_EXACT = new Set(['']);

const DYNAMIC_ROUTES: Record<string, string[]> = {
  '/non-hcp/special-cases-vaccines': [
    'preterm-infants',
    'pregnancy-and-breastfeeding',
    'post-cochlear-implant',
    'splenectomy',
    'during-and-after-chemotherapy',
    'post-bone-marrow-transplant',
    'immune-disease-patients',
    'immunosuppressive-medications',
  ],
};

function shouldExclude(route: string): boolean {
  if (!route || EXCLUDED_EXACT.has(route)) return true;
  return EXCLUDED_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
}

function collectStaticRoutes(dir: string, base = ''): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'api') continue;

    const fullPath = path.join(dir, entry.name);
    const routePath = `${base}/${entry.name}`.replace(/\/+/g, '/');

    if (entry.isDirectory()) {
      if (entry.name.startsWith('[') && entry.name.endsWith(']')) {
        const parentRoute = base || '/';
        const slugs = DYNAMIC_ROUTES[parentRoute];
        if (slugs) {
          for (const slug of slugs) {
            const dynamicRoute = `${parentRoute}/${slug}`.replace(/\/+/g, '/');
            if (!shouldExclude(dynamicRoute)) routes.push(dynamicRoute);
          }
        }
        continue;
      }

      routes.push(...collectStaticRoutes(fullPath, routePath));
      continue;
    }

    if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      const route = base || '/';
      if (!shouldExclude(route)) routes.push(route);
    }
  }

  return routes;
}

export function getPublicRoutes(): string[] {
  const routes = collectStaticRoutes(APP_DIR);
  return [...new Set(routes)].sort();
}
