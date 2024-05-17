import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (user) {
        return children;
    }
    if (loading) {
        return <p className='w-full h-screen flex justify-center items-center'><span className="loading loading-dots loading-lg"></span></p>
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;