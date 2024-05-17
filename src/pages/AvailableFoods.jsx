import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableFoodCard from './AvailableFoodCard';
import { data } from 'autoprefixer';

const AvailableFoods = () => {
    const [foodData, setFoodData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/available-foods?availability=available`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFoodData(data);
            })
    }, [])
    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchValue = form.search.value;
        console.log(searchValue);

        const matchFood = foodData.filter(food => food.foodName.toLowerCase().includes(searchValue.toLowerCase()))
        console.log(matchFood);
        matchFood == [] ?
            setFoodData(matchFood) : setFoodData(null);
    }
    // const foodData = useLoaderData();
    // console.log(foodData);
    return (
        <div className='max-w-6xl mx-auto my-12'>
            <h1 className='text-center text-2xl font-bold'>Available Foods</h1>
            <div className='mx-6 lg:mx-0 flex flex-col lg:flex-row justify-between gap-3 items-center my-6 font-poppins'>
                <form onSubmit={handleSearch} className='flex justify-center items-center gap-3 w-3/4 lg:w-2/3'>
                    <input className='py-2 pl-3 w-full bg-gray-100' placeholder='Enter food name' type="text" name="search" id="" />
                    <input type='submit' value={'Search'} className='btn' />
                </form>
                <div className='flex justify-center items-center gap-3'>
                    <p>Filter By : </p>

                    <select className='border-2 border-gray-200 py-2 rounded' name="" id="">
                        <option value="all">All</option>
                        <option value="">Today</option>
                        <option value="">This Week</option>
                        <option value="">This Month</option>
                    </select>
                </div>
            </div>
            {
                foodData ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0'>
                    {
                        foodData?.map(food => <AvailableFoodCard food={food} key={food._id}></AvailableFoodCard>)
                    }
                </div> : <p className='text-red-600'>Could not match with any food you have searched for</p>
            }
        </div>
    );
};

export default AvailableFoods;