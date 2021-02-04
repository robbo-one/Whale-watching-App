import React, { useEffect, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { getlocationsAndLocations, getLocations } from '../apis/whale'

const LocationsForm = () => {

  const[dataSet, setDataSet] = useState([])
  const[locationsPicture, setlocationsPicture] = useState("")
  const [latLong, setLatLong] = useState("")
  const [redirect, setRedirect] = useState(false)


  useEffect(()=> {
    fetchlocations()
  },[])

  const fetchlocations = () => {
    getLocations()
    .then(data => {
      setDataSet(data)
    })
  }

  const handleChange = (event) => {

    let selectName = event.target.value

    dataSet.find(locations => {
      if (locations.name == selectName){
        setlocationsPicture(locations.url)
        setLatLong(locations.latLong)
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setRedirect(true)
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="locations">Choose a locations:</label>
        <select  name="locations" id="locations" onChange={handleChange}>
        <option value="" disabled selected>Select a locations</option>
      {dataSet.map(locations => {
        return(<option key={locations.id} value={locations.name}>{locations.name}</option>
        )
      })}
        </select>

        <button>submit</button>

      </form>
      
      <img style={{width: "300px"}}src={locationsPicture}></img>
      {(redirect && <Redirect to={`/locations/${latLong}`}/>)}
    </>
  )
}

export default LocationsForm