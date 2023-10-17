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
        <nav className="grid grid-cols-3 bg-low text-white">
            <div className=""></div> 
            <div className="p-4 flex gap-3">
                {links  }
            </div>
            <div className=""></div>
        </nav>
    );
};

export default Navbar;