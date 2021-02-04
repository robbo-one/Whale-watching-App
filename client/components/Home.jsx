import React, {useEffect, useState} from 'react'
import { getSpeciesAndLocations } from '../apis/whale'
import SpeciesForm from './SpeciesForm'
import LocationsForm from './LocationsForm'

const Home = () => {
    return (
        <>
           <p>Hi</p> 

           <LocationsForm />
           <br></br>
           <br></br>

           <SpeciesForm />
           
        </>
    )
  }
  
  export default Home
  