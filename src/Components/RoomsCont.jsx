import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { RoomConsumer } from '../Context';
import Loading from './Loading';

const RoomsCont = () => {
  return (
    <RoomConsumer>
      {(value) => {
          const {Loading,sortedRooms, rooms} = value
        return (
          <div>
            Hello form room container
            <RoomFilter></RoomFilter>
            <RoomList></RoomList>
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsCont;
