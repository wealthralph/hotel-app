import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'

export default class SingleRooms extends Component {
    constructor(props) {
        super(props);
        console.log();
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = RoomContext;
    render() {

        const {getRoom} = this.context;
            const room  = getroom(this.state.slug);

            if (!room) {
                return  <div className = 'error'>
                    <h3>No such error could be found</h3>
                    <Link to ='/rooms' className='btn-primary' >Return to rooms</Link> 
                </div>
            }

            const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        return (
            <Hero hero='roomsHero'>
                <Banner title={`${name} room`}  >
                    <Link to='/rooms' className ='btn-primary' >
                        Back to rooms 
                    </Link>
                </Banner>
            </Hero>
        )
    }
}
