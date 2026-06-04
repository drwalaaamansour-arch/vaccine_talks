#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const hcpDir = path.join(root, 'src/app/hcp');
const dataDir = path.join(root, 'src/data/hcp-vaccine-pages');

const skip = new Set(['hepatitis-a']);

for (const file of fs.readdirSync(dataDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const slug = file.replace('.ts', '');
  if (skip.has(slug)) continue;
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const exportMatch = content.match(/export const (\w+):/);
  if (!exportMatch) continue;
  const exportName = exportMatch[1];
  const pagePath = path.join(hcpDir, slug, 'page.tsx');
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.writeFileSync(
    pagePath,
    `import HcpVaccineProductPage from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import { ${exportName} } from '@/data/hcp-vaccine-pages/${slug}';

export default function HcpVaccine${exportName.replace(/Page$/, '')}Route() {
  return <HcpVaccineProductPage {...${exportName}} />;
}
`,
  );
  console.log('Updated', slug);
}
