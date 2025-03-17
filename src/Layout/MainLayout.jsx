import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-117px)] p-2 xl:p-0">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;