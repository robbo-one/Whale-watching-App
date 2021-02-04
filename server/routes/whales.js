const express = require('express')
const router = express.Router()

const whaleDb = require('../db/whales')

router.get('/', (req, res) => {
    whaleDb.getSpecies()
    .then(species => {
        whaleDb.getLocations()
        .then(locations => {
            res.json({species : species, locations: locations})
        })
    })
})

module.exports = router