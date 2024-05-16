import React from 'react';
import addImage from '../assets/addImage.jpg'

const AddFood = () => {
    return (
        <div>
            <div className='bg-cover bg-center py-9 border-[#FF9130] border-y-2' style={{ backgroundImage: `url(${addImage})` }}>
                <form className='bg-[#FFB534] w-2/3 mx-auto px-9 py-16 grid grid-cols-2 gap-3 font-poppins'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="foodName">Food Name</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodName" id="foodName" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="foodQuantity">Food Image</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodImage" id="foodImage" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="foodQuantity">Food Quantity</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodQuantity" id="foodQuantity" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="location">Pickup Location</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="location" id="location" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="date">Expired Date</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="date" name="date" id="date" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="status">Food Status</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="status" id="status" defaultValue={'available'} />
                    </div>
                    
                    <div className='flex flex-col gap-2 col-span-2'>
                        <label htmlFor="notes">Additional Notes</label>
                        <textarea className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="notes" id="notes" defaultValue={'available'} cols={'4'} rows={'4'} />
                    </div>
                    <input className='col-span-2 py-2 bg-[#A8DF8E]' type="submit" value={'Add'} />
                </form>
            </div>
        </div>
    );
};

export default AddFood;