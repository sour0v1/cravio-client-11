import { Link } from 'react-router-dom';
import backImage from '../assets/bg-1.jpg'

const SignUp = () => {
    return (
        <div className='bg-cover bg-center h-screen py-9' style={{ backgroundImage: `url(${backImage})` }}>
            <form className='bg-[#F9EFDB] h-full w-2/3 md:w-2/3 lg:w-1/3 mx-auto flex flex-col justify-center items-center py-6 font-poppins rounded shadow-md gap-3'>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="name">Name</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="text" name="name" id="" />
                </div>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="email">Email</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="email" name="email" id="" required/>
                </div>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="password">Password</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="password" name="password" id="" required/>
                </div>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="url">Photo URL</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="text" name="url" id="" />
                </div>
                <input className='w-2/3 my-2 text-white rounded py-2 bg-[#FF9130]' type="submit" value={'Sign Up'} name="" id="" />
                <p>Already signed up? <Link className='underline' to={'/login'}>Log In</Link></p>
            </form>

        </div>
    );
};

export default SignUp;