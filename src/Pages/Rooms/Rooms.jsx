import { useEffect, useState } from "react";
import ShowRoom from "./ShowRoom";
import DisplayData from "../../Components/Review/DisplayReview";
import HelmetReact from "../../Components/Helmet/HelmetReact";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortedRooms, setSortedRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  useEffect(() => {
    if (sortBy === "lowToHigh") {
      setSortedRooms([...rooms].sort((a, b) => a.price - b.price));
    } else if (sortBy === "highToLow") {
      setSortedRooms([...rooms].sort((a, b) => b.price - a.price));
    } else {
      setSortedRooms(rooms);
    }
  }, [sortBy, rooms]);

  return (
    <>
      <div>
        <HelmetReact title="Rooms" />
      </div>

      <div>
        <label className="px-5" htmlFor="sortBy">Sort By:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="" className="px-4">--Select--</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      <div>
        <h1>Our Rooms</h1>
        <div className="grid grid-cols-1 md:2 lg:grid-cols-4">
          {sortedRooms.map((room) => (
            <ShowRoom key={room._id} room={room} />
          ))}
        </div>
      </div>
      <DisplayData />
    </>
  );
};

export default Rooms;
