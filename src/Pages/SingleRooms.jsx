import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../Components/StyledComponents'
import '../App.css'

export default class SingleRooms extends Component {
    constructor(props) {
        super(props);
        console.log();
        this.state = {
            slug: this.props.match.params.slug,
            img: defaultBcg
        };
    }

    static contextType = RoomContext;
    render() {

        const {getRooms} = this.context;
            const room  = getRooms(this.state.slug);

            if (!room) {
                return  <div className = 'error'>
                    <h3>No such error could be found</h3>
                    <Link to ='/rooms' className='btn-primary' >Return to rooms</Link> 
                </div>
            }

            const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        return (
            <React.Fragment>
            <StyledHero img={images[0] || this.state.img}>
                <Banner title={`${name} room`}  >
                    <Link to='/rooms' className ='btn-primary' >
                        Back to rooms 
                    </Link>
                </Banner>
            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item, index) => {
                       return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article classname='desc'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>

                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price} </h6>
                        <h6>Size : ${size} </h6>
                        <h6>max capacity :{capacity > 1 ? `${capacity} people` : `${capacity} Person`} </h6>
                        <h6>{pets ? 'pets are allowed' : "no pets allowed" }</h6>
                        <h6>{breakfast && 'free breakfast included' }</h6>

                    </article>
                </div>


            </section>

            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}  >- {item}</li>
                    })}
                </ul>
            </section>
            </React.Fragment>
            
        )
    }
}
