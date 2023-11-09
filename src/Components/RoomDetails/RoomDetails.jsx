import { Link, useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const bookRoom = useLoaderData();
  const {_id} = bookRoom;

  const {
    roomName,
    
    specialOffer,
    price,
    img,
    description,
    facilities,
    roomSize,
  } = bookRoom;

  return (
    <div>
      <div className=" bg-base-200">
        <div className=" hero-content flex-col lg:flex-row">
         
          <img src={img} className=" w-2/4 mx-auto rounded-lg shadow-2xl" />
          <div>
          <h1 className="text-center bg-sky-700 text-emerald-300 w-1/5 mx-auto rounded-lg py-3 text-xl mb-5 font-bold
     ">{roomName}</h1>
            <h1>
              <span className="font-bold">Room Size:</span> {roomSize}
            </h1>
            <h1 className="pt-3">
              <span className="font-bold">Price Per Night: $</span> {price}
            </h1>
            <h1 className="pt-3 font-bold">Facilities: </h1>
            <ul className="list-disc list-inside">
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>

            <p className="pt-3">
              {" "}
              <span className="font-bold">Short Description:</span>{" "}
              {description}.
            </p>
            <h1><span className="font-bold">Special Offers:</span> {specialOffer}</h1>
            <Link to={`/addbooking/${_id}`}><button className="btn btn-primary mt-5 font-bold text-white">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
