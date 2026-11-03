import { useState, useEffect } from 'react';
import { VILLES_GIRONDE, VILLE_PAR_DEFAUT, slugify } from '../data/villes';

export function useUserLocation() {
  const [ville, setVille] = useState(VILLE_PAR_DEFAUT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.city) {
          const userSlug = slugify(data.city);
          const match = VILLES_GIRONDE.find((v) => v.slug === userSlug);
          
          if (match) {
            setVille(match);
          } else {
            // Si la ville n'est pas répertoriée, on adapte dynamiquement le nom et le code postal
            setVille({
              name: data.city,
              cp: data.postal || '33000',
              slug: userSlug
            });
          }
        }
      })
      .catch(() => {
        setVille(VILLE_PAR_DEFAUT);
      })
      .finally(() => setLoading(false));
  }, []);

  return { ville, loading };
}