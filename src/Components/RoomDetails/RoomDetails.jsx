import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {
    const bookRoom = useLoaderData();
   
    const {roomName,_id,price} = bookRoom;

    return (
        <div>
          <h1>Room Name: {roomName}</h1>
          <h1>Price: {price}</h1>
          
        </div>
    );
};

export default RoomDetails;