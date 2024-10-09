import React from 'react';
import { IStarship } from '../../../models/IStarWarsData';

type StarshipWithImage = IStarship & { imageUrl?: string };

interface ListStarshipsProps {
  starships: StarshipWithImage[];
}

export const ListStarships: React.FC<ListStarshipsProps> = ({ starships }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {starships.map((starship) => (
        <li key={starship.url} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={starship.imageUrl} alt={starship.name} />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{starship.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Passengers</dt>
              <dd className="text-gray-500 text-sm">Passengers: {starship.passengers}</dd>
              <dt className="sr-only">Model</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">
                  {starship.model}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};
