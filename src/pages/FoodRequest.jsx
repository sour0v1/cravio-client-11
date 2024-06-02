import { useContext, useEffect, useState } from 'react';
import FoodReqTable from './FoodReqTable';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [requestedFoodData, setRequestedFoodData] = useState([]);
    // const requestedFoodData = useLoaderData();
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/requested-food?email=${user?.email}`, {
                // method : 'GET',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setRequestedFoodData(data);
                })
        }
    }, [user?.email])
    // console.log(requestedFoodData);
    if (!requestedFoodData.length) {
        return <div className='text-center h-screen w-full flex flex-col justify-center items-center font-poppins gap-2'>
            <h1 className='text-4xl font-bold'>Sorry!</h1>
            <p className='font-medium'>You did not request for any food</p>
        </div>

    }
    return (
        <div className='max-w-6xl mx-auto my-9 font-poppins'>
            <Helmet>
                <title>Cravio | Request Food</title>
            </Helmet>
            <h2 className='text-center text-2xl font-bold my-6'>Your Requested Foods</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Donor Name</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Pickup Location</th>
                            <th>Request Date</th>
                            <th>Expire Date</th>
                        </tr>
                    </thead>
                    {
                        requestedFoodData.map((food, idx) => <FoodReqTable food={food} idx={idx} key={food._id}></FoodReqTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default FoodRequest;