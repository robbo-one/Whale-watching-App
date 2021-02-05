import React, { useEffect, useState } from 'react'
import { getSpeciesAndLocations } from '../apis/whale'
import SpeciesForm from './SpeciesForm'
import LocationsForm from './LocationsForm'


const Home = () => {
    return (

        <div className="home">
            <div className="home-forms">
                <LocationsForm />
                <SpeciesForm />
            </div>
        </div>
    )
}

export default Home

