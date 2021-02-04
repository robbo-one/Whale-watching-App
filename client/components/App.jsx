import React from 'react'
import Home from './Home'
import {Route} from 'react-router-dom'
import Species from './Species'
import Locations from './Locations'

const App = () => {
  return (
    <>
      <h1>Whale Watching</h1>
      {/* <Home /> */}
      <Route path="/" exact component={Home}/>
      <Route path="/species/:name" exact component={Species}/>
      <Route path="/locations/:name" exact component={Locations}/>

    </>
  )
}

export default App
