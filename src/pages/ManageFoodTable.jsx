
import { Link } from "react-router-dom";

const ManageFoodTable = ({ food, idx }) => {
    const { foodName, foodImg, foodQuantity, location, date, status, donatorName, donatorEmail, donatorImage, notes, _id } = food;
    // console.log(food);

    return (
        <>
            {/* row 1 */}
            <tr>
                <th>{idx + 1}</th>
                <td>{foodImg}</td>
                <td>{foodName}</td>
                <td>{location}</td>
                <td>{date}</td>
                <td>
                    <Link to={`/update/${_id}`}>
                        <button className="btn bg-[#A1DD70]" onClick={() => {
                            // js code
                        }}>Update</button>
                    </Link>
                </td>
                <td>
                    <Link to={`/delete/${_id}`}>
                        <button className='btn bg-[#EE4E4E]' onClick={() => {
                            // js code
                        }}>Delete</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default ManageFoodTable;