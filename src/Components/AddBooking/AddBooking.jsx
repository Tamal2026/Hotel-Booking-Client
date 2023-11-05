import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
const AddBooking = () => {
  const service = useLoaderData();

  const { title, price, img } = service || {};
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      name,
      date,
      email,
      price,
      img,
      title,
    };
    console.log(order);
    fetch("http://localhost:5000/roombookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
        
                text: 'Your Booked SuccessFully!',
               
              })
        }
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
            <input
              type="date"
              name="date"
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
              placeholder="email"
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
