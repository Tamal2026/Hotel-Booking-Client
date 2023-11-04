const ShowFeatured = ({ feature }) => {
    const { roomName, img, facilities } = feature || {};

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[300px]" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{roomName}</h2>
                    <ul className="list-disc pl-6">
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFeatured;