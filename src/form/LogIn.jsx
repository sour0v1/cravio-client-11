import backImage from '../assets/bg-1.jpg'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const LogIn = () => {
    return (
        <div className='bg-cover bg-center h-screen py-9 flex justify-center items-center' style={{ backgroundImage: `url(${backImage})` }}>
            <div className='bg-[#F9EFDB] h-fit w-2/3 md:w-2/3 lg:w-1/3 mx-auto py-6 font-poppins rounded shadow-md gap-3'>

                <form className='w-full flex flex-col justify-center items-center gap-3'>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <label htmlFor="email">Email</label>
                        <input className='border py-2 px-3 outline-[#FF9130]' type="email" name="email" id="" required />
                    </div>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <label htmlFor="password">Password</label>
                        <input className='border py-2 px-3 outline-[#FF9130]' type="password" name="password" id="" required/>
                    </div>
                    <input className='w-2/3 text-white rounded py-2 bg-[#FF9130] mt-2' type="submit" value={'Log In'} name="" id="" />
                    <p className='mb-2'>Or</p>
                </form>
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <button className='py-2 border flex justify-center items-center gap-3 bg-white w-2/3'>
                        <span>Sign In With</span>
                        <span className='text-xl'><FcGoogle /></span>
                    </button>
                    <button className='py-2 border flex justify-center items-center gap-3 bg-white w-2/3'>
                        <span>Sign In With</span>
                        <span className='text-xl'><FaGithub /></span>
                    </button>
                    <p>New here? <Link className='underline' to={'/signup'}>Sign Up</Link></p>
                </div>
            </div>

        </div>
    );
};

export default LogIn;