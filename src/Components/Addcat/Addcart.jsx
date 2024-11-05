
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStore } from "../Jsfile/Local";

const Addcart = () => {
    const data = useLoaderData();
    const [store, setStore] = useState([]);

    useEffect(() => {
        const storeData = getStore();
        const addCart = storeData.map(productId => data.find(item => item.product_id === productId));
        setStore(addCart);
    }, [data]);

    return (
        <div>
            <div className="flex justify-between items-center my-20"> 
            <div>
            <h2 className="text-base font-bold">Cart Items</h2>
            </div>

            <div className="flex gap-5 items-center">
                <h1 className="text-base font-bold">Total Cost : $</h1>

                <button className="border border-[#9538E2] font-semibold px-5 rounded-2xl py-2">
                    Sort by Price
                </button>

                <button className="border bg-[#9538E2] font-semibold px-5 rounded-2xl py-2 text-white">
                Purchase
                </button>
            </div>
                
            </div>
            {store.map((item, index) => (
                
                
                <div key={index} className="flex gap-8 w-10/12 mx-auto my-7 bg-white shadow-xl rounded-2xl">
                    
                    <img src={item?.product_image} alt={item?.product_title} />
                   <div>

                  <h1 className="text-2xl mb-4">{item?.product_title}</h1>
                  
                    

                   <h1>{item?.description}</h1>
                   <h1 className="text-base font-bold mt-4">price : ${item?.price}</h1>

                   </div>
                </div>
            ))}
            
        </div>
    );
};

export default Addcart;
