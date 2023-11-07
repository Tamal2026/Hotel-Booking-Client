import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShowRoom = ({ room }) => {
  const { roomName, img, _id,price } = room;
  return (
    <>
      <div>
        <Link to={`/details/${_id}`}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-[350px]" src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl text-sky-600 font-bold">
                {roomName}
              </h2>
              <h1 className="font-bold">Price: {price}</h1>
            </div>
          </div>
        </Link>
        
      </div>
     

     
    </>
  );
};

export default ShowRoom;
