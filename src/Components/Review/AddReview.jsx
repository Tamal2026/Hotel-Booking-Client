import axios from "axios";
import { useState, useContext } from "react";
import moment from "moment";
import { AuthContext } from "../Provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(1);
  const [username, setUsername] = useState(user?.email || "");

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const addReview = form.review.value;
    const submissionTime = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(addReview);
    console.log(rating);
    axios
      .post("https://assinment11-server-5m6c1gdfs-tamal-krishna-das-projects.vercel.app/addReviews", {
        review: addReview,
        rating: rating,
        username: username,
        submissionTime: submissionTime,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  return (
    <div>
      <h1 className="mb-5 font-bold">
        Write Your Review About This Room and This Hotel...
      </h1>
      <form onSubmit={handleReview}>
        <textarea
          name="review"
          placeholder="Write here..."
          className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-5"
        ></textarea>{" "}
        <br />
        <label className="pl-5 text-xl" htmlFor="username">
          {" "}
          Username:{" "}
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-2 text-xl"
        />
        <br />
        <label className="pl-5 text-xl" htmlFor="rating">
          {" "}
          Rating :{" "}
        </label>
        <select
          name="rating"
          id="rating"
          className="px-2 text-xl"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <br />
        <input
          className="bg-teal-500 text-white px-2 p-1 mt-4 rounded-md ml-4"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
