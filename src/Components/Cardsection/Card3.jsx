import { NavLink } from "react-router-dom";

const Card3 = ({ data }) => {
    return (
        <div className="card card-compact bg-base-100 w-80 shadow-xl border-2 rounded-2xl py-5 flex-grow">
            <div className="w-full p-4  h-64 ">
            <img src={data.product_image} alt={data.product_title} className="w-full rounded-2xl h-full" />
            </div>
                
            
            <div className="card-body">
                <h2 className="card-title">{data.product_title}</h2>
                <p>Price : $ {data.price}</p>
                <div className="card-actions my-5">
                    <NavLink to={`/Statistics/${data.product_id}`}><button className="btn  font-semibold rounded-3xl border-2 border-[#9538E2] text-[#9538E2]"> View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Card3;
