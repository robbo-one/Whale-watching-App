import React, {useEffect, useState} from 'react'
import { getSpeciesAndLocations } from '../apis/whale'
import SpeciesForm from './SpeciesForm'

const Home = () => {
    return (
        <>
           <p>Hi</p> 

           <SpeciesForm />
           
        </>
    )
  }
  
  export default Home
  