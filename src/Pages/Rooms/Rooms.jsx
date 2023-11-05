import { useEffect, useState } from "react";
import ShowRoom from "./ShowRoom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <div className="">
     <h1 className="text-5xl font-bold bg-emerald-600 text-center py-3 rounded-lg text-white w-1/5 mb-10 mx-auto">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-y-8">
        {rooms?.map(room => <ShowRoom key={room._id} room={room} />)}
      </div>
    </div>
  );
};

export default Rooms;
