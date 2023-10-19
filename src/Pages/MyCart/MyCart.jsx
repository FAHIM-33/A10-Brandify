
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';
import { useState } from 'react';

const MyCart = () => {
    let { data } = useLoaderData()
    let [cart, setCart] = useState(data)
    

    return (
        <div className='my-12'>
            <h1 className='text-5xl text-center text-mid'>Your Cart</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg p-8 w-4/5 mx-auto border-2 border-low'>
                {
                    cart.map(obj => <CartCard
                    key={obj._id}
                    data={obj}
                    cart={cart}
                    setCart={setCart}
                    ></CartCard>)
                }
            </div>
        </div>
    );
};


export default MyCart;