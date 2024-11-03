

import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
    return (
        <div className="my-24">
            <div className="flex flex-col border rounded-2xl px-3 pu-2">
                <button className="border rounded-2xl px-4 py-2 my-2 w-44">All Product</button>
                {
                    data.map((e, index) => (
                        <NavLink 
                            key={index}
                            to={`/card/${e.category}`}
                        >
                            {({ isActive }) => (
                                <button
                                    className={`border rounded-2xl px-4 py-2 my-2 w-44 ${isActive ? 'bg-[#9538E2] text-white font-semibold' : ''}`}
                                >
                                    {e.category}
                                </button>
                            )}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;
