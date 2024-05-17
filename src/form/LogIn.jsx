import backImage from '../assets/bg-1.jpg'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const { emailSignIn } = useContext(AuthContext);
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // email sign in
    const handleEmailSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailSignIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    // handle google sign in
    const handlegitHubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='bg-cover bg-center py-9 flex justify-center items-center border-[#FF9130] border-y-2' style={{ backgroundImage: `url(${backImage})` }}>
            <div className='bg-[#F9EFDB] h-fit w-3/4 md:w-2/3 lg:w-1/3 mx-auto py-6 font-poppins rounded shadow-md gap-3'>

                <form onSubmit={handleEmailSignIn} className='w-full flex flex-col justify-center items-center gap-3'>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <label htmlFor="email">Email</label>
                        <input className='border py-2 px-3 outline-[#FF9130]' type="email" name="email" id="email" required autoComplete='username' />
                    </div>
                    <div className='flex flex-col gap-2 w-2/3'>
                        <label htmlFor="password">Password</label>
                        <input className='border py-2 px-3 outline-[#FF9130]' type="password" name="password" id="password" autoComplete="current-password" required />
                    </div>
                    <input className='w-2/3 text-white rounded py-2 bg-[#FF9130] mt-2' type="submit" value={'Log In'} name="" />
                    <p className='mb-2'>Or</p>
                </form>
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <button onClick={handleGoogleSignIn} className='py-2 border flex justify-center items-center gap-3 bg-white w-2/3'>
                        <span>Sign In With</span>
                        <span className='text-xl'><FcGoogle /></span>
                    </button>
                    <button onClick={handlegitHubSignIn} className='py-2 border flex justify-center items-center gap-3 bg-white w-2/3'>
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