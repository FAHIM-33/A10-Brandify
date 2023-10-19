import { useContext, useState } from "react";
import { RiMenu2Fill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseAuth/AuthProvider";


const Navbar = () => {
    let { user, logOut } = useContext(AuthContext)
    let [open, setOpen] = useState(false)



    let links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add product</NavLink>
        <NavLink to='/cart'>My Cart</NavLink>
    </>

    function handleClick() {
        logOut()
    }

    return (

        <div >
            <nav className="hidden md:grid grid-cols-3 bg-low text-white p-2">
                <div className="flex items-center justify-start">
                    <img src="/pngwing.com.png" alt="logo" className="w-16 -m-3" />
                    <p className="text-xl">Brandify</p>
                </div>

                <div className="flex items-center gap-3 justify-center">
                    {links}
                </div>

                <div className="flex items-center justify-end">
                    {
                        user ? <figure id="dark-mode-toggle" className="flex gap-2 items-center">
                            {
                                user?.photoURL ? <img className="rounded-full w-10" src={user.photoURL} alt="" />
                                    :
                                    <img className="rounded-full w-10" src="https://i.ibb.co/FwYsHLt/pngwing-com-1.png" alt="" />
                            }
                            <div className="bg-low border rounded-md py-1 px-2 ">
                                <button onClick={handleClick} className="btn ">Logout</button>
                            </div>

                        </figure>
                            :
                            <Link to='/login' className="btn bg-white hover:bg-amber-400 text-low font-semibold">Login</Link>
                    }
                </div>
            </nav>





            {/* For mobile */}
            <nav className="grid md:hidden items-center bg-low grid-cols-2 px-1 py-1 abosolute z-20 text-white ">

                <div className="flex items-center justify-start">
                    <div onClick={() => setOpen(!open)} className="text-3xl mx-1">
                        {
                            open ? <AiFillCloseCircle></AiFillCloseCircle>
                                :
                                <RiMenu2Fill></RiMenu2Fill>
                        }
                    </div>
                    <img src="/pngwing.com.png" alt="logo" className="w-16 -m-3" />
                    <p className="text-xl">Brandify</p>



                    <ul className={`font-semibold flex flex-col absolute z-50 top-12 rounded-br-md backdrop-blur-sm bg-[#00000073] border border-[#222] text-white h-screen p-4  ${open ? 'left-0' : '-left-48'} duration-200`}>
                        {links}
                    </ul>
                </div>



                <div className="flex items-center justify-end">
                    {
                        user ? <figure id="dark-mode-toggle" className="flex gap-2 items-center">
                            {
                                user?.photoURL ? <img className="rounded-full w-10" src={user.photoURL} alt="" />
                                    :
                                    <img className="rounded-full w-10" src="https://i.ibb.co/FwYsHLt/pngwing-com-1.png" alt="" />
                            }
                            <div className="bg-low border rounded-md py-1 px-2 ">
                                <button onClick={handleClick} className="btn ">Logout</button>
                            </div>

                        </figure>
                            :
                            <Link to='/login' className="btn bg-white mr-2 hover:bg-amber-400 text-low font-semibold">Login</Link>
                    }
                </div>

            </nav>


        </div>
    );
};

export default Navbar;