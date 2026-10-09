import countries from 'country-json/src/country-by-name.json' with { type: "json" };
import countriesPopulation from 'country-json/src/country-by-population.json' with { type: "json" };

export function obtenerPais(nombrePais) {
    const pais = countries.find(p => p.country === nombrePais);
    const population = countriesPopulation.find(p => p.country === nombrePais);
    
    if (pais && population) {
        return {
            pais: pais.country,
            poblacion: population.population
        };
    } else {
        return null;
    }
}