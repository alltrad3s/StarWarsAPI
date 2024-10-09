import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { IPerson } from '../models/IStarWarsData';

interface FavoritesContextType {
  favorites: IPerson[];
  addFavorite: (character: IPerson) => void;
  removeFavorite: (character: IPerson) => void;
  isFavorite: (character: IPerson) => boolean;
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
  const [favorites, setFavorites] = useState<IPerson[]>([]);
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

  const addFavorite = (character: IPerson) => {
    setFavorites((prev) => {
      const newFavorites = [...prev, character];
      if (user) {
        localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(newFavorites));
      }
      return newFavorites;
    });
  };

  const removeFavorite = (character: IPerson) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((fav) => fav.url !== character.url);
      if (user) {
        localStorage.setItem(`favorites_${user.uid}`, JSON.stringify(newFavorites));
      }
      return newFavorites;
    });
  };

  const isFavorite = (character: IPerson) => {
    return favorites.some((fav) => fav.url === character.url);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};