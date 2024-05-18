import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const singleFoodDetails = useLoaderData();
    console.log(singleFoodDetails);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default SingleFood;