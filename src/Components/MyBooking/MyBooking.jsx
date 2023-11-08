import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import ShowMyBookings from "./ShowMyBookings";
import Swal from "sweetalert2";
import HelmetReact from "../Helmet/HelmetReact";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  const url = `https://assinment11-server-5m6c1gdfs-tamal-krishna-das-projects.vercel.approombookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBooking(res.data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [url]);

  const handleUpdate = (id) => {
    fetch(`https://assinment11-server-5m6c1gdfs-tamal-krishna-das-projects.vercel.approombookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated");
          const remaining = bookings.filter(
            (booking) => booking._id !== booking.id
          );
          const Updated = bookings.find((booking) => booking._id === id);
          Updated.status = 'confirm'
          const newBookings = [Updated, ...remaining]
          setBooking(newBookings)
        }
      });
  };
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
          const response = await fetch(
            `https://assinment11-server-5m6c1gdfs-tamal-krishna-das-projects.vercel.approombookings/${id}`,
            {
              method: "DELETE",
            }
          );
          const data = await response.json();
          setBooking(data);
          Swal.fire({
            title: "Cancelled!",
            text: "Your Booking Cancelled Successfully.",
            icon: "success",
          });

          const remaining = bookings.filter((booking) => booking._id !== id);
          setBooking(remaining);
        } catch (error) {
          console.error("Error occurred during deletion:", error);
        }
      }
    });
  };

  return (
    <div>
      <div>
        <HelmetReact title="Bookings"></HelmetReact>
      </div>
      <div className="">
        {bookings?.map((booking) => (
          <ShowMyBookings
            key={booking._id}
            booking={booking}
            handleCancel={handleCancel}
            handleUpdate={handleUpdate}
          ></ShowMyBookings>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
