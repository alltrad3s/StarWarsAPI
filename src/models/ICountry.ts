//Modelo es la representacion de un dato a manipular/guardar
export interface ICountry{
    name: { common:string },
    flags: { svg:string, png:string },
    capital: string[],
    region: string,
    languages?: { eng?:string }
}
/*
    REPRESENTAR EL OBJECTO

    country
        name.common
        flags.png
        capital
        region
        languages()
*/