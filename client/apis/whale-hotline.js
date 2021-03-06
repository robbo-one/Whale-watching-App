import request from 'superagent'

const baseUrl = 'https://hotline.whalemuseum.org/api.json'

export function getSightingsOfSpecies(species){
  return request
  .get(baseUrl)
  .query({species : species})
  .query({limit: 5})
  .then(res => {
    return res.body
  })
}

export function getSightingsInLocation(location){
  return request
  .get(baseUrl)
  .query({near : location})
  .query({limit: 5})
  .query({radius : 0.1})
  .then(res => {
    return res.body
  })
}