import React from 'react';
import { IPlanet } from '../../../models/IStarWarsData';

type PlanetWithImage = IPlanet & { imageUrl?: string };

interface ListPlanetsProps {
  planets: PlanetWithImage[];
}

export const ListPlanets: React.FC<ListPlanetsProps> = ({ planets }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {planets.map((planet) => (
        <li key={planet.url} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={planet.imageUrl} alt={planet.name} />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{planet.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Population</dt>
              <dd className="text-gray-500 text-sm">Population: {planet.population}</dd>
              <dt className="sr-only">Climate</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">
                  {planet.climate}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};
