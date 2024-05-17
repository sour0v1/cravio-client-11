import React from 'react';

const AvailableFoodCard = ({ food }) => {
    const { foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes } = food;
    return (
        <div className='shadow-lg bg-[#FFFAE6] rounded-md'>
            <img className='w-full h-[200px] rounded-md' src={foodImg} alt="" />
            <div className='font-poppins space-y-3 px-4 my-3'>
                <h2 className='font-semibold'>{foodName}</h2>
                <p>Food Name : {foodQuantity}</p>
                <p>Pickup location : {location}</p>
                <p>Expired date : {date}</p>
                <p>Donator : </p>
                <p>Notes : {notes}</p>
                <button className='w-full btn btn-warning'>View Details</button>
            </div>
        </div>
    );
};

export default AvailableFoodCard;