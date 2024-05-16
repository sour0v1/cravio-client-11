import { NavLink } from "react-router-dom";
import './Navbar.css'
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
// ${!open ? 'left-[400px]': 'left-[800px]'}
const Navbar = () => {
    const [open, setOpen] = useState(true);
    const handleClassName = () =>{
        setOpen(!open);
    }
    return (
        <div className="flex justify-between items-center bg-[#FECDA6] py-6 px-6 relative">
            <h2 className="font-poppins text-4xl font-bold">Cravio</h2>
            
            <div id="nav" className={`flex flex-col lg:flex-row lg:justify-center lg:items-center pt-8 absolute lg:static bg-[#FECDA6] top-0 ${open ? 'right-[600px]' : 'left-[0px]'} h-screen lg:h-auto w-1/2 lg:w-auto px-6 lg:p-0 gap-6 text-[#112A46] font-poppins`}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/available-foods'}>Available Foods</NavLink>
                <NavLink to={'/add-food'}>Add Food</NavLink>
                <NavLink to={'/manage-food'}>Mange My Food</NavLink>
                <NavLink to={'/food-request'}>My Food Request</NavLink>
                <NavLink to={'/login'}>Log In</NavLink>
                <NavLink to={'/signup'}>Sign Up</NavLink>
            </div>
            <button onClick={handleClassName} className="lg:hidden text-2xl">{open ? <SlMenu /> : <RxCross1 />}</button>
        </div>
    );
};

export default Navbar;