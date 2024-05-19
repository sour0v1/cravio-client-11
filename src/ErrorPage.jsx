import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-2'>
            {/* <h1 className='text-5xl font-bold'>Oops!</h1> */}
            <h1 className=' text-5xl font-bold'>{error.status}</h1>
            <p className='text-xl'>{error.statusText}</p>
            <Link to={'/'} className='underline'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;