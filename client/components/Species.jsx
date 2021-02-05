import React, { useState, useEffect } from 'react'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsOfSpecies } from '../apis/whale-hotline'

import { Link } from 'react-router-dom'

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
          console.log(sightings)
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
        <div className="species"></div>
        <img style={{width: "300px",marginLeft:'200px'}}src={speciesPicture}></img>
           <p class="speciesTitle">{props.match.params.name}</p> 
           <div className="speciesList">
           <p>Species {props.match.params.name[0].toUpperCase()}{props.match.params.name.slice(1, props.match.params.name.length)}</p> 
           <ul>
               {sightings.map(sightings => {
                   return <li key={sightings.id}>
                   <strong>Description:</strong> {sightings.description} <br></br> 
                   <strong>Orca Type:</strong> {sightings.orca_type} <br></br> 
                   <strong>Number of Orca spotted:</strong> {sightings.quantity == null ? "unknown" : sightings.quantity } <br></br> 
                   <strong>Location:</strong> {sightings.location == "" ? "unknown" : sightings.location }<br></br>
                   <strong>Sighted at:</strong> <ul> <li>Date: {sightings.sighted_at.slice(0, 10)}</li> <li>Time: {sightings.sighted_at.slice(12, sightings.sighted_at.length -1)}</li></ul> <br></br><br></br>

                     {/* <img src={sightings.url}></img> */}
                   </li> 
                   
               })}
           </ul>
           </div> 

        </>
        
    )
  }
  
  export default Species