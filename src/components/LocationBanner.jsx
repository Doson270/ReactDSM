import React from 'react';
import { useUserLocation } from '../hooks/useUserLocation';

export default function LocationBanner() {
  const { ville, loading } = useUserLocation();

  if (loading) return null;

  return (
    <div className="bg-emerald-800 text-white py-2 px-4 text-center text-sm font-medium">
      📍 Intervention rapide pour vos travaux d'élagage et d'abattage à <strong>{ville.name}</strong> ({ville.cp}) et ses environs.
    </div>
  );
}