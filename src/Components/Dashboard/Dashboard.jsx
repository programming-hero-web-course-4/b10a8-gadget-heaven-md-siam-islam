import { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const [isActive , setIsActive] = useState ({
        card : true,
        stats : "Card"
      })


      const handleActive = (info) =>{
        if(info == "card"){
          setIsActive({
            card : true,
           stats : "Card"
          })
        }
        else{
          setIsActive({
            card : false,
           stats : "player"
          })
        }
      }

    return (
        <div>
            <div className='bg-[#9538E2] px-5 py-4 rounded-3xl mt-10 flex justify-center items-center flex-col h-[300px] mb-20'>
                <h1 className='text-2xl md:text-4xl font-extrabold text-white mb-5'>Product Details</h1>
                <p className='text-white text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>


                <div className =" flex items-center gap-6 mt-5 ">

                <NavLink to="/dashboard/cart" >
                    {({ isActive }) => (
                        <button onClick={() => handleActive("card")} className={`border-2 rounded-3xl px-8 py-2 font-semibold text-white ${isActive ? "bg-blue-400 text-black" : ""}`}>
                            Cart
                        </button>
                    )}
                </NavLink>


                <NavLink  to="/dashboard/Wishlist">
                    {({ isActive }) => (
                        <button onClick={() => handleActive("siam")}  className={`border-2 rounded-3xl px-8 py-2 font-semibold text-white ${isActive ? " bg-blue-400 text-black" : ""}`}>
                           Wishlist
                        </button>
                    )}
                </NavLink>






                </div>

                
                
            </div>
            <div>
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;