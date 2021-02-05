import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsInLocation } from '../apis/whale-hotline'
const Locations = (props) => {

    const latLong = props.match.params.latLong

    const [sightings, updateSightings] = useState([])

    const getSightings = () => {
        getSightingsInLocation(latLong)
            .then(sightings => {
                updateSightings(sightings)
            })
    }

    useEffect(() => {
        getSightings()
    }, [])

    return (
        <div className='locations-background'>
            <h1>Locations</h1>
            <ul>
                {sightings.map(sightings => {
                    return <li className='locations-spacing' key={sightings.id}><strong>Species: </strong> {sightings.species}<br></br>
                        <strong>Description</strong> {sightings.description}<br></br>
                        <strong>Quantity</strong> {sightings.quantity} <br></br>
                        <strong>Location:</strong> {sightings.location} <br></br><br></br></li>

                })}
            </ul>
        </div>
    )
}

export default Locations