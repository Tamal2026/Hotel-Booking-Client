import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import ShowMyBookings from "./ShowMyBookings";
import Swal from "sweetalert2";

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

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Booking Cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/roombookings/${id}`, {
            method: "DELETE",
          });
          const data = await response.json();
          setBooking(data);
          Swal.fire({
            title: "Cancelled!",
            text: "Your Booking Cancelled Successfully.",
            icon: "success",
          })

          const remaining = bookings.filter(booking =>booking._id !== id)
          setBooking(remaining);
          
        } catch (error) {
          console.error("Error occurred during deletion:", error);
        }
      }
    });
  };
  


  return (
    <div>
      <div className="">
        {
            bookings?.map(booking =><ShowMyBookings key={booking._id}booking={booking} handleCancel={handleCancel}></ShowMyBookings>)
        }
      </div>
    </div>
  );
};

export default MyBooking;
