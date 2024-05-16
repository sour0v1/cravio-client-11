import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-[#FECDA6] py-6 px-6 border-b-2 border-[#112A46]">
            <h2 className="font-poppins text-4xl font-bold">Cravio</h2>
            <div id="nav" className="flex justify-center items-center gap-6 text-[#112A46] font-poppins">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/available-foods'}>Available Foods</NavLink>
                {/* <NavLink>Add Food</NavLink>
                <NavLink>Mange My Food</NavLink>
                <NavLink>My Food Request</NavLink> */}
                <NavLink to={'/login'}>Log In</NavLink>
                <NavLink to={'/signup'}>Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;