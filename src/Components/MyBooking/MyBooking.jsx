import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import ShowMyBookings from "./ShowMyBookings";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  const url = `http://localhost:5000/roombookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBooking(res.data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [url]);

  return (
    <div>
      <div>
        {
            bookings?.map(booking =><ShowMyBookings key={booking._id}booking={booking}></ShowMyBookings>)
        }
      </div>
    </div>
  );
};

export default MyBooking;
