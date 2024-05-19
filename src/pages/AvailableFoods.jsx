import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableFoodCard from './AvailableFoodCard';
import dayjs from 'dayjs';
import { AuthContext } from '../provider/AuthProvider';

const AvailableFoods = () => {
    const { loading } = useContext(AuthContext);
    // state
    const [foodData, setFoodData] = useState([]);
    const [copyFood, setCopyFood] = useState([]);

    console.log(copyFood)
    useEffect(() => {
        fetch(`http://localhost:5000/available-foods?availability=available`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFoodData(data);
                setCopyFood([...data]);
            })
    }, [])
    // sort functionality
    // const handleSort = e =>{
    //     const sortValue = e.target.value;
    //     console.log(sortValue);
    // }
    // search functionality
    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchValue = form.search.value;
        console.log(searchValue);
        const matchFood = foodData.filter(food => food.foodName.toLowerCase().includes(searchValue.toLowerCase()))
        console.log(matchFood);
        matchFood.length == 0 ?
            setCopyFood(null) : setCopyFood(matchFood)
    }
    // Sort functionality
    const handleSort = e => {
        e.preventDefault();
        const form = e.target;
        const sortValue = form.value;
        console.log(sortValue);
        // sort by today
        if(sortValue === 'all'){
            setCopyFood([...foodData]);
        }
        
        if (sortValue === 'order-asc') {
            const sortedFood = copyFood.sort((a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf());
            setCopyFood([...sortedFood])
        }
        if (sortValue === 'order-desc') {
            const sortedFood = copyFood.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
            setCopyFood([...sortedFood]);
        }
    }
    if (!foodData?.length) {
        return <div className='text-center h-screen w-full flex flex-col justify-center items-center font-poppins gap-2'>
            <h1 className='text-4xl font-bold'>Sorry!</h1>
            <p className='font-medium'>No foods available at this moment</p>
        </div>

    }
    return (
        <div className='max-w-6xl mx-auto my-12'>
            <h1 className='text-center text-2xl font-bold'>Available Foods</h1>
            <div className='mx-6 lg:mx-0 flex flex-col lg:flex-row justify-between gap-3 items-center my-6 font-poppins'>
                <form onSubmit={handleSearch} className='flex justify-center items-center gap-3 w-3/4 lg:w-2/3'>
                    <input className='py-2 pl-3 w-full bg-gray-100' placeholder='Enter food name' type="text" name="search" id="" />
                    <input type='submit' value={'Search'} className='btn' />
                </form>
                <div className='flex flex-row lg:flex-col justify-center items-center gap-3 lg:gap-1'>
                    <p className='font-medium'>Sort Food By Expire Date: </p>

                    <select onChange={handleSort} className='border-2 border-gray-200 py-2 rounded' name="" id="">
                        <option value="all">All</option>
                        <option value="order-desc">Furthest to Nearest</option>
                        <option value="order-asc">Nearest to Furthest</option>
                    </select>
                </div>
            </div>
            {
                copyFood ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0'>
                    {
                        copyFood?.map(food => <AvailableFoodCard food={food} key={food._id}></AvailableFoodCard>)
                    }
                </div> : <p className='text-red-600'>Could not match with any food you have searched for</p>
            }
        </div>
    );
};

export default AvailableFoods;