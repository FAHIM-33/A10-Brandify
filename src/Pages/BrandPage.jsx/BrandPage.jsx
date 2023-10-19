import {  useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const BrandPage = () => {
    let { data } = useLoaderData()
    let brand = useParams()

    let [products, setPorducts] = useState(data)

    console.log(products)


    return (
        <div className="my-12">
            <h1 className="text-5xl text-mid font-medium bg-fadegray my-4 p-4 text-center">{brand.title} products</h1>

            <div className="flex gap-8 overflow-auto p-4 flex-wrap">
                {
                    products.length > 0 ?
                    products.map(obj => <Product
                        key={obj._id}
                        data={obj}
                    ></Product>)
                    :
                    <h1 className="text-5xl text-center bg-red-700 w-full text-white p-4 animate-pulse rounded-md">No Products Available</h1>
                }
            </div>
        </div>
    );
};

export default BrandPage;