 import { getData } from 'country-json/src/country-by-name.json';
 
 function obtenerPais(nombrePais){
   
    const pais = getData.find(p => p.country === nombrePais);
}
//npm i country-json
obtenerPais("Argentina");