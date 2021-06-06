import React from 'react'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import RoomsCont from '../Components/RoomsCont'


const Rooms = () => {
    return (
        <React.Fragment>
        <Hero hero='roomsHero'>
           <Banner title='Our Rooms'>
           <Link to='/' className="btn-primary">Go to Home</Link>
           </Banner> 
        </Hero>
        <RoomsCont></RoomsCont>
        </React.Fragment>
    )
}

export default Rooms
