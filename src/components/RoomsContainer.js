import React from 'react'
import RoomsFilter from "./RoomsFilter.js"
import RoomsList from "./RoomsList.js"
//import {RoomConsumer} from "../context"
import {withRoomConsumer} from "../context"
import Loading from "./Loading"

function RoomsContainer({context}){

const {loading, sortedRooms, rooms}=context
                            if(loading){
                               return <Loading/>;
                          }

                          return(
                               <>
                     <RoomsFilter rooms={rooms}></RoomsFilter>
                     <RoomsList rooms={sortedRooms}></RoomsList>
                 </>

                             );
}


export default withRoomConsumer(RoomsContainer)

// export default function RoomsContainer() {
//             return (
//                 <RoomConsumer>
//                     {
//                         (value)=>{
//                             const {loading, sortedRooms, rooms}=value
//                             if(loading){
//                                 return <Loading/>;
//                             }

//                             return(
//                                 <div>
//                     <RoomsFilter rooms={rooms}></RoomsFilter>
//                     <RoomsList rooms={sortedRooms}></RoomsList>
//                 </div>

//                             );
//                         }
//                     }
//                 </RoomConsumer>
                
//     )
// }
