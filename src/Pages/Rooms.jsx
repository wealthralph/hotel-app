import React from 'react'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'


const Rooms = () => {
    return (
        <Hero hero='roomsHero'>
           <Banner title='Our Rooms'>
           <Link to='/' className="btn-primary">Go to Home</Link>
           </Banner> 
        </Hero>
    )
}

export default Rooms
