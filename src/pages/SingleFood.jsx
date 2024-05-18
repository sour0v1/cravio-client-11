
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SingleFood = () => {
    const {user} = useContext(AuthContext);
    const singleFoodDetails = useLoaderData();
    const { foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, } = singleFoodDetails;
    console.log(singleFoodDetails);
    return (
        <div className='w-2/3 mx-auto border my-9 font-poppins'>
            <img className='w-full h-[400px]' src={foodImg} alt="food-image" />
            <h2 className='flex justify-end my-1'>Donated By <span className='underline mx-1 font-medium'>  {donatorName}</span></h2>
            <div className='space-y-3 px-3 my-6'>
                <h2 className='text-2xl font-medium'>{foodName}</h2>
                <p>Quantity : <span>{foodQuantity}</span></p>
                <p>Expired Date : <span>{date}</span></p>
                <div className='flex justify-between items-center'>
                    <p>Pickup Location : <span>{location}</span></p>
                    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Request</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-4xl text-center mx-auto">
                            {/* <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p> */}
                            <form className='bg-[#FECDA6] w-2/3 mx-auto px-9 py-16 grid grid-cols-2 gap-3 font-poppins'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-left' htmlFor="foodName">Food Name</label>
                                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodName" id="foodName" defaultValue={foodName} disabled/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-left'  htmlFor="foodImage">Food Image Url</label>
                                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodImage" id="foodImage" defaultValue={foodImg} disabled/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-left' htmlFor="foodQuantity">Food Quantity</label>
                                    <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodQuantity" id="foodQuantity" defaultValue={foodQuantity} disabled/>
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
                                    <textarea className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="notes" id="notes" cols={'4'} rows={'4'} />
                                </div>
                                <input className='col-span-2 py-2 bg-[#F97300] text-white text-center' type="submit" value={'Request'} />
                            </form>
                            <div className="modal-action w-full flex justify-center items-center">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;