import { useEffect, useState } from "react";
import ShowRoom from "./ShowRoom";
import ShowReview from "../../Components/Review/ShowReview";
import DisplayData from "../../Components/Review/DisplayReview";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  return (
  <>
    <div className="">
     <h1 className="text-5xl font-bold bg-emerald-600 text-center py-3 rounded-lg text-white w-2/4 lg:w-1/5 mb-10 mx-auto">Our Rooms</h1>
      <div className="grid grid-cols-1 p-5 md:grid-cols-2 gap-10  lg:grid-cols-4 gap-y-8">
        {rooms?.map(room => <ShowRoom  key={room._id} room={room} />)}
      </div>
      <div className="bg-slate-400 text-sky-500 font-bold text-3xl py-3 text-center">
          <h1>Our customers rate us and review Us with honesty and appreciation </h1>
        </div>
    </div>
 <DisplayData></DisplayData>
  
  </>
  );
};

export default Rooms;
