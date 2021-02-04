import React from 'react'
import Home from './Home'
import {Route} from 'react-router-dom'
import Species from './Species'

const App = () => {
  return (
    <>
      <h1>Whale Watching</h1>
      {/* <Home /> */}
      <Route path="/" exact component={Home}/>
      <Route path="/species/:id" exact component={Species}/>
    </>
  )
}

export default App
