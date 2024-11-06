
import { useLoaderData, useParams } from "react-router-dom";
import Card3 from "./Card3";
import { useEffect, useState } from "react";

const Card2 = () => {
    const { categories } = useParams(); 
    const data = useLoaderData();
    const [card, setCard] = useState([]); 

    useEffect(() => {
        if (data) { 
            if (categories) {
              
                const filteredData = data.filter(item => item.category === categories);
                setCard(filteredData);
            } else {
               
                setCard(data);
            }
        }
    }, [data, categories]);

    

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-20">
            {
                card.length > 0 ? (
                    
                    card.map((item, index) => (
                        <Card3 key={index} data={item} />
                    ))
                ) : (
                    
                    <p className="text-center text-3xl text-green-600 font-bold ml-20">No products found for the selected category.</p>
                )
            }
        </div>
        
        </>
    );
};

export default Card2;

