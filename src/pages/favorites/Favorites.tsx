import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { ListCharacters } from '../characters/components/ListCharacters';
import { IPerson, IFilm, IPlanet, IStarship } from '../../models/IStarWarsData';

export const Favorites: React.FC = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = (character: IPerson) => {
    if (isFavorite(character)) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Your Favorite Characters</h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">Manage your favorite Star Wars characters here.</p>
      
      {favorites.length === 0 ? (
        <p className="mt-4 text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <ListCharacters 
          characters={favorites} 
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
};