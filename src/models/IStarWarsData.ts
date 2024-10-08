// models/IStarWarsData.ts

export interface IStarWarsData {
    name: string;
    url: string;
}

export interface IPerson extends IStarWarsData {
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;  // URL of the homeworld
    films: string[];    // Array of film URLs
    species: string[];  // Array of species URLs
    vehicles: string[]; // Array of vehicle URLs
    starships: string[]; // Array of starship URLs
}

export interface IFilm extends IStarWarsData {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
}

export interface IPlanet extends IStarWarsData {
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
}

export interface IStarship extends IStarWarsData {
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    films: string[];
    pilots: string[];
}