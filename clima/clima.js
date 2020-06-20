const axios = require('axios');

const getTiempo = async(lat, lng) => {
    const tiempo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1eed8c17f3f4968795ca67715e22cb3c&units=metric`);

    if (tiempo.data.main.length === 0) {
        throw new Error(`no existe informacion para el lugar.`);
    }

    return tiempo.data.main.temp;
}

module.exports = { getTiempo }