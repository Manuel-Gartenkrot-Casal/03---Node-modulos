import countries from 'country-json/src/country-by-name.json' with { type: "json" };
import countriesPopulation from 'country-json/src/country-by-population.json' with { type: "json" };

function obtenerPais(nombrePais) {
    const pais = countries.find(p => p.country === nombrePais);
    const population = countriesPopulation.find(p => p.country === nombrePais);
    
    if (pais && population) {
        console.log(`País: ${pais.country}`);
        console.log(`Población: ${population.population.toLocaleString()}`);
    } else {
        console.log("País no encontrado");
    }
}

obtenerPais("Argentina");