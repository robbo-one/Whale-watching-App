import React from 'react'
import { getSpeciesAndLocations } from '../apis/whale'
import Locations from './Locations'
import Species from './Species'

const Home = () => {
    return (
        <>
           <p>Hi</p> 
           <Species/>
           <Locations/>
        </>
    )
  }
  
  export default Home
  