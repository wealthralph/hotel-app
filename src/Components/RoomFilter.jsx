import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'

const getUnique = {items,value} => {
    return [...new set(item.map(item => item[value]))]
}

const RoomFilter = () => {
    const context =useContext(RoomContext);

    const {
        handleChange, 
        type, 
        capacity , 
        price, 
        minPrice , 
        maxPrice , 
        breakfast, 
        pets, 
        minsize,
        maxSize
    } = context ;

    let types = getUnique(rooms, 'type');

    types = ['all', ...types]

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form action="" className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handleChange} ></select>
                </div>
            </form>
            
        </section>
    )
}

export default RoomFilter
