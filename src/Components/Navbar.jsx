import { NavLink } from "react-router-dom";


const Navbar = () => {
    let links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add product</NavLink>
        {/* <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/'>Home</NavLink> */}
    </>
    return (
        <nav className="grid grid-cols-3 bg-low text-white p-2">
            <div className="flex items-center justify-start">
                <img src="/pngwing.com.png" alt="logo" className="w-16 -m-3" />
                <p className="text-xl">Brandify</p>
            </div>
            <div className="flex items-center gap-3 justify-center">
                {links}
            </div>
            <div className="">
                
            </div>
        </nav>
    );
};

export default Navbar;