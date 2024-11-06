import { Link } from "react-router-dom";
import img from "../../../src/assets/banner.jpg"

const Banner = () => {
    return (
        <div className=" flex items-center justify-center flex-col -mt-24 relative md:mb-[450px] space-y-5">
            <div className="bg-[#9538E2]  px-4 rounded-b-2xl flex justify-center items-center flex-col w-full pt-24 pb-64 ">
              
               <h1 className="text-2xl md:text-5xl font-bold text-white">Upgrade Your Tech Accessorize with</h1>
               <h1 className="text-2xl md:text-5xl font-bold text-white my-2"> Gadget Heaven Accessories</h1>
              
                <p className=" text-white mt-2 mb-3 w-[50%] text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <Link>
                <button className=" border rounded-3xl px-3 py-2 bg-white text-[#9538E2] font-semibold">Shope Now</button>
                </Link>


            </div>
            <div className="  text-center absolute right-36 top-80 border-2 border-white rounded-2xl ml-32"> 
              <img src={img} alt="" className="md:w-[1050px] md:h-[550px] object-cover rounded-2xl pt-2 px-2 " />
            </div>
        </div>
    );
};

export default Banner;