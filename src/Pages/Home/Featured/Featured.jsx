import { useEffect, useState } from "react";
import ShowFeatured from "./ShowFeatured";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/featuredRooms')
      .then(res => res.json())
      .then(data => setFeatured(data))
      .catch(error => console.error('Error fetching featured:', error));
  }, []);

  return (
    <div className="w-full ">
      <h1 className="text-5xl font-bold px-3 py-5 text-center mx-auto mt-10 bg-cyan-800 text-red-500 rounded-lg">Our Featured Room</h1>
      <div className="w-full flex flex-col items-center md:flex-row lg:flex-row">
        <div className="w-full md:w-2/3 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {featured?.map(feature => <ShowFeatured key={feature._id} feature={feature} />)}
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3">
          <p className="p-3">Discover our exquisite collection of featured rooms, each designed to provide the utmost comfort and luxury during your stay. Immerse yourself in a world of unparalleled hospitality and elegance, where every detail has been meticulously curated to ensure a memorable experience. Indulge in the breathtaking views, lavish amenities, and personalized service that epitomize our commitment to excellence. Whether you seek a peaceful retreat or an adventurous getaway, our featured rooms offer the perfect sanctuary for your travels. Book now and embark on a journey of unparalleled relaxation and sophistication.
</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
