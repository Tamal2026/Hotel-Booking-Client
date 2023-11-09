/* eslint-disable react/prop-types */
import  { useState } from "react";
import { Link } from "react-router-dom";

const ShowMyBookings = ({ booking, handleCancel, handleUpdate }) => {
  const { roomName, img, price, date, _id, } = booking;
  const [newDate, setNewDate] = useState(date);

  const handleDateUpdate = () => {
  
    handleUpdate(_id, newDate);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Room Img</th>
              <th>Room Name</th>
              <th>Price</th>
              <th>Booking Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={img} alt="avatar" />
                    </div>
                  </div>
                
                </div>
              </td>
              <td className="font-bold">
                {roomName}
                
               
              </td>
              <td>{price}</td>
              <th>
                <h1>{date}</h1>
              </th>
              <td className="space-x-4">
                <button
                  className="btn mt-5 btn-primary text-white bg-red-500"
                  onClick={() => handleCancel(_id)}
                >
                  Cancel
                </button>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="input input-bordered"
                />
                <button className="btn btn-primary" onClick={handleDateUpdate}>
                  Update Date
                </button>
                <Link to={`/addreview/${_id}`}>
                  <button className="btn bg-green-600 text-white">Review</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowMyBookings;
