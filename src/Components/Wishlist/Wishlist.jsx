import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getwish } from "../Jsfile/Local";

const Wishlist = () => {
    const data = useLoaderData();
    const [wish, setWish] = useState([]); 

    useEffect(() => {
        const addWish = getwish();
        const wishItems = addWish.map(id => data.find(item => item.product_id === id));
        setWish(wishItems);
    }, [data]);

    return (
        <div>
            <p className="text-2xl font-bold">WishList</p>
            
            {wish.length > 0 ? (
                wish.map((item, index) => (
                    <div key={index} className="flex gap-8 w-10/12 mx-auto my-7 bg-white shadow-xl rounded-2xl">
                        <img src={item?.product_image} alt={item?.product_title} />
                        <div>
                            <h1 className="text-2xl mb-4">{item?.product_title}</h1>
                            <p>{item?.description}</p>
                            <h1 className="text-base font-bold mt-4">Price: ${item?.price}</h1>

                            <button className="rounded-2xl border-2 bg-[#9538E2] px-6 py-2 mt-5 font-semibold text-white">Add to card</button>
                        </div>

                        
                    </div>
                    


                ))
            ) : (
                <p className="text-center mt-10">No items in wishlist.</p>
            )}
        </div>
    );
};

export default Wishlist;
