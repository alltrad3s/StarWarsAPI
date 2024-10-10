import React, { useState, useEffect, useMemo } from 'react';
import { usePlanetsData } from "../../hooks/usePlanetsData";
import { useStarWarsData } from "../../hooks/useStarWarsData";
import { ListPlanets } from "./components/ListPlanets";
import { LoadingComponent } from "../../components/LoadingComponent";
import { IPlanet, IFilm } from '../../models/IStarWarsData';
import { useInView } from 'react-intersection-observer';
import { useFavorites } from '../../context/FavoritesContext';

type PlanetWithImage = IPlanet & { imageUrl?: string };

export const Planets: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [filmFilter, setFilmFilter] = useState<string>('');
  const [characterFilter, setCharacterFilter] = useState<string>('');
  const [debouncedNameFilter, setDebouncedNameFilter] = useState<string>('');

  const { data: planets, loading, error, hasMore, loadMore } = usePlanetsData<IPlanet>('planets', debouncedNameFilter);
  const { data: films } = useStarWarsData<IFilm>('films');
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedNameFilter(nameFilter), 300);
    return () => clearTimeout(timer);
  }, [nameFilter]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore, loadMore]);

  const filteredPlanets = useMemo(() => {
    return planets.filter((planet: PlanetWithImage) => {
      const nameMatch = !nameFilter || planet.name.toLowerCase().includes(nameFilter.toLowerCase());
      const filmMatch = !filmFilter || planet.films.includes(filmFilter);
      const characterMatch = !characterFilter || 
        planet.residents.some(resident => 
          resident.toLowerCase().includes(characterFilter.toLowerCase())
        );
      return nameMatch && filmMatch && characterMatch;
    });
  }, [planets, nameFilter, filmFilter, characterFilter]);

  const handleToggleFavorite = (planet: IPlanet) => {
    if (isFavorite(planet)) {
      removeFavorite(planet);
    } else {
      addFavorite(planet);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Star Wars Planets</h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">Explore planets from the Star Wars universe.</p>
      
      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Planet Name</label>
          <input
            type="text"
            id="name"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter planet name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="film" className="block text-sm font-medium leading-6 text-gray-900">Filter by Film</label>
          <select
            id="film"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setFilmFilter(e.target.value)}
            value={filmFilter}
          >
            <option value="">All Films</option>
            {films.map((film: IFilm) => (
              <option key={film.url} value={film.url}>{film.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="character" className="block text-sm font-medium leading-6 text-gray-900">Filter by Character</label>
          <input
            type="text"
            id="character"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter character name"
            value={characterFilter}
            onChange={(e) => setCharacterFilter(e.target.value)}
          />
        </div>
      </form>

      <div className="mt-8">
        {error && <p className="text-red-500">Error: {error}</p>}
        <ListPlanets 
          planets={filteredPlanets} 
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
        {loading && <LoadingComponent />}
        <div ref={ref} style={{ height: '20px' }}></div>
      </div>
    </div>
  );
};