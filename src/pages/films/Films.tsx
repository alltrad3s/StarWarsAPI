import React, { useState, useEffect, useMemo } from 'react';
import { useFilmsData } from "../../hooks/useFilmsData";
import { ListFilms } from "./components/ListFilms";
import { LoadingComponent } from "../../components/LoadingComponent";
import { IFilm } from '../../models/IStarWarsData';
import { useInView } from 'react-intersection-observer';

type FilmWithImage = IFilm & { imageUrl?: string };

export const Films: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [debouncedNameFilter, setDebouncedNameFilter] = useState<string>('');

  const { data: films, loading, error, hasMore, loadMore } = useFilmsData<IFilm>('films', debouncedNameFilter);
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

  const filteredFilms = useMemo(() => {
    return films.filter((film: FilmWithImage) => {
      return !nameFilter || film.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
  }, [films, nameFilter]);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Star Wars Films</h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">Explore films from the Star Wars universe.</p>
      
      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Movie Name</label>
          <input
            type="text"
            id="name"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter movie name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
      </form>

      <div className="mt-8">
        {error && <p className="text-red-500">Error: {error}</p>}
        <ListFilms films={filteredFilms} />
        {loading && <LoadingComponent />}
        <div ref={ref} style={{ height: '20px' }}></div>
      </div>
    </div>
  );
};
