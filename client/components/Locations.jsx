import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLocations } from '../apis/whale'
// import { getSpeciesAndLocations } from '../apis/whale'
import { getSightingsInLocation } from '../apis/whale-hotline'
const Locations = (props) => {

    const latLong = props.match.params.latLong

    const [sightings, updateSightings] = useState([])
    const[dataSet, setDataSet] = useState([])
    const[locationsPicture, setLocationsPicture] = useState("")

    const getSightings = () => {
        getSightingsInLocation(latLong)
            .then(sightings => {
              console.log(sightings)
                updateSightings(sightings)
            })
    }

    const fetchLocation = () => {
      getLocations()
      .then(data => {
        setDataSet(data)
        data.map(locations => {
          if (props.match.params.latLong == locations.latLong)
          setLocationsPicture(locations.url)
        })
      })
    }

    useEffect(() => {
        getSightings()
        fetchLocation()
    }, [])

    return (

        <div className='locations-background'>

       
        <img style={{width: "300px"}}src={locationsPicture}></img>
            <p>Locations</p>
            <ul>
                {sightings.map(sightings => {
                    return <li key={sightings.id}><strong>Species: </strong> {sightings.species[0].toUpperCase()}{sightings.species.slice(1, sightings.species.length)}<br></br>
                    <strong>Description</strong> {sightings.description}<br></br>
                    <strong>Orca Type</strong> {sightings.orca_type} <br></br>
                    <strong>Location:</strong> {sightings.location} <br></br>
                    <strong>Orca type:</strong> {sightings.orca_type} <br></br>
                    <strong>Sighted:</strong> <ul> <li>Date: {sightings.sighted_at.slice(0, 10)}</li> <li>Time: {sightings.sighted_at.slice(12, sightings.sighted_at.length -1)}</li></ul> <br></br><br></br>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Locations