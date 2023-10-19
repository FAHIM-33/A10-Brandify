import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const BrandPage = () => {
    let { data } = useLoaderData()
    let brand = useParams()
// console.log(products)

    return (
        <div className="my-12">
            <h1 className=" text-3xl lg:text-5xl text-mid font-medium bg-fadegray my-4 p-4 text-center">{brand.title} products</h1>

            <div className="flex flex-wrap gap-8 p-4 justify-center ">
                {
                    data.length > 0 ?
                    data.map(obj => <Product
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