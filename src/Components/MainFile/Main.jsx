import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footear from "../Footear/Footear";


const Main = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)]">
            <Outlet></Outlet>
            </div>
            <Footear></Footear>
        </div>
    );
};

export default Main;