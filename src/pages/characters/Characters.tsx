import React, { useState, useEffect, useMemo } from 'react';
import { useStarWarsData } from "../../hooks/useStarWarsData";
import { ListCharacters } from "./components/ListCharacters";
import { LoadingComponent } from "../../components/LoadingComponent";
import { IPerson, IFilm, IPlanet, IStarship } from '../../models/IStarWarsData';
import { useInView } from 'react-intersection-observer';
import { useFavorites } from '../../context/FavoritesContext';

type PersonWithImage = IPerson & { imageUrl?: string };

export const Characters: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [debouncedNameFilter, setDebouncedNameFilter] = useState<string>('');
  const [filmFilter, setFilmFilter] = useState<string>('');
  const [planetFilter, setPlanetFilter] = useState<string>('');
  const [starshipFilter, setStarshipFilter] = useState<string>('');

  const { data: characters, loading, error, hasMore, loadMore } = useStarWarsData<IPerson>('people', debouncedNameFilter);
  const { data: films } = useStarWarsData<IFilm>('films');
  const { data: planets } = useStarWarsData<IPlanet>('planets');
  const { data: starships } = useStarWarsData<IStarship>('starships');

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedNameFilter(nameFilter), 300);
    return () => clearTimeout(timer);
  }, [nameFilter]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore, loadMore]);

  const filteredCharacters = useMemo(() => {
    return characters.filter((character: PersonWithImage) => {
      return (!filmFilter || character.films.includes(filmFilter)) &&
             (!planetFilter || character.homeworld === planetFilter) &&
             (!starshipFilter || character.starships.includes(starshipFilter));
    });
  }, [characters, filmFilter, planetFilter, starshipFilter]);

  const handleToggleFavorite = (character: IPerson) => {
    if (isFavorite(character)) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Star Wars Characters</h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">Explore characters from the Star Wars universe.</p>
       <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Character Name</label>
          <input
            type="text"
            id="name"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter character name"
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
          <label htmlFor="planet" className="block text-sm font-medium leading-6 text-gray-900">Filter by Planet</label>
          <select
            id="planet"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setPlanetFilter(e.target.value)}
            value={planetFilter}
          >
            <option value="">All Planets</option>
            {planets.map((planet: IPlanet) => (
              <option key={planet.url} value={planet.url}>{planet.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="starship" className="block text-sm font-medium leading-6 text-gray-900">Filter by Starship</label>
          <select
            id="starship"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setStarshipFilter(e.target.value)}
            value={starshipFilter}
          >
            <option value="">All Starships</option>
            {starships.map((starship: IStarship) => (
              <option key={starship.url} value={starship.url}>{starship.name}</option>
            ))}
          </select>
        </div>
      </form>
      
      <div className="mt-8">
        {error && <p className="text-red-500">Error: {error}</p>}
        <ListCharacters 
          characters={filteredCharacters} 
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
        {loading && <LoadingComponent />}
        <div ref={ref} style={{ height: '20px' }}></div>
      </div>
    </div>
  );
};