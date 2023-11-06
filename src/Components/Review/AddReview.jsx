import { useLoaderData } from "react-router-dom";


const AddReview = () => {
    const datas = useLoaderData();
    

    const handleReview = e =>{
        e.preventDefault();
        const form = e.target;
        const addReview = form.review.value;
        console.log(addReview);
    }
    return (
        <div>
            <h1 className="mb-5 font-bold">Write Your Review About This Room and This Hotel...</h1>
           <form onSubmit={handleReview} >

           <textarea name="review" placeholder="Write here..." className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea> <br />
           <input className="bg-teal-500 text-white px-2 py-1 rounded-md ml-4" type="submit" value="Add Review" />

           </form>
        </div>
    );
};

export default AddReview;