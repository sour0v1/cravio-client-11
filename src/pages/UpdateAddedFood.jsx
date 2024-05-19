import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateAddedFood = () => {
    const myAddedFoodData = useLoaderData();
    console.log(myAddedFoodData);
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const fname = form.foodName.value;
        const fImage = form.foodImage.value;
        const fQuantity = form.foodQuantity.value;
        const pLocation = form.location.value;
        const eDate = form.date.value;
        const note = form.notes.value;
        const id = myAddedFoodData._id
        const food ={
            fname, fImage, fQuantity, pLocation, eDate, note, id
        }
        fetch('http://localhost:5000/food/update', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title: "Success!",
                        text: "Your food details have updated successfully",
                        icon: "success",
                    });
                }
            })
            
    }
    return (
        <div className='my-9'>
            <form onSubmit={handleUpdate} className='bg-[#FECDA6] w-full lg:w-1/2 mx-auto px-9 py-4 grid grid-cols-2 gap-3 font-poppins'>
                <div className='flex flex-col gap-2'>
                    <label className='text-left' htmlFor="foodName">Food Name</label>
                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodName" id="foodName" defaultValue={myAddedFoodData?.foodName}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-left' htmlFor="foodImage">Food Image Url</label>
                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodImage" id="foodImage" defaultValue={myAddedFoodData?.foodImg}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-left' htmlFor="foodQuantity">Food Quantity</label>
                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodQuantity" id="foodQuantity" defaultValue={myAddedFoodData?.foodQuantity}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-left' htmlFor="location">Pickup Location</label>
                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="location" id="location" defaultValue={myAddedFoodData?.location}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-left' htmlFor="date">Expired Date</label>
                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="date" name="date" id="date" defaultValue={myAddedFoodData?.date}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-left' htmlFor="notes">Additional Notes</label>
                    <textarea className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="notes" id="notes" cols={'1'} rows={'1'} defaultValue={myAddedFoodData?.notes} />
                </div>
                <input className='col-span-2 py-2 bg-[#F97300] text-white text-center' type="submit" value={'Update'} />
            </form>
        </div>
    );
};

export default UpdateAddedFood;