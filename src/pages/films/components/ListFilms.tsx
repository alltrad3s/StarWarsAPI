import React from 'react';
import { IFilm } from '../../../models/IStarWarsData';

type FilmWithImage = IFilm & { imageUrl?: string };

interface ListFilmsProps {
  films: FilmWithImage[];
}

export const ListFilms: React.FC<ListFilmsProps> = ({ films }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {films.map((film) => (
        <li key={film.url} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={film.imageUrl} alt={film.name} />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{film.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Director</dt>
              <dd className="text-gray-500 text-sm">Director: {film.director}</dd>
              <dt className="sr-only">episode id</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">
                  {film.episode_id}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};
