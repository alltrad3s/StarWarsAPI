import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { IPerson, IPlanet, IFilm, IStarship } from '../models/IStarWarsData';

type FavoriteItem = IPerson | IPlanet | IFilm | IStarship;

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (item: FavoriteItem) => void;
  isFavorite: (item: FavoriteItem) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const storedFavorites = localStorage.getItem(`favorites_${user.uid}`);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } else {
      setFavorites([]);
    }
  }, [user]);

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      if (prev.some(fav => fav.url === item.url)) {
        return prev; // Item already in favorites, don't add it again
      }
      const newFavorites = [...prev, item];
      if (user) {
        localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(newFavorites));
      }
      return newFavorites;
    });
  };

  const removeFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((fav) => fav.url !== item.url);
      if (user) {
        localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(newFavorites));
      }
      return newFavorites;
    });
  };

  const isFavorite = (item: FavoriteItem) => {
    return favorites.some((fav) => fav.url === item.url);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};