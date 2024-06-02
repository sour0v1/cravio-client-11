import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageFoodTable = ({ food, refetch, idx }) => {
    const { foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes, _id } = food;
    // console.log(food)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cravio-server.vercel.app/delete-food/${id}`, {
                    method: 'DELETE',
                    credentials : 'include'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Food Data has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }

                    })

            }
        });

    }

    return (
        <>
            {/* row 1 */}
            <tr>
                <th>{idx + 1}</th>
                <td><img className="w-20 h-16" src={foodImg} alt="food-image" /></td>
                <td>{foodName}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td>
                    <Link to={`/update/${_id}`}>
                        <button className="btn bg-[#A1DD70]">Update</button>
                    </Link>
                </td>
                <td>
                    <button className='btn bg-[#EE4E4E]' onClick={() => {
                        handleDelete(_id)
                    }}>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default ManageFoodTable;