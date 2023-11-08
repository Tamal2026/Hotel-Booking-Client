import { Outlet } from "react-router-dom";
import Navbar from "../Components/Provider/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;