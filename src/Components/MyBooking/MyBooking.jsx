import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const url = `http://localhost:5000/roombookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBooking(res.data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [url]);

  return (
    <div>
      <h1>Booking: {booking.length}</h1>
    </div>
  );
};

export default MyBooking;
