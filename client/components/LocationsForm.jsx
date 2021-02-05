import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getlocationsAndLocations, getLocations } from '../apis/whale'

const LocationsForm = () => {

  const [dataSet, setDataSet] = useState([])
  const [locationsPicture, setlocationsPicture] = useState("")
  const [latLong, setLatLong] = useState("")
  const [redirect, setRedirect] = useState(false)


  useEffect(() => {
    fetchlocations()
  }, [])

  const fetchlocations = () => {
    getLocations()
      .then(data => {
        setDataSet(data)
      })
  }

  const handleChange = (event) => {

    let selectName = event.target.value

    dataSet.find(locations => {
      if (locations.name == selectName) {
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
      <div className="locations-form">
        <form onSubmit={handleSubmit} >
          <label className="locations-label"for="locations">Choose a location:</label>
          <select name="locations" id="locations" onChange={handleChange}>
            <option value="" disabled selected>Select a location</option>
            {dataSet.map(locations => {
              return (<option key={locations.id} value={locations.name}>{locations.name}</option>
              )
            })}
          </select>

          <button>Submit</button>

        </form>

        <img style={{ width: "300px" }} src={locationsPicture}></img>
        {(redirect && <Redirect to={`/locations/${latLong}`} />)}
      </div>
    </>
  )
}

export default LocationsForm