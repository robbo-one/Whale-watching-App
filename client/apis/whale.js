import request from 'superagent'

const baseUrl = '/api/v1/whales/'

export function getSpeciesAndLocations(){
    return request
    .get(baseUrl)
    .then(res => {
        console.log(res.body)
        return res.body
    })
}
