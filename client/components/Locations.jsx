import React, { useState, useEffect } from 'react'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsInLocation } from '../apis/whale-hotline'
const Locations = () => {

    const [sightings, updateSightings] = useState([])

    const getSightings = () => {
        getSightingsInLocation("48.3740,-123.7356")
            .then(sightings => {
                updateSightings(sightings)
            })
    }

    useEffect(() => {
        getSightings()
    }, [])

    return (
        <>
            <p>Locations</p>
            <ul>
                {sightings.map(sightings => {
                    return <li key={sightings.id}><strong>Species: </strong> {sightings.species}<br></br>
                    <strong>Description</strong> {sightings.description}<br></br>
                    <strong>Quantity</strong> {sightings.quantity} <br></br>
                    <strong>Location:</strong> {sightings.location} <br></br><br></br></li>
                })}
            </ul>
        </>
    )
}

export default Locations