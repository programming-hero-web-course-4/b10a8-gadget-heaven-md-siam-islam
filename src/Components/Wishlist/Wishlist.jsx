import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getwish ,updateWish} from "../Jsfile/Local";

const Wishlist = () => {
    const data = useLoaderData();
    const [wish, setWish] = useState([]); 

    useEffect(() => {
        const addWish = getwish();
        const wishItems = addWish.map(id => data.find(item => item.product_id === id));
        setWish(wishItems);
    }, [data]);


    const handleDelect =(productId) =>{
        const delectProduct = wish.filter(d => d.product_id !== productId)
        setWish(delectProduct)

        const updateWishid = getwish().filter(id => id !== productId)
        updateWish(updateWishid)
    }

    return (
        <div>
            <p className="text-2xl font-bold">WishList</p>
            
            {wish.length > 0 ? (
                wish.map((item, index) => (
                    <div key={index} className="flex justify-between gap-8 w-10/12 mx-auto my-7 bg-white shadow-xl rounded-2xl px-5 py-3">
                        <img src={item?.product_image} alt={item?.product_title} />
                        <div>
                            <h1 className="text-2xl mb-4">{item?.product_title}</h1>
                            <p>{item?.description}</p>
                            <h1 className="text-base font-bold mt-4">Price: ${item?.price}</h1>

                            <button className="rounded-2xl border-2 bg-[#9538E2] px-6 py-2 mt-5 font-semibold text-white">Add to card</button>
                        </div>


                        <div>
                        <button onClick={() => handleDelect(item.product_id)} className="">
                            <img src="https://img.icons8.com/?size=24&id=98131&format=png" alt="Delete" />
                        </button>
                      </div>

                        
                    </div>
                    


                ))
            ) : (
                <p className="text-center my-10">No items in wishlist.</p>
            )}
        </div>
    );
};

export default Wishlist;
