import Footer from "../../Components/Footer/Footer";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Newsletter from "./Newsletter/Newsletter";
import Welcome from "./Welcome/Welcome";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Welcome></Welcome>
           <Featured></Featured>
           <Newsletter></Newsletter>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;