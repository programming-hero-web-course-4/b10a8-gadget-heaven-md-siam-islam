

import { NavLink, useLocation } from "react-router-dom";

const Card = ({ data }) => {

    const location = useLocation()
    return (
        <div className="my-24">
            <div className="flex flex-col border rounded-2xl px-3 pu-2">
                <NavLink to="/card">

                <NavLink to="/card">
                    
                        <button 
                            className={`border rounded-2xl px-4 py-2 my-2 w-44 ${location.pathname === "/card"  ? 'bg-[#9538E2] text-white font-semibold' : 'hover:bg-[#9538E2] hover:text-white font-semibold'}`}
                        >
                            All Product
                        </button>
                    
                </NavLink>
                </NavLink>
                {
                    data?.map((e, index) => (
                        <NavLink 
                            key={index}
                            to={`/card/${e.category}`}
                        >
                            {({ isActive }) => (
                                <button
                                    className={`border rounded-2xl px-4 py-2 my-2 w-44 ${isActive ? 'bg-[#9538E2] text-white font-semibold' : 'hover:bg-[#9538E2] hover:text-white font-semibold'}`}
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
