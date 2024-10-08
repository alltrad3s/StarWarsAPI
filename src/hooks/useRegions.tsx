import { useCountriesData } from "./useCountriesData";

export const useRegions = () => {
    let countries = useCountriesData("");
    
    const uniqueRegions = [...new Set(countries.map(country => country.region))].filter(Boolean);

    return uniqueRegions;
}
