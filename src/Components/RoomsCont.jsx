import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {  withRoomConsumer } from '../Context';
import Loading from './Loading';




function RoomCont({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            Hello form room container
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} ></RoomList>
        </div> )

}



export default withRoomConsumer (RoomCont)




// const RoomsCont = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//           const {loading,sortedRooms, rooms} = value

//           if(loading) {
//               return <Loading/>
//           }
//         return (
//           <div>
//             Hello form room container
//             <RoomFilter rooms={rooms} / >
//             <RoomList rooms={sortedRooms} ></RoomList>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsCont;
