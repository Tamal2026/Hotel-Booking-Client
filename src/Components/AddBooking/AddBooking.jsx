import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const AddBooking = () => {
  const [date, setDate] = useState("");
  const { user } = useContext(AuthContext);
  const bookedRoom = useLoaderData();
  console.log(bookedRoom);


  const handleBookService = () => {
    const order = {
      name: document.getElementById("name").value,
      date: date,
      email: document.getElementById("email").value,
      price: bookedRoom[0].price,
      img: bookedRoom[0].img, 
      roomName: bookedRoom[0].roomName,
      roomSize: bookedRoom[0].roomSize,
      specialOffer: bookedRoom[0].specialOffer,
      due: document.getElementById("due").value,
    };

    fetch(`http://localhost:5000/roombookings/`, {
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

  const showSummaryPopup = () => {
    Swal.fire({
      icon: "info",
      title: "Booking Summary",
      html: `
        <div>
          <p><strong>Room Name:</strong> ${bookedRoom[0].roomName}</p>
          <p><strong>Room Size:</strong> ${bookedRoom[0].roomSize}</p>
          <p><strong>Special Offer:</strong> ${bookedRoom[0].specialOffer}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Due:</strong> ${bookedRoom[0].price}</p>
        </div>
      `,
      confirmButtonText: "Confirm Booking",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleBookService();
      }
    });
  };
  return (
    <div>
    
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="card-body grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input id="name" type="text" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
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
              id="due"
              type="text"
              defaultValue={bookedRoom[0].price}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button onClick={showSummaryPopup} className="btn btn-primary">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooking;
