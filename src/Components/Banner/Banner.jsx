import { Link } from "react-router-dom";
import img from "../../../src/assets/banner.jpg"

const Banner = () => {
    return (
        <div className=" flex items-center justify-center flex-col">
            <div className="bg-[#9538E2] py-8 px-4 rounded-2xl flex justify-center items-center flex-col w-full h-screen ">
              
               <h1 className="text-2xl md:text-4xl font-bold text-white">Upgrade Your Tech Accessorize with</h1>
               <h1 className="text-2xl md:text-4xl font-bold text-white my-2"> Gadget Heaven Accessories</h1>
              
                <p className=" text-white mt-2 mb-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <Link>
                <button className=" border rounded-3xl px-3 py-2 bg-white text-[#9538E2] font-semibold">Shope Now</button>
                </Link>


            </div>
            {/* <div className=" w-full text-center "> 
              <img src={img} alt="" className="w-2/4" />
            </div> */}
        </div>
    );
};

export default Banner;