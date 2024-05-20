import { Link } from "react-router-dom";

const FeaturedFoods = ({food}) => {
    console.log(food);
    const {_id ,foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes } = food;
    return (
        <div className='shadow-lg bg-[#FFFAE6] rounded-md border-2'>
            <img className='w-full h-[200px] rounded-t-md' src={foodImg} alt="" />
            <div className='font-poppins space-y-3 px-4 my-3'>
                <h2 className='font-bold'>{foodName}</h2>
                <p className="font-medium">Food Quantity : {foodQuantity}</p>
                <p className="font-medium">Pickup location : {location}</p>
                <p className="font-medium">Expired date : {date}</p>
                <p className="font-medium">Donator : </p>
                <p className="font-medium">Notes : {notes}</p>
                <Link to={`/food/${_id}`} className='w-full btn btn-warning'>View Details</Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;