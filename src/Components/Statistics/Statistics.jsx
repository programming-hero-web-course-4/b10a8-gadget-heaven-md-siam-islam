
import { list } from "postcss";
import { useLoaderData, useParams,useNavigate } from "react-router-dom";
import { addStore, addwish } from "../Jsfile/Local";
import { toast } from 'react-toastify';

import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";





const Statistics = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const data = useLoaderData();


    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

 

const handleAddtoCart = (id) => {
    addStore(id);
    toast.success("Added to cart!");
};

const handlewish = (id) => {
    addwish(id);
    toast.success("Added to wishlist!");
};
    

    const productsToShow = data ? (productId ? data.filter(d => d.product_id == productId) : data) : [];

    return (
        <div>
           
            <div className='bg-[#9538E2] px-5 py-4 rounded-3xl mt-10 flex justify-center items-center flex-col h-[300px]'>
                <h1 className='text-2xl md:text-4xl font-extrabold text-white mb-5'>Product Details</h1>
                <p className='text-white text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to</p>
                <p className='text-white text-base'>the coolest accessories, we have it all!</p>
            </div>

           
                {productsToShow.length > 0 ? (
                    productsToShow.map(product => (
                        
                    <div className=" flex flex-col lg:flex-row   w-11/12 mx-auto bg-white px-6 py-8 mb-32 -mt-20 rounded-2xl shadow-xl">


                        <div className="">
                        <img
                        src={product.product_image}
                        className="max-w-sm rounded-lg " />
                        </div>

                        <div className="ml-10">
                        <h1 className="text-4xl font-bold text-black">{product.product_title}</h1>
                        <p className="py-6 text-black">
                          Price : $  {product.price}
                        </p>
                        <button className="border-2 border-[#6bf739] text-[#6bf739] px-2 py-1 rounded-3xl">In stock</button>

                        <p className="text-black my-2">{product.description}</p>

                        <h1 className="text-black font-bold text-2xl">Specification:</h1>

                        <ul className="mt-5">
                            {
                                product.Specification.map(e => <li className="list-disc ml-8 text-black text-base">{e}</li>)
                            }
                        </ul>

                        <h1 className="text-black font-bold text-2xl mt-4">Rating :</h1>

                        <div className="flex items-center gap-4 mb-4">
                            <div>
                            <ReactStars
                                count={5}
                                value={product.rating}
                                size={24}
                                activeColor="#ffd700"
                                onChange={ratingChanged}
                                isHalf={true}
                                edit={false}
                            />
                            </div>

                            <div>
                                <h1 className="font-semibold">{product?.rating}</h1>
                            </div>
                        </div>


                        <div className="flex items-center gap-2">
                            <button onClick={() => handleAddtoCart(product.product_id)}  className="text-black font-semibold bg-[#9538E2] px-4 py-3 rounded-2xl flex items-center justify-between gap-2">
                                Add to cart
                                <img src="https://img.icons8.com/?size=25&id=TmwMMf8vZgfS&format=png" alt="" className="" />
                            </button>

                            <button onClick={() => handlewish(product.product_id)} className="border rounded-full p-1"> <img src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" /></button>
                        </div>

                        </div>

                    </div>
                
                                        ))
                ) : (
                    <p className="text-center text-gray-700 mt-5  text-4xl font-bold flex justify-center items-center">No products available.</p>
                )}

                
            </div>
        
    );
};

export default Statistics;
