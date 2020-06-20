const axios = require('axios');


// axios usa promesas, y eso quiere decir que se use Asyn y Await
// recordar que una función async regresa a fuerza una promesa
const getLugarLatLng = async(direccion) => {

    // reemplaza caracteres por aquellos seguros de usar en una URI
    const encodeUrl = encodeURI(direccion);
    //console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=CL&types=CITY&namePrefix=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '83b99926d5mshc5df2896a4c7aa5p13bfe4jsn2a0e9b43a2ce' }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`no hay resultados para ${direccion}`);
    }

    //acceso al unico objeto que trae
    const data = resp.data.data[0];
    //console.log(data);
    const dir = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    // magia del ES6
    return {
        dir,
        lat,
        lng
    }
}


module.exports = { getLugarLatLng }