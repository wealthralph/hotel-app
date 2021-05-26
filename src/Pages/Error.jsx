import React from 'react'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <Hero>
            <Banner title='Error Page ' subtitle ='Go back to home '>
                <Link to='/' className="btn-primary" >Back Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error
