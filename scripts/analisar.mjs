#!/usr/bin/env node
// Uso: PSI_API_KEY=... node scripts/analisar.mjs <url> <slug-do-cliente>
// Consulta a API do PageSpeed Insights (mobile e desktop) e salva
// os JSONs + um resumo em clientes/<slug>/pagespeed/.
// Chave gratuita: https://developers.google.com/speed/docs/insights/v5/get-started
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [url, slug] = process.argv.slice(2);
if (!url || !slug) {
  console.error('Uso: PSI_API_KEY=... node scripts/analisar.mjs <url> <slug-do-cliente>');
  process.exit(1);
}

const dir = join('clientes', slug, 'pagespeed');
mkdirSync(dir, { recursive: true });

async function rodar(strategy) {
  const q = new URLSearchParams({ url, strategy, locale: 'pt_BR' });
  for (const c of ['performance', 'accessibility', 'best-practices', 'seo']) q.append('category', c);
  if (process.env.PSI_API_KEY) q.set('key', process.env.PSI_API_KEY);
  const res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q}`);
  const body = await res.json();
  if (!res.ok) throw new Error(`PageSpeed ${res.status}: ${body.error?.message}`);
  writeFileSync(join(dir, `${strategy}.json`), JSON.stringify(body, null, 2));
  return body;
}

const nota = (c) => (c?.score == null ? '—' : Math.round(c.score * 100));
const metricas = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'];

let md = `# PageSpeed — ${url}\n\nGerado em ${new Date().toISOString().slice(0, 10)}\n`;
for (const strategy of ['mobile', 'desktop']) {
  const r = (await rodar(strategy)).lighthouseResult;
  const c = r.categories;
  md += `\n## ${strategy}\n\n| Performance | Acessibilidade | Boas práticas | SEO |\n|---|---|---|---|\n`;
  md += `| ${nota(c.performance)} | ${nota(c.accessibility)} | ${nota(c['best-practices'])} | ${nota(c.seo)} |\n\n**Métricas:**\n\n`;
  for (const id of metricas) {
    const a = r.audits[id];
    if (a) md += `- ${a.title}: ${a.displayValue ?? '—'}\n`;
  }
  const falhas = Object.values(r.audits)
    .filter((a) => a.score !== null && a.score < 0.9 && ['numeric', 'binary', 'metricSavings'].includes(a.scoreDisplayMode) && !metricas.includes(a.id))
    .sort((a, b) => a.score - b.score)
    .slice(0, 15);
  md += `\n**Principais problemas:**\n\n`;
  for (const a of falhas) md += `- ${a.title}${a.displayValue ? ` (${a.displayValue})` : ''}\n`;
}

writeFileSync(join(dir, 'resumo.md'), md);
console.log(md);
