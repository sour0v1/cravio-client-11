import React from 'react';
import { RxCross2 } from "react-icons/rx";

const ManageFoodTable = ({ food, idx }) => {
    const { foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes } = food;
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>{idx + 1}</th>
                <td><img className='w-20 h-16' src={foodImg} alt="food" /></td>
                <td>{foodName}</td>
                <td>{location}</td>
                <td>{date}</td>
                {/* <td><button className='btn bg-[#A1DD70]'>Update</button></td> */}
                <td><button className="btn bg-[#A1DD70]" onClick={() => document.getElementById('my_modal_4').showModal()}>Update</button></td>
                <td><button className='btn bg-[#EE4E4E]'>Delete</button></td>
            </tr>
            <dialog id="my_modal_4" className='modal'>
                <div className="modal-box w-fit text-center mx-auto bg-[#FECDA6]">
                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p> */}
                    <div className="w-full flex justify-end items-center">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="text-2xl"><RxCross2 /></button>
                        </form>
                    </div>
                    <form className='bg-[#FECDA6] w-full mx-auto px-9 py-4 grid grid-cols-2 gap-3 font-poppins'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left' htmlFor="foodName">Food Name</label>
                            <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodName" id="foodName" defaultValue={foodName}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left' htmlFor="foodImage">Food Image Url</label>
                            <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodImage" id="foodImage" defaultValue={foodImg}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left' htmlFor="foodQuantity">Food Quantity</label>
                            <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodQuantity" id="foodQuantity" defaultValue={foodQuantity} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left' htmlFor="location">Pickup Location</label>
                            <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="location" id="location" defaultValue={location}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left' htmlFor="date">Expired Date</label>
                            <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="date" name="date" id="date" defaultValue={date} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-left' htmlFor="notes">Additional Notes</label>
                            <textarea className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="notes" id="notes" cols={'1'} rows={'1'} defaultValue={notes} />
                        </div>
                        <input className='col-span-2 py-2 bg-[#F97300] text-white text-center' type="submit" value={'Update'} />
                    </form>

                </div>
            </dialog>
        </tbody>
    );
};

export default ManageFoodTable;