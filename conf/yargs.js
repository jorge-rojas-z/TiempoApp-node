const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            description: 'Nombre de la ciudad a saber del clima',
            demand: true
        }
    }).help()
    .argv;

module.exports = { argv }