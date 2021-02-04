import request from 'superagent'

const baseUrl = 'http://hotline.whalemuseum.org/api.json'

export function getSightingsOfSpecies(species){
  return request
  .get(baseUrl)
  .query({species : species})
  .then(res => {
    return res.body
  })
}