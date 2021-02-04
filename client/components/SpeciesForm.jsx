import React, { useEffect, useState } from 'react'
import { getSpeciesAndLocations, getSpecies } from '../apis/whale'

const SpeciesForm = () => {

  const[dataSet, setDataSet] = useState([])
  const[speciesPicture, setSpeciesPicture] = useState("")
  // const[location, setSpeciesName] = useState([{name:""}])


  useEffect(()=> {
    fetchSpecies()
  },[])

  const fetchSpecies = () => {
    // getSpeciesAndLocations()
    getSpecies()
    .then(data => {
      setDataSet(data)
      // console.log(data)
    })
  }

  const handleChange = (event) => {

    let selectName = event.target.value

    dataSet.find(species => {
      if (species.name == selectName){
        setSpeciesPicture(species.url)
      }
    })
  }
    // setSpeciesPicture(pic => {
    //   console.log(pic)
    //   return {
    //     ...pic,
    //     {url: event.target.value}
    //   }
    //   ...pic,
    //   console.log(pic)
    // })
    // console.log(event.target.value)
    // // if(id == id) {
    //   //   (<img src={species.url}/>)
    //   // }
    // }
      


  // console.log(dataSet)


  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label for="species">Choose a species:</label>
        <select  name="species" id="species" onChange={handleChange}>
        <option value="" disabled selected>Select a species</option>
      {dataSet.map(species => {
        return(<option key={species.id} value={species.name}>{species.name}</option>
        )
      })}
        </select>

      </form>
      
      <img style={{width: "300px"}}src={speciesPicture}></img>
    </>
  )
}

export default SpeciesForm