import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { IPerson, IFilm, IPlanet, IStarship } from '../../models/IStarWarsData';

type FavoriteItem = IPerson | IFilm | IPlanet | IStarship;

const FavoritesList: React.FC<{ items: FavoriteItem[], onToggleFavorite: (item: FavoriteItem) => void }> = ({ items, onToggleFavorite }) => (
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {items.map((item) => (
      <li key={item.url} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="flex-1 flex flex-col p-8">
          <h3 className="mt-6 text-gray-900 text-sm font-medium">{item.name}</h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dd className="text-gray-500 text-sm">{getItemDetails(item)}</dd>
          </dl>
          <button
            onClick={() => onToggleFavorite(item)}
            className="mt-4 px-4 py-2 border rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Remove from Favorites
          </button>
        </div>
      </li>
    ))}
  </ul>
);

const getItemDetails = (item: FavoriteItem): string => {
  if ('gender' in item) return `Gender: ${item.gender}`;
  if ('episode_id' in item) return `Episode: ${item.episode_id}`;
  if ('climate' in item) return `Climate: ${item.climate}`;
  if ('model' in item) return `Model: ${item.model}`;
  return '';
};

export const Favorites: React.FC = () => {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item)) {
      removeFavorite(item);
    }
  };

  const favoriteCharacters = favorites.filter((item): item is IPerson => 'gender' in item);
  const favoriteFilms = favorites.filter((item): item is IFilm => 'episode_id' in item);
  const favoritePlanets = favorites.filter((item): item is IPlanet => 'climate' in item);
  const favoriteStarships = favorites.filter((item): item is IStarship => 'model' in item);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Your Favorites</h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">Manage your favorite Star Wars items here.</p>
      
      {favorites.length === 0 ? (
        <p className="mt-4 text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <div className="mt-6 space-y-8">
          <section>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Characters</h3>
            {favoriteCharacters.length > 0 ? (
              <FavoritesList items={favoriteCharacters} onToggleFavorite={handleToggleFavorite} />
            ) : (
              <p className="text-sm text-gray-500">No favorite characters yet.</p>
            )}
          </section>

          <section>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Films</h3>
            {favoriteFilms.length > 0 ? (
              <FavoritesList items={favoriteFilms} onToggleFavorite={handleToggleFavorite} />
            ) : (
              <p className="text-sm text-gray-500">No favorite films yet.</p>
            )}
          </section>

          <section>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Planets</h3>
            {favoritePlanets.length > 0 ? (
              <FavoritesList items={favoritePlanets} onToggleFavorite={handleToggleFavorite} />
            ) : (
              <p className="text-sm text-gray-500">No favorite planets yet.</p>
            )}
          </section>

          <section>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Starships</h3>
            {favoriteStarships.length > 0 ? (
              <FavoritesList items={favoriteStarships} onToggleFavorite={handleToggleFavorite} />
            ) : (
              <p className="text-sm text-gray-500">No favorite starships yet.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
};