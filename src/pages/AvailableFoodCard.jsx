import React from 'react';
import { Link } from 'react-router-dom';

const AvailableFoodCard = ({ food }) => {
    const {_id ,foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes } = food;
    return (
        <div className='shadow-lg bg-[#FFFAE6] rounded-md border-2'>
            <img className='w-full h-[200px] rounded-t-md' src={foodImg} alt="" />
            <div className='font-poppins space-y-3 px-4 my-3'>
                <h2 className='font-semibold'>{foodName}</h2>
                <p>Food Quantity : {foodQuantity}</p>
                <p>Pickup location : {location}</p>
                <p>Expired date : {date}</p>
                <p>Donator : </p>
                <p>Notes : {notes}</p>
                <Link to={`/food/${_id}`} className='w-full btn btn-warning'>View Details</Link>
            </div>
        </div>
    );
};

export default AvailableFoodCard;