import { useEffect, useState } from "react";
import { ICountry } from "../models/ICountry";

// eslint-disable-next-line react-refresh/only-export-components
const APIuri = "https://restcountries.com/v3.1/all"

export const useCountriesData = (region:string, name:string) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
  
    const getCountries = async () => {
        // Obtenemos en response la respuesta de la API con fetch
        const response:Response = await fetch(APIuri);
        //Pasamos en data, los datos de esa respuesta, transformados en un array de objetos
        const data:ICountry[] = await response.json();   
        //console.log(data);
        //console.log(response);
        //Almacenamos los datos de la respuesta en nuestro estado 
        setCountries(data);

        let filteredCountries = data;

        if (region){
            filteredCountries = filteredCountries.filter((country) => country.region === region)
        }    

        if (name){
            filteredCountries = filteredCountries.filter((country) => country.name.common === name)
        }
        setCountries(filteredCountries);
    }

    useEffect(() => {
        getCountries();
    },[region,name])

  return countries;
}