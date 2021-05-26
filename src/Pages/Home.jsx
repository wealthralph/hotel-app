import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'

 const Home = () => {
    return (
        <Hero>
            <Banner title ='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                <Link to='/rooms' className ='btn-primary'>Our Rooms</Link>
            </Banner>
        </Hero>
    )
}

export default Home