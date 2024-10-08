import React from 'react';
import { IPerson } from '../../../models/IStarWarsData';

type PersonWithImage = IPerson & { imageUrl?: string };

interface ListCharactersProps {
  characters: PersonWithImage[];
}

export const ListCharacters: React.FC<ListCharactersProps> = ({ characters }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters.map((character) => (
        <li key={character.url} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={character.imageUrl} alt={character.name} />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{character.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Birth Year</dt>
              <dd className="text-gray-500 text-sm">Born: {character.birth_year}</dd>
              <dt className="sr-only">Gender</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {character.gender}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};