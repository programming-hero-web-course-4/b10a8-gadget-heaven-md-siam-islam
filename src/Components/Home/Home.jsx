import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Cardsection/Card";
import Catting from "../Catting/Catting";


const Home = () => {
    const data = useLoaderData()
    return (
        <div className="my-24">
            <Banner></Banner>

            <Catting></Catting>

            <div className="flex  justify-between">
            <Card data={data}></Card>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;