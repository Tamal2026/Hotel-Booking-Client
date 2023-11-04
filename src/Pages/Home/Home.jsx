import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Welcome from "./Welcome/Welcome";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Welcome></Welcome>
           <Featured></Featured>
            
        </div>
    );
};

export default Home;