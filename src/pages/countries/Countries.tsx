import { useState } from 'react';
import { useCountriesData } from "../../hooks/useCountriesData";
import { ListCountries } from "./components/ListCountries";
import { useRegions } from "../../hooks/useRegions";
import { LoadingComponent } from "./components/LoadingComponent";

export const Countries = () => {
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const countries = useCountriesData(region, name);
  const uniqueRegions = useRegions();

  return (
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Countries FSJ23</h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">Explore countries from around the world.</p>
        <form className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Filter by Region</label>
            <select
              id="region"
              name="region"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">All</option>
              {uniqueRegions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter country name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
        <div className="mt-8">
          {countries.length > 0 ? <ListCountries countries={countries} /> : <LoadingComponent />}
        </div>
      </div>
  );
};