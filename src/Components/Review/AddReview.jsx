import axios from 'axios';
import  { useState } from 'react';

const AddReview = () => {
    const [rating, setRating] = useState(1);

    
    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const addReview = form.review.value;
        console.log(addReview);
        console.log(rating);
        axios.post('http://localhost:5000/addReviews', { review: addReview, rating: rating })
        .then((response) => {
          console.log(response.data);
          // Add any necessary UI update logic here after successfully adding the review
        })
        .catch((error) => {
          console.error('Error adding review:', error);
          // Handle the error as needed
        });
    }

    return (
        <div>
            <h1 className="mb-5 font-bold">Write Your Review About This Room and This Hotel...</h1>
            <form onSubmit={handleReview}>
                <textarea name="review" placeholder="Write here..." className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-5"></textarea> <br />
                <label className='pl-5 text-xl' htmlFor="rating">  Rating :   </label>
                <select name="rating" id="rating" className='px-2 text-xl' value={rating} onChange={(e) => setRating(e.target.value)}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
                <br />
                <input className="bg-teal-500 text-white px-2 p-1 mt-4 rounded-md ml-4" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;
