import React, { useState, useEffect } from 'react'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsOfSpecies } from '../apis/whale-hotline'

const Species = (props) => {
    // console.log(props)
    const name = props.match.params.name
    console.log(name)


    const [sightings, getSightings] = useState([])

    const updateSpecies = () => {
        getSightingsOfSpecies(name)
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
                   return <li key={sightings.id}>
                   <strong>Description:</strong> {sightings.description} <br></br> 
                   <strong>Location:</strong> {sightings.location}<br></br><br></br>
                   </li> 
               })}
           </ul>
        </>
    )
  }
  
  export default Species