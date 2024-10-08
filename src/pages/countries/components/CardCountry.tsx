import React from 'react';
import { ICountry } from "../../../models/ICountry";

interface ICountryProps {
  country: ICountry
}

export const CardCountry: React.FC<ICountryProps> = ({ country }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{country.name.common}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{country.region}</p>
      <p className="mt-1 text-sm text-gray-500">{country.capital}</p>
      <p className="mt-1 text-sm text-gray-500">
        {country.languages ? Object.values(country.languages)[0] : 'N/A'}
      </p>
    </div>
  );
};