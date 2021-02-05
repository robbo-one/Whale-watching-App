import React from 'react'
import Home from './Home'
import {Route} from 'react-router-dom'
import Species from './Species'
import Locations from './Locations'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      {/* <Home /> */}
      
      <Link to={'/'}><h1 className="home-h1">Whale Watching</h1></Link>
      <Route path="/" exact component={Home}/>
      <Route path="/species/:name" exact component={Species}/>
      <Route path="/locations/:latLong" exact component={Locations}/>

    </>
  )
}

export default App
