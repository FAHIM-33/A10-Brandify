import axios from "axios";
import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";


const Locations = () => {
    let [location, setLocation] = useState([])
    useEffect(()=>{
        axios.get('/location.json')
        .then(({data}) => setLocation(data))
    },[])
    console.log(location)
    return (
        <div className="my-16">
            <h2 className="text-5xl text-mid text-center">Our locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 rounded-md border-2 border-low m-4">
                {
                    location.map(obj => <LocationCard
                    key={obj.id}
                    location={obj}
                    ></LocationCard>)
                }
            </div>
        </div>
    );
};

export default Locations;