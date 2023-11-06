/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


/* eslint-disable no-unused-vars */
const ShowMyBookings = ({ booking,handleCancel }) => {
    const { roomName, img, price, date, _id } = booking;
  
  
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
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
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
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
  