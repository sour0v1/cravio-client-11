import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableFoodCard from './AvailableFoodCard';

const AvailableFoods = () => {
    const foodData = useLoaderData();
    console.log(foodData);
    return (
        <div className='max-w-6xl mx-auto my-12'>
            <h1>Available foods : {foodData.length}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0'>
                {
                    foodData.map(food => <AvailableFoodCard food = {food} key={food._id}></AvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;