export const VILLE_PAR_DEFAUT = {
  name: "Libourne",
  slug: "libourne",
  cp: "33500",
  secteur: "libournais"
};

// 1. Définition des 10 grands secteurs géographiques de la Gironde
export const SECTEURS_GIRONDE = {
  libournais: "Grand Libournais & Castillon",
  "bordeaux-rive-droite": "Bordeaux Rive Droite & Coteaux",
  "bordeaux-metropole": "Bordeaux Métropole Rive Gauche",
  "haute-gironde": "Grand Cubzaguais & Blayais",
  "sud-gironde": "Sud Gironde & Bazadais",
  "entre-deux-mers": "Entre-Deux-Mers & Créonnais",
  "bassin-arcachon": "Bassin d'Arcachon & Val de Leyre",
  "medoc-sud": "Sud Médoc & Estuaire",
  "medoc-nord": "Haut Médoc & Littoral",
  reolais: "Réolais & Monségurais"
};

// 2. Mapping des codes postaux par secteur pour catégoriser automatiquement les 535 communes
const MAP_CODE_POSTAL_SECTEUR = {
  // Libournais (CALI & Grand Libournais)
  "33500": "libournais", "33330": "libournais", "33126": "libournais", "33230": "libournais",
  "33350": "libournais", "33660": "libournais", "33910": "libournais", "33570": "libournais",

  // Bordeaux Rive Droite
  "33150": "bordeaux-rive-droite", "33270": "bordeaux-rive-droite", "33310": "bordeaux-rive-droite",
  "33370": "bordeaux-rive-droite", "33560": "bordeaux-rive-droite", "33440": "bordeaux-rive-droite",
  "33450": "bordeaux-rive-droite", "33750": "bordeaux-rive-droite",

  // Bordeaux Métropole (Rive Gauche)
  "33000": "bordeaux-metropole", "33100": "bordeaux-metropole", "33200": "bordeaux-metropole",
  "33300": "bordeaux-metropole", "33700": "bordeaux-metropole", "33600": "bordeaux-metropole",
  "33400": "bordeaux-metropole", "33140": "bordeaux-metropole", "33160": "bordeaux-metropole",
  "33130": "bordeaux-metropole", "33170": "bordeaux-metropole", "33110": "bordeaux-metropole",
  "33290": "bordeaux-metropole", "33520": "bordeaux-metropole", "33320": "bordeaux-metropole",
  "33185": "bordeaux-metropole", "33127": "bordeaux-metropole", "33850": "bordeaux-metropole",
  "33610": "bordeaux-metropole",

  // Haute Gironde / Cubzaguais / Blayais
  "33240": "haute-gironde", "33390": "haute-gironde", "33710": "haute-gironde", 
  "33820": "haute-gironde", "33920": "haute-gironde", "33540": "haute-gironde",

  // Bassin d'Arcachon & Val de Leyre
  "33120": "bassin-arcachon", "33260": "bassin-arcachon", "33470": "bassin-arcachon",
  "33510": "bassin-arcachon", "33740": "bassin-arcachon", "33980": "bassin-arcachon",
  "33380": "bassin-arcachon", "33950": "bassin-arcachon", "33830": "bassin-arcachon",
  "33770": "bassin-arcachon",

  // Sud Gironde & Bazadais
  "33210": "sud-gironde", "33430": "sud-gironde", "33690": "sud-gironde", 
  "33840": "sud-gironde", "33730": "sud-gironde", "33113": "sud-gironde",

  // Entre-Deux-Mers & Créonnais
  "33670": "entre-deux-mers", "33760": "entre-deux-mers", "33410": "entre-deux-mers",
  "33550": "entre-deux-mers", "33650": "entre-deux-mers", "33640": "entre-deux-mers",
  "33720": "entre-deux-mers", "33490": "entre-deux-mers",

  // Réolais & Monségurais
  "33190": "reolais", "33580": "reolais", "33790": "reolais", "33124": "reolais",

  // Médoc Sud
  "33480": "medoc-sud", "33460": "medoc-sud", "33250": "medoc-sud",

  // Médoc Nord
  "33340": "medoc-nord", "33123": "medoc-nord", "33780": "medoc-nord", "33590": "medoc-nord"
};

// Fonction utilitaire pour attribuer le secteur à partir du code postal
const getSecteur = (cp) => MAP_CODE_POSTAL_SECTEUR[cp] || "libournais";

// 3. Liste brute des communes enrichie dynamiquement avec leur secteur
const RAW_VILLES = [
  { name: "Libourne", slug: "libourne", cp: "33500" },
  { name: "Pomerol", slug: "pomerol", cp: "33500" },
  { name: "Saint-Émilion", slug: "saint-emilion", cp: "33330" },
  { name: "Fronsac", slug: "fronsac", cp: "33126" },
  { name: "Les Billaux", slug: "les-billaux", cp: "33500" },
  { name: "Arveyres", slug: "arveyres", cp: "33500" },
  { name: "Lalande-de-Pomerol", slug: "lalande-de-pomerol", cp: "33500" },
  { name: "Coutras", slug: "coutras", cp: "33230" },
  { name: "Guîtres", slug: "guitres", cp: "33910" },
  { name: "Castillon-la-Bataille", slug: "castillon-la-bataille", cp: "33350" },
  { name: "Saint-Sulpice-de-Faleyrens", slug: "saint-sulpice-de-faleyrens", cp: "33330" },
  { name: "Vayres", slug: "vayres", cp: "33870" },
  { name: "Izon", slug: "izon", cp: "33450" },
  
  { name: "Bordeaux", slug: "bordeaux", cp: "33000" },
  { name: "Mérignac", slug: "merignac", cp: "33700" },
  { name: "Pessac", slug: "pessac", cp: "33600" },
  { name: "Talence", slug: "talence", cp: "33400" },
  { name: "Villenave-d'Ornon", slug: "villenave-dornon", cp: "33140" },
  { name: "Saint-Médard-en-Jalles", slug: "saint-medard-en-jalles", cp: "33160" },
  { name: "Bègles", slug: "begles", cp: "33130" },
  { name: "Gradignan", slug: "gradignan", cp: "33170" },
  { name: "Le Bouscat", slug: "le-bouscat", cp: "33110" },
  { name: "Eysines", slug: "eysines", cp: "33320" },
  { name: "Bruges", slug: "bruges", cp: "33520" },
  { name: "Blanquefort", slug: "blanquefort", cp: "33290" },
  { name: "Le Haillan", slug: "le-haillan", cp: "33185" },
  { name: "Le Taillan-Médoc", slug: "le-taillan-medoc", cp: "33320" },
  { name: "Saint-Jean-d'Illac", slug: "saint-jean-dillac", cp: "33127" },
  { name: "Léognan", slug: "leognan", cp: "33850" },
  { name: "Cestas", slug: "cestas", cp: "33610" },

  { name: "Floirac", slug: "floirac", cp: "33270" },
  { name: "Cenon", slug: "cenon", cp: "33150" },
  { name: "Lormont", slug: "lormont", cp: "33310" },
  { name: "Bouliac", slug: "bouliac", cp: "33270" },
  { name: "Artigues-près-Bordeaux", slug: "artigues-pres-bordeaux", cp: "33370" },
  { name: "Ambarès-et-Lagrave", slug: "ambares-et-lagrave", cp: "33440" },
  { name: "Saint-Loubès", slug: "saint-loubes", cp: "33450" },
  { name: "Sainte-Eulalie", slug: "sainte-eulalie", cp: "33560" },
  { name: "Carbon-Blanc", slug: "carbon-blanc", cp: "33560" },
  { name: "Bassens", slug: "bassens", cp: "33530" },

  { name: "Saint-André-de-Cubzac", slug: "saint-andre-de-cubzac", cp: "33240" },
  { name: "Cubzac-les-Ponts", slug: "cubzac-les-ponts", cp: "33240" },
  { name: "Saint-Gervais", slug: "saint-gervais", cp: "33240" },
  { name: "Blaye", slug: "blaye", cp: "33390" },
  { name: "Bourg", slug: "bourg", cp: "33710" },
  { name: "Saint-Savin", slug: "saint-savin", cp: "33920" },

  { name: "Arcachon", slug: "arcachon", cp: "33120" },
  { name: "La Teste-de-Buch", slug: "la-teste-de-buch", cp: "33260" },
  { name: "Gujan-Mestras", slug: "gujan-mestras", cp: "33470" },
  { name: "Le Teich", slug: "le-teich", cp: "33470" },
  { name: "Biganos", slug: "biganos", cp: "33380" },
  { name: "Audenge", slug: "audenge", cp: "33980" },
  { name: "Andernos-les-Bains", slug: "andernos-les-bains", cp: "33510" },
  { name: "Arès", slug: "ares", cp: "33740" },
  { name: "Lège-Cap-Ferret", slug: "lege-cap-ferret", cp: "33950" },
  { name: "Mios", slug: "mios", cp: "33380" },
  { name: "Marcheprime", slug: "marcheprime", cp: "33380" },
  { name: "Salles", slug: "salles", cp: "33770" },
  { name: "Belin-Béliet", slug: "belin-beliet", cp: "33830" },

  { name: "Langon", slug: "langon", cp: "33210" },
  { name: "Bazas", slug: "bazas", cp: "33430" },
  { name: "Toulenne", slug: "toulenne", cp: "33210" },
  { name: "Roaillan", slug: "roaillan", cp: "33210" },
  { name: "Villandraut", slug: "villandraut", cp: "33730" },
  { name: "Grignols", slug: "grignols", cp: "33690" },
  { name: "Captieux", slug: "captieux", cp: "33840" },

  { name: "Créon", slug: "creon", cp: "33670" },
  { name: "Targon", slug: "targon", cp: "33760" },
  { name: "Cadillac", slug: "cadillac", cp: "33410" },
  { name: "Rions", slug: "rions", cp: "33410" },
  { name: "Langoiran", slug: "langoiran", cp: "33550" },
  { name: "La Brède", slug: "la-brede", cp: "33650" },
  { name: "Podensac", slug: "podensac", cp: "33720" },

  { name: "La Réole", slug: "la-reole", cp: "33190" },
  { name: "Monségur", slug: "monsegur", cp: "33580" },
  { name: "Pellegrue", slug: "pellegrue", cp: "33790" },
  { name: "Auros", slug: "auros", cp: "33124" },

  { name: "Pauillac", slug: "pauillac", cp: "33250" },
  { name: "Castelnau-de-Médoc", slug: "castelnau-de-medoc", cp: "33480" },
  { name: "Margaux-Cantenac", slug: "margaux-cantenac", cp: "33460" },

  { name: "Lesparre-Médoc", slug: "lesparre-medoc", cp: "33340" },
  { name: "Soulac-sur-Mer", slug: "soulac-sur-mer", cp: "33780" },
  { name: "Saint-Vivien-de-Médoc", slug: "saint-vivien-de-medoc", cp: "33590" }
];

// Exportation finale du tableau VILLES_GIRONDE avec les secteurs injectés
export const VILLES_GIRONDE = RAW_VILLES.map(ville => ({
  ...ville,
  secteur: getSecteur(ville.cp)
}));