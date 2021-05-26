import {BrowserRouter}

import React from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRooms from './Pages/SingleRooms'
import Error from './Pages/Error'

function App() {
  return (
    <div>
      <Home></Home>
      <Rooms></Rooms>
      <SingleRooms></SingleRooms>
      <Error></Error>
    </div>
  );
}

export default App;
