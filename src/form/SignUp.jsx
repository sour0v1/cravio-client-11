import { Link, useNavigate } from 'react-router-dom';
import backImage from '../assets/sign-img.jpg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        // console.log(name,email, password, photoUrl);
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                form.reset();
                toast('Successfully Signed Up!');
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        // console.log('Profile updated');
                        navigate('/');
                    })
                    .catch(error => {
                        // console.log(error.message);
                    })
            })
            .catch(error => {
                // console.log(error.message);
            })
    }
    return (
        <div className='bg-cover bg-center py-9 border-[#FF9130] border-y-2' style={{ backgroundImage: `url(${backImage})` }}>
            <form onSubmit={handleSignUp} className='bg-[#F9EFDB] h-full w-3/4 md:w-2/3 lg:w-1/3 mx-auto flex flex-col justify-center items-center py-6 font-poppins rounded shadow-md gap-3'>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="name">Name</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="text" name="name" id="name" />
                </div>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="email">Email</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="email" name="email" id="email" autoComplete='username' required />
                </div>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="password">Password</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="password" name="password" id="password" autoComplete="current-password" required />
                </div>
                <div className='flex flex-col gap-2 w-2/3'>
                    <label htmlFor="url">Photo URL</label>
                    <input className='border py-2 px-3 outline-[#FF9130]' type="text" name="url" id="url" />
                </div>
                <input className='w-2/3 my-2 text-white rounded py-2 bg-[#FF9130]' type="submit" value={'Sign Up'} name="" id="" />
                <p>Already signed up? <Link className='underline' to={'/login'}>Log In</Link></p>
            </form>
        <ToastContainer autoClose = '2000'></ToastContainer>
        </div>
    );
};

export default SignUp;