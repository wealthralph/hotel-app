import React,{Component} from 'react'
import items from './data'

const RoomContext = React.createContext();


class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };
    //Get data
    componentDidMount(){
        let rooms =this.formatData(items)
        let featuredRooms=rooms.filter(room => room.featured === true);
        this.setState ({
            rooms,
            featuredRooms, 
            sortedRooms:rooms, 
            loading:false
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id 
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, images, id};
            return room;

        });
        return tempItems;
    }

    getRooms = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    };
    
    

    render () {
        return (<RoomContext.Provider value={{...this.state, getRooms:this.getRooms}}>
            {this.props.children}
        </RoomContext.Provider>);
    }
}

const  RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};