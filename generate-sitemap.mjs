import fs from 'fs';
import { VILLES_GIRONDE } from './src/data/villes.js';

const BASE_URL = 'https://dsmultiservices.fr';

// Vos pages fixes du site
const staticPages = [
  '',
  '/services',
  '/contact',
  '/pourquoi-nous',
  '/avis',
  '/faq',
  '/galerie',
  '/mentions-legales'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// 1. Injection des pages fixes
staticPages.forEach(page => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${BASE_URL}${page}</loc>\n`;
  sitemap += `    <changefreq>weekly</changefreq>\n`;
  sitemap += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
  sitemap += `  </url>\n`;
});

// 2. Injection automatique de toutes les villes de Gironde (Programmatic SEO)
VILLES_GIRONDE.forEach(ville => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${BASE_URL}/elagage/${ville.slug}</loc>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>0.7</priority>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>`;

// Écriture du fichier sitemap.xml dans le dossier public
fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log(`✅ Sitemap généré avec succès : ${staticPages.length + VILLES_GIRONDE.length} URLs intégrées !`);