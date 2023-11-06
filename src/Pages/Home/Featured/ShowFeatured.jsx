import { Link } from "react-router-dom";

const ShowFeatured = ({ feature, room }) => {
  const { roomName, img, facilities, _id } = feature || {};

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[300px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{roomName}</h2>
          <ul className="list-disc pl-6">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-secondary w-full">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowFeatured;
