import { Link, useRouteError } from 'react-router-dom';
import anmaition from '../public/panda.json'
import { useLottie } from 'lottie-react';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    const options = {
        animationData: anmaition,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div className='max-w-[400px] mx-auto h-screen flex flex-col justify-center items-center'>
            {View}
            <Link to={'/'} className='underline'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;