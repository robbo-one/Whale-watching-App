import React from 'react'
import Home from './Home'
import {Route} from 'react-router-dom'
import Species from './Species'
import Locations from './Locations'

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <h1 className="home-h1">Whale Watching</h1>
      <Route path="/" exact component={Home}/>
      <Route path="/species/:name" exact component={Species}/>
      <Route path="/locations/:latLong" exact component={Locations}/>

    </>
  )
}

export default App
