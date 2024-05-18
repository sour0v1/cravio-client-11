import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodReqTable from './FoodReqTable';

const FoodRequest = () => {
    const requestedFoodData = useLoaderData();
    console.log(requestedFoodData);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Donor Name</th>
                            <th>Pickup Location</th>
                            <th>Request Date</th>
                            <th>Expire Date</th>
                        </tr>
                    </thead>
                    {
                        requestedFoodData.map((food, idx) => <FoodReqTable food = {food} idx={idx} key={food._id}></FoodReqTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default FoodRequest;