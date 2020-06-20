const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const opciones = require('./conf/yargs.js').argv;

//lugar.getLugarLatLng(opciones.direccion).then(console.log);

//clima.getTiempo(-26.36667, -70.05)
//    .then(console.log)
//    .catch(console.log);


const getInfo = async(direccion) => {
    // manejamos todo dentro de un trycatch para hacer manejo de errores
    try {
        const ubicacion = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getTiempo(ubicacion.lat, ubicacion.lng);

        return `Control de tiempo: \n -> La temperatura de la ciudad ${direccion} es de ${temperatura}°C.`;

    } catch (error) {
        return `Fallo: No se pudo determinar el clima de ${direccion}.`;
    }

}

getInfo(opciones.direccion)
    .then(console.log)
    .catch(console.log);