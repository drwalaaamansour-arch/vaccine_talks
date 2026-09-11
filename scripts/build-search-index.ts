import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildFullSearchIndex, getSearchIndexStats } from '../src/lib/site-search/build-index';

const outputPath = resolve(process.cwd(), 'src/lib/site-search/search-index.generated.json');
const documents = buildFullSearchIndex();
const stats = getSearchIndexStats(documents);

writeFileSync(outputPath, JSON.stringify(documents, null, 0));

console.log(`Generated ${documents.length} searchable documents across ${stats.publicRoutesIndexed} routes.`);
console.log(`Output: ${outputPath}`);
