import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddBooking = () => {
  const bookedRoom = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { price, img, roomName, roomSize, specialOffer } = bookedRoom || {};
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = selectedDate.toISOString();
    const email = form.email.value;
    const due = form.due.value;

    const order = {
      name,
      date,
      email,
      price,
      img,
      roomName,
      roomSize,
      specialOffer,
      due,
    };

    fetch("http://localhost:5000/roombookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            text: "Your Booking was successful!",
          });
        }
      })
      .catch((error) => {
        console.error("Error occurred during booking:", error);
      });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleBookService}
          className="card-body grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="P"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={price}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
