import React, { useState, useEffect, useMemo } from 'react';
import { usePlanetsData } from "../../hooks/usePlanetsData";
import { ListPlanets } from "./components/ListPlanets";
import { LoadingComponent } from "../../components/LoadingComponent";
import { IPlanet } from '../../models/IStarWarsData';
import { useInView } from 'react-intersection-observer';

type PlanetWithImage = IPlanet & { imageUrl?: string };

export const Planets: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [debouncedNameFilter, setDebouncedNameFilter] = useState<string>('');

  const { data: planets, loading, error, hasMore, loadMore } = usePlanetsData<IPlanet>('planets', debouncedNameFilter);
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

 
  const filteredPlanets = useMemo(() => {
    return planets.filter((planet: PlanetWithImage) => {
      return !nameFilter || planet.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
  }, [planets, nameFilter]);

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
      </form>

      <div className="mt-8">
        {error && <p className="text-red-500">Error: {error}</p>}
        <ListPlanets planets={filteredPlanets} />
        {loading && <LoadingComponent />}
        <div ref={ref} style={{ height: '20px' }}></div>
      </div>
    </div>
  );
};
