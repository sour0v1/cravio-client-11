import { useContext } from 'react';
import addImage from '../assets/add-img.jpg'
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const handleAddFood = e =>{
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImg = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const status = form.status.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const donatorImage = form.donatorImage.value;
        const notes = form.notes.value;
        
        const food = {
            foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes
        }
        // console.log(food);
        // post request
        axios.post('http://localhost:5000/add-food', food)
            .then(res =>{
                // console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Success!",
                        text: "Your Food Added successfully",
                        icon: "success",
                    });
                }
            })
            .catch(error =>{
                // console.log(error)
            })
    }
    return (
        <div>
            <div className='bg-cover bg-center border-[#FF9130] border-y-2' style={{ backgroundImage: `url(${addImage})` }}>
                <form onSubmit={handleAddFood} className='bg-[#FFB534] lg:w-2/3 mx-auto px-9 py-16 grid grid-cols-2 gap-3 font-poppins bg-opacity-70'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="foodName">Food Name</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodName" id="foodName" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="foodImage">Food Image Url</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="foodImage" id="foodImage" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="foodQuantity">Food Quantity(no. of person to be served)</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="number" name="foodQuantity" id="foodQuantity" />
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
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="donatorName">Donator Name</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="donatorName" id="donatorName" defaultValue={user?.displayName} disabled/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="donatorEmail">Donator Email</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="donatorEmail" id="donatorEmail" defaultValue={user?.email} disabled/>
                    </div>
                    <div className='flex flex-col gap-2 col-span-2'>
                        <label htmlFor="donatorImg">Donator Image Url</label>
                        <input className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="donatorImg" id="donatorImage" defaultValue={user?.photoURL} disabled/>
                    </div>

                    <div className='flex flex-col gap-2 col-span-2'>
                        <label htmlFor="notes">Additional Notes</label>
                        <textarea className='py-2 px-3 bg-[#F1F1F1] outline-none' type="text" name="notes" id="notes" cols={'4'} rows={'4'} />
                    </div>
                    <input className='col-span-2 py-2 bg-[#40A578] text-white' type="submit" value={'Add'} />
                </form>
            </div>
        </div>
    );
};

export default AddFood;