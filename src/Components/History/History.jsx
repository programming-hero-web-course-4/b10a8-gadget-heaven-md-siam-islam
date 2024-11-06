import { useLoaderData } from "react-router-dom";
import { LineChart, Line,  XAxis, YAxis } from 'recharts';;

const History = () => {
    
    const data = useLoaderData();

    return (
        <div className="w-10/12 mx-auto my-44">

           <div>
            <h1 className="text-center text-4xl font-bold my-10 text-[#9538E2]">Price Line Chart :</h1>
            
           <LineChart width={900} height={600} data={data}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            
           
            <XAxis dataKey="category" />
            <YAxis />
        </LineChart>
           </div>

           <div>
            <h1 className="text-center text-4xl font-bold my-10 text-[#9538E2]">Rating Line Chart :</h1>
            
           <LineChart width={900} height={600} data={data}>
            
            <Line  dataKey="rating" stroke="#8884d8" />
           
            <XAxis dataKey="category" />
            <YAxis />
        </LineChart>
           </div>


        </div>
    );
};

export default History;
