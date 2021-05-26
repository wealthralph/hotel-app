
import React from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRooms from './Pages/SingleRooms'
import Error from './Pages/Error'
import Navbar from './Components/Navbar'


import {Switch, Route, Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path='/' component = {Home}/>
      <Route exact path='/rooms/' component = {Rooms}/>
      <Route exact path='/rooms/:slug' component = {SingleRooms}/>
      <Route component ={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
