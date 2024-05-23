import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ManageFoodTable from './ManageFoodTable';
import { Helmet } from 'react-helmet-async';

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const [mayAddedFoods, setMyAddedFoods] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/manage-food?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyAddedFoods(data);
            })
    }, [user?.email])

    if (!mayAddedFoods?.length) {
        return <div className='text-center h-screen w-full flex flex-col justify-center items-center font-poppins gap-2'>
            <h1 className='text-4xl font-bold'>Sorry!</h1>
            <p className='font-medium'>You did not add any food</p>
        </div>

    }
    return (
        <div className='max-w-6xl mx-auto my-9 font-poppins'>
            <Helmet>
                <title>Cravio | Manage Food</title>
            </Helmet>
            <h2 className='text-center text-2xl font-bold my-6'>Your Added Foods</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mayAddedFoods.map((food, idx) => <ManageFoodTable food={food} idx={idx} setMyAddedFoods={setMyAddedFoods} mayAddedFoods={mayAddedFoods} key={food._id}></ManageFoodTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageFood;