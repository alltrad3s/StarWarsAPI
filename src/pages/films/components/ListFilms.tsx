import React from 'react';
import { IFilm } from '../../../models/IStarWarsData';

type FilmWithImage = IFilm & { imageUrl?: string };

interface ListFilmsProps {
  films: FilmWithImage[];
  onToggleFavorite: (film: IFilm) => void;
  isFavorite: (film: IFilm) => boolean;
}

export const ListFilms: React.FC<ListFilmsProps> = ({ films, onToggleFavorite, isFavorite }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {films.map((film) => (
        <li key={film.url} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-48 flex-shrink-0 mx-auto rounded" src={film.imageUrl} alt={film.title} />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{film.title}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Release Date</dt>
              <dd className="text-gray-500 text-sm">Released: {film.release_date}</dd>
              <dt className="sr-only">Director</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  Director: {film.director}
                </span>
              </dd>
            </dl>
            <button
              onClick={() => onToggleFavorite(film)}
              className={`mt-4 px-4 py-2 border rounded-md ${
                isFavorite(film) ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {isFavorite(film) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};