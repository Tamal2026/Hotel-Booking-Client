const ShowMyBookings = ({booking}) => {
    const {roomName,img,price,date} = booking;
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
                      <img src={img}/>
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
              <td>Purple</td>
              <th>
               <h1>{date}</h1>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowMyBookings;
