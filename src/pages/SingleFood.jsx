import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

const SingleFood = () => {
    const [added, setAdded] = useState(true);
    const { user } = useContext(AuthContext);
    const singleFoodDetails = useLoaderData();
    const { _id, foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes } = singleFoodDetails;
    // console.log(singleFoodDetails);
    const handleSingleFood = e => {
        setAdded(true);
        e.preventDefault();
        const notes = e.target.notes.value;
        const foodDetails = {
            requestDate: dayjs().format('DD-MM-YYYY'),
            donatorName,
            donatorEmail,
            pickupLocation: location,
            expiredDate: date,
            additionalNotes: notes,
            foodImage: foodImg,
            foodName,
            email: user.email

        }
        axios.post('http://localhost:5000/request-food', foodDetails, {
            withCredentials : true
        })
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {

                    Swal.fire({
                        title: "Request Accepted",
                        text: "Your request Accepted successfully",
                        icon: "success",
                    });
                }
                setAdded(false)
            })
            .catch(error => {
                // console.log(error);
            })
        fetch(`http://localhost:5000/delete-food/${_id}`, {
            method: 'DELETE',
            credentials : 'include'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }
    return (
        <div className='lg:w-2/3 mx-auto border my-9 font-poppins'>
            <Helmet>
                <title>Cravio | Food Details</title>
            </Helmet>
            <img className='w-full h-[200px] lg:h-[400px]' src={foodImg} alt="food-image" />
            <h2 className='flex justify-end my-1'>Donated By <span className='underline mx-1 font-medium'>  {donatorName}</span></h2>
            <div className='space-y-3 px-3 my-6'>
                <h2 className='text-2xl font-medium'>{foodName}</h2>
                <p>Quantity : <span>{foodQuantity}</span></p>
                <p>Expired Date : <span>{date}</span></p>
                <div className='flex justify-between items-center'>
                    <p>Pickup Location : <span>{location}</span></p>
                    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Request</button>
                    {
                        added && <dialog id="my_modal_4" className='modal'>
                            <div className="modal-box w-fit text-center mx-auto bg-[#FECDA6]">
                                {/* <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p> */}
                                <div className="w-full flex justify-end items-center">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="text-2xl"><RxCross2 /></button>
                                    </form>
                                </div>
                                <form onSubmit={handleSingleFood} className='bg-[#FECDA6] w-full mx-auto px-9 py-4 grid grid-cols-2 gap-3 font-poppins'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="foodName">Food Name</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodName" id="foodName" defaultValue={foodName} disabled />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="foodImage">Food Image Url</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodImage" id="foodImage" defaultValue={foodImg} disabled />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="foodQuantity">Food Quantity</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodQuantity" id="foodQuantity" defaultValue={foodQuantity} disabled />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="location">Pickup Location</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="location" id="location" defaultValue={location} disabled />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="date">Expired Date</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="date" name="date" id="date" defaultValue={date} disabled />
                                    </div>
                                    {/* <div className='flex flex-col gap-2'>
                                    <label htmlFor="status">Food Status</label>
                                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="status" id="status" defaultValue={'available'} />
                                </div> */}
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="donatorName">Donator Name</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="donatorName" id="donatorName" defaultValue={user?.displayName} disabled />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="donatorEmail">Donator Email</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="donatorEmail" id="donatorEmail" defaultValue={user?.email} disabled />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-left' htmlFor="donatorImg">Donator Image Url</label>
                                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="donatorImg" id="donatorImage" defaultValue={user?.photoURL} disabled />
                                    </div>

                                    <div className='flex flex-col gap-2 col-span-2'>
                                        <label className='text-left' htmlFor="notes">Additional Notes</label>
                                        <textarea className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="notes" id="notes" cols={'2'} rows={'2'} defaultValue={notes} />
                                    </div>
                                    <input className='col-span-2 py-2 bg-[#F97300] text-white text-center' type="submit" value={'Request'} />
                                </form>
                            </div>
                        </dialog>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleFood;