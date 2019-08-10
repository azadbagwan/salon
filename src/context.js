import React, { Component } from 'react'

import items from "./data"
import { all } from 'q';

const RoomContext = React.createContext();

// <RoomContext.Provider value={'hello}



class RoomProvider extends Component {
    state={
       rooms:[],
       sortedRooms:[],
       featuredRooms:[],
       loading:true,
       type:all,
       capacity:1,
       price:0,
       minPrice:0,
       maxPrice:0,
       minSize:0,
       maxSize:0,
       brekfast:false,
       pets:false,
    };
    // getdata

    componentDidMount(){
        let rooms= this.formatData(items);

        let featuredRooms= rooms.filter(room => room.featured === true);
        let maxPrice= Math.max(...rooms.map(item=> item.price));
        let maxSize= Math.max(...rooms.map(item=> item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize,
        });
    }

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=> image.fields.file.url);

            let room={...item.fields,images,id};
            return room;

        });
        return tempItems;
    }

    getRoom=(slug)=>{
        let tempRooms= [...this.state.rooms];
        const room= tempRooms.find(room=>room.slug === slug)
        return room;
    };
handleChange = event => {
        
        const target =event.target
        const value = event.type === 'checkbox' ?target.checked:target.value
        const name =event.target.name;
        this.setState({
            //check the name in the state and set the corrosponding value on basis of whatever you selected.
            [name]:value
        },this.filterRooms)
    };  

    filterRooms=()=> {
        console.log("hello")
        let {
            rooms,type,capacity,price,minSize,maxSize,brekfast,pets
        } =this.state
        let tempRooms=[...rooms];
        if(type!== 'all'){
            tempRooms= tempRooms.filter(room=> room.type === type)
        }
        this.setState({
            sortedRooms:tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer= RoomContext.Consumer;


export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
    }
}
export{RoomProvider,RoomConsumer, RoomContext}