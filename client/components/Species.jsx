import React, { useState, useEffect } from 'react'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsOfSpecies } from '../apis/whale-hotline'

const Species = () => {

    const [sightings, getSightings] = useState([])

    const updateSpecies = () => {
        getSightingsOfSpecies("orca")
        .then(sightings => {
            getSightings(sightings)
        })
    }

    useEffect(() => {
        updateSpecies()
    }, [])


    return (
        <>
           <p>Species</p> 
           <ul>
               {sightings.map(sightings => {
                   return <li><strong>Description:</strong> {sightings.description} <br></br> <strong>Location:</strong> {sightings.location}</li>
               })}
           </ul>
        </>
    )
  }
  
  export default Species