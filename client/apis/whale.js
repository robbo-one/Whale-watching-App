import request from 'superagent'

const baseUrl = '/api/v1/whales/'

export function getSpeciesAndLocations(){
    return request
    .get(baseUrl)
    .then(res => {
        // console.log(res.body)
        return res.body
    })
}

export function getSpecies() {
    return request
    .get(baseUrl)
    .then(res => {
        // (res.body.species)
        return res.body.species
    })
}

export function getLocations() {
    return request
    .get(baseUrl)
    .then(res => {
        // console.log(res.body.locations)
        return res.body.locations
    })
}

