const connection = require('./connection')

function getSpecies(db = connection) {
    return db('species')
    .select()
}

function getLocations(db = connection) {
    return db('locations')
    .select()
}

module.exports = {
    getSpecies,
    getLocations
}