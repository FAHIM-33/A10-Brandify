import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseAuth/AuthProvider";


const Navbar = () => {
    let { user, logOut } = useContext(AuthContext)
    let [show, setShow] = useState(false)
    let links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add product</NavLink>
        <NavLink to='/cart'>My Cart</NavLink>
    </>


        function handleClick(){
            logOut()
        }

    return (
        <nav className="grid grid-cols-3 bg-low text-white p-2">
            <div className="flex items-center justify-start">
                <img src="/pngwing.com.png" alt="logo" className="w-16 -m-3" />
                <p className="text-xl">Brandify</p>
            </div>
            <div className="flex items-center gap-3 justify-center">
                {links}
            </div>
            <div className="flex items-center justify-end">
                {
                    user ? <figure className="flex gap-2 items-center">
                        {
                            user?.photoURL ? <img className="rounded-full w-10" src={user.photoURL} alt="" />
                                :
                                <img className="rounded-full w-10" src="https://i.ibb.co/FwYsHLt/pngwing-com-1.png" alt="" />
                        }
                        <div className="bg-low border rounded-md py-1 px-2 ">
                            {/* <p className="whitespace-nowrap bg-mid">{user.displayName}</p> */}
                            <button onClick={handleClick} className="btn ">Logout</button>
                        </div>
                    </figure>
                        :
                        <Link to='/login' className="btn bg-white hover:bg-amber-400 text-low font-semibold">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;