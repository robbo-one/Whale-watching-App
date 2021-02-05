import React, { useState, useEffect } from 'react'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsOfSpecies } from '../apis/whale-hotline'
import { getSpecies } from '../apis/whale'


const Species = (props) => {
    const name = props.match.params.name
    name.replace(" ", "%20")
    
    const [sightings, getSightings] = useState([])
    const[dataSet, setDataSet] = useState([])
    const[speciesPicture, setSpeciesPicture] = useState("")

    const updateSpecies = () => {
        getSightingsOfSpecies(name)
        .then(sightings => {
            getSightings(sightings)
        })
    }

    const fetchSpecies = () => {
      getSpecies()
      .then(data => {
        setDataSet(data)
        data.map(species => {
          if (props.match.params.name == species.name)
          setSpeciesPicture(species.url)
        })
      })
    }

    useEffect(() => {
        updateSpecies()
        fetchSpecies()
    }, [])

    return (
        <>
        <img style={{width: "300px"}}src={speciesPicture}></img>
           <p>Species</p> 
           <ul>
               {sightings.map(sightings => {
                   return <li key={sightings.id}>
                   <strong>Description:</strong> {sightings.description} <br></br> 
                   <strong>Location:</strong> {sightings.location}<br></br><br></br>
                     {/* <img src={sightings.url}></img> */}
                   </li> 
               })}
           </ul>
        </>
    )
  }
  
  export default Species