
import HelmetReact from "../../Components/Helmet/HelmetReact";
import DisplayData from "../../Components/Review/DisplayReview";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Newsletter from "./Newsletter/Newsletter";
import Welcome from "./Welcome/Welcome";


const Home = () => {
    return (
        <div>
            <div>
                <HelmetReact title="Home"></HelmetReact>
            </div>
           <Banner></Banner>
           <Welcome></Welcome>
           <Featured></Featured>

           <h1 className="text-3xl text-center mt-10 bg-indigo-500 text-white py-3 font-bold w-2/6 rounded-lg mx-auto">Our Honourable Customer Experiences</h1>
           <DisplayData></DisplayData>
           <Newsletter></Newsletter>
         
 
            
        </div>
    );
};

export default Home;