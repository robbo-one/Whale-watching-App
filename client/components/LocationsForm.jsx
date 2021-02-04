import React, { useEffect, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { getlocationsAndLocations, getLocations } from '../apis/whale'

const LocationsForm = () => {

  const[dataSet, setDataSet] = useState([])
  const[locationsPicture, setlocationsPicture] = useState("")
  const [id, setId] = useState(0)
  const [redirect, setRedirect] = useState(false)
  // const[location, setlocationsName] = useState([{name:""}])


  useEffect(()=> {
    fetchlocations()
  },[])

  const fetchlocations = () => {
    // getlocationsAndLocations()
    getLocations()
    .then(data => {
      setDataSet(data)
      // console.log(data)
    })
  }

  const handleChange = (event) => {

    let selectName = event.target.value

    dataSet.find(locations => {
      if (locations.name == selectName){
        setlocationsPicture(locations.url)
        setId(locations.id)
      }
    })
  }

  const handleSubmit = (event) => {
    // console.log(id)
    event.preventDefault()
    setRedirect(true)
    // (<Link to={`/locations/${id}`}/>)
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
      {(redirect && <Redirect to={`/locations/${id}`}/>)}
    </>
  )
}

export default LocationsForm