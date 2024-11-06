
// import { useEffect, useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { getStore, clearStore } from "../Jsfile/Local"; 
// import ConfirmationModal from "../Modal/ConfirmationModal";

// const Addcart = () => {
//     const data = useLoaderData();
//     const [store, setStore] = useState([]);
//     const [isSorted, setIsSorted] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storeData = getStore();
//         const addCart = storeData.map(productId => data.find(item => item.product_id === productId));
//         setStore(addCart);
//     }, [data]);

//     const totalCost = store.reduce((acc, item) => acc + (item?.price || 0), 0);

//     const handleSortByPrice = () => {
//         const sortedStore = [...store].sort((a, b) => (b.price || 0) - (a.price || 0));
//         setStore(isSorted ? store : sortedStore);
//         setIsSorted(!isSorted);
//     };

//     const handlePurchase = () => {
//         setShowModal(true);
//     };


    

//     const handleConfirmPurchase = () => {
//         clearStore(); 
//         setShowModal(false);
//         navigate("/");
//     };

//     return (
//         <div>
//             <div className="flex justify-between items-center my-20">
//                 <div>
//                     <h2 className="text-base font-bold">Cart Items</h2>
//                 </div>

//                 <div className="flex gap-5 items-center">
//                     <h1 className="text-base font-bold">Total Cost : $ {totalCost}</h1>

//                     <button 
//                         onClick={handleSortByPrice} 
//                         className="border border-[#9538E2] font-semibold px-5 rounded-2xl py-2">
//                         Sort by Price
//                     </button>

//                     <button 
//                         onClick={handlePurchase} 
//                         className="border bg-[#9538E2] font-semibold px-5 rounded-2xl py-2 text-white">
//                         Purchase
//                     </button>
//                 </div>
//             </div>

//             {store.map((item, index) => (
//                 <div key={index} className="flex gap-8 w-10/12 mx-auto my-7 bg-white shadow-xl rounded-2xl py-4 px-5 border-2 justify-between">
//                     <img src={item?.product_image} alt={item?.product_title} className="ml-5" />
//                     <div className=" ">
//                         <div>
//                         <h1 className="text-2xl mb-4">{item?.product_title}</h1>
//                         <h1>{item?.description}</h1>
//                         <h1 className="text-base font-bold mt-4">price : ${item?.price}</h1>
//                         </div>

                       
//                     </div>
//                         <div>
//                             <button className="">
//                                 <img src="https://img.icons8.com/?size=24&id=98131&format=png" alt="" />
//                             </button>
//                         </div>
//                 </div>
//             ))}

//             {showModal && (
//                 <ConfirmationModal 
//                     onClose={() => setShowModal(false)}
//                     onConfirm={handleConfirmPurchase}
//                 />
//             )}
//         </div>
//     );
// };

// export default Addcart;

import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStore, clearStore,updateStore } from "../Jsfile/Local"; 
import ConfirmationModal from "../Modal/ConfirmationModal";

const Addcart = () => {
    const data = useLoaderData();
    const [store, setStore] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storeData = getStore();
        const addCart = storeData.map(productId => data.find(item => item.product_id === productId));
        setStore(addCart);
    }, [data]);

    const totalCost = store.reduce((acc, item) => acc + (item?.price || 0), 0);

    const handleSortByPrice = () => {
        const sortedStore = [...store].sort((a, b) => (b.price || 0) - (a.price || 0));
        setStore(isSorted ? store : sortedStore);
        setIsSorted(!isSorted);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleConfirmPurchase = () => {
        clearStore(); 
        setShowModal(false);
        navigate("/");
    };

    
    const handleDelete = (productId) => {
        const updatedStore = store.filter(item => item.product_id !== productId);
        setStore(updatedStore);

        const updatedProductIds = getStore().filter(id => id !== productId);
        updateStore(updatedProductIds); 
    };

    return (
        <div>
            <div className="flex justify-between items-center my-20">
                <div>
                    <h2 className="text-base font-bold">Cart Items</h2>
                </div>

                <div className="flex gap-5 items-center">
                    <h1 className="text-base font-bold">Total Cost : $ {totalCost}</h1>

                    <button 
                        onClick={handleSortByPrice} 
                        className="border border-[#9538E2] font-semibold px-5 rounded-2xl py-2">
                        Sort by Price
                    </button>

                    <button 
                        onClick={handlePurchase} 
                        className="border bg-[#9538E2] font-semibold px-5 rounded-2xl py-2 text-white">
                        Purchase
                    </button>
                </div>
            </div>

            {store.map((item, index) => (
                <div key={index} className="flex gap-8 w-10/12 mx-auto my-7 bg-white shadow-xl rounded-2xl py-4 px-5 border-2 justify-between">
                    <img src={item?.product_image} alt={item?.product_title} className="ml-5" />
                    <div>
                        <h1 className="text-2xl mb-4">{item?.product_title}</h1>
                        <h1>{item?.description}</h1>
                        <h1 className="text-base font-bold mt-4">price : ${item?.price}</h1>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(item.product_id)} className="">
                            <img src="https://img.icons8.com/?size=24&id=98131&format=png" alt="Delete" />
                        </button>
                    </div>
                </div>
            ) 
        )
            }

            {showModal && (
                <ConfirmationModal 
                    onClose={() => setShowModal(false)}
                    onConfirm={handleConfirmPurchase}
                />
            )}
        </div>
    );
};

export default Addcart;
