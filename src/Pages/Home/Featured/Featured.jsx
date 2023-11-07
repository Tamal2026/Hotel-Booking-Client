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
    <div className="w-full">
      <h1 className="text-5xl font-bold px-3 py-5 text-center mx-auto mt-10 bg-cyan-800 text-red-500 rounded-lg">Our Featured Room</h1>
      <div className="w-full flex flex-col md:flex-row lg:flex-row">
        <div className="w-full md:w-2/3 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {featured?.map(feature => <ShowFeatured key={feature._id} feature={feature} />)}
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3">
          <p className="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis, ab harum dolores debitis laboriosam error facilis minima totam consequuntur placeat omnis et, dolore est. Dicta nulla illo vero minus!</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
