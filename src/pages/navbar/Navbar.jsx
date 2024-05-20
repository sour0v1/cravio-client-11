import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { SlMenu } from "react-icons/sl";
import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
// ${!open ? 'left-[400px]': 'left-[800px]'}
const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClassName = () => {
        setOpen(!open);
    }
    // handle logout
    const handleLogOut = () =>{
        signOut(auth)
            .then(() => {
                // console.log('signed out successfully');
                navigate('/login');
            })
            .catch(error =>{
                // console.log(error);
            })
    }
    return (
        <div className="flex justify-between items-center bg-[#FECDA6] py-6 px-6 relative lg:sticky top-0 z-50">
            <h2 className="font-poppins text-4xl font-bold">Cravio</h2>

            <div id="nav" className={`flex flex-col lg:flex-row lg:justify-center lg:items-center pt-8 absolute lg:static bg-[#FECDA6] top-0 ${open ? 'right-[600px]' : 'left-[0px]'} h-screen lg:h-auto w-1/2 lg:w-auto px-6 lg:p-0 gap-6 text-[#112A46] font-poppins`}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/available-foods'}>Available Foods</NavLink>
                <NavLink to={'/add-food'}>Add Food</NavLink>
                <NavLink to={'/manage-food'}>Mange My Food</NavLink>
                <NavLink to={'/food-request'}>My Food Request</NavLink>
                {
                    user ? <button className="text-left" onClick={handleLogOut}>Log Out</button> :
                        <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-6">
                            <NavLink to={'/login'}>Log In</NavLink>
                            <NavLink to={'/signup'}>Sign Up</NavLink>
                        </div>
                }
            </div>
            <button onClick={handleClassName} className="lg:hidden text-2xl">{open ? <SlMenu /> : <RxCross1 />}</button>
        </div>
    );
};

export default Navbar;