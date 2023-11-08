import { useEffect, useState } from "react";
import axios from "axios";
import ShowReview from "./ShowReview";

const DisplayData = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("https://assinment11-server-5m6c1gdfs-tamal-krishna-das-projects.vercel.app/addreviews") 
      .then((response) => {
       setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Display All Reviews</h1>
      <ul>
       {
        reviews?.map(review => <ShowReview key={review._id} reviews={review} />)
       }
      </ul>
    </div>
  );
};

export default DisplayData;
