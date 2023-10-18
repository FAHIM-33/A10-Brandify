import pt from 'prop-types'
import { Link } from 'react-router-dom';

const Product = ({ data }) => {
    console.log(data.length)
    let { _id, name, brand, url, rating, type, price } = data



    return (
        <div className="rounded-md overflow-hidden bg-fadegray">
            <figure>
                <img src={url} alt="" className="h-60 w-72 object-center object-contain" />
            </figure>
            <h1 className="text-2xl text-center bg-mid text-white">{name}</h1>
            <div className="flex my-2 bg-low  ">
                <p className=" pl-2 text-white ">{type} by</p>
                <p className="  px-2 flex-grow text-white">{brand}</p>
                <p className=" text-amber-400 px-2 text-end font-medium ">{rating}/5</p>
            </div>
            <p className="text-3xl pr-2 text-end font-semibold text-mid">$ {price}</p>
            <div className="flex justify-between my-2 font-semibold">
                <Link to={`/update/${_id}`}>
                    <button className="btn bg-mid text-amber-400 rounded-md p-2 mx-2">Update</button>
                </Link>
                <Link to={`/details/${_id}`}>
                    <button className="btn bg-amber-400 text-mid p-2 rounded-md mx-2">Details</button>
                </Link>
            </div>
        </div>
    );
};
Product.propTypes = {
    data: pt.object,
}
export default Product;