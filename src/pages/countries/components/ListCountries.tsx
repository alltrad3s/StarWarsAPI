import React from 'react';
import { ICountry } from "../../../models/ICountry";
import { CardCountry } from "./CardCountry";

interface ICountriesProps {
  countries: ICountry[]
}

export const ListCountries: React.FC<ICountriesProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {countries.map((country, index) => (
        <CardCountry key={index} country={country} />
      ))}
    </div>
  );
};