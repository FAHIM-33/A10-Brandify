import { useLoaderData } from "react-router-dom";


const Update = () => {
    let data = useLoaderData()
    console.log(data.data)
    return (
        <div>
            
        </div>
    );
};

export default Update;