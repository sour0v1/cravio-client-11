import React from 'react';

const FoodReqTable = ({food, idx}) => {
    const {donatorName, expiredDate, pickupLocation,requestDate, foodImage, foodName} = food;
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>{idx + 1}</th>
                <td>{donatorName}</td>
                <td><img className='w-20 h-16' src={foodImage} alt="food" /></td>
                <td>{foodName}</td>
                <td>{pickupLocation}</td>
                <td>{requestDate}</td>
                <td>{expiredDate}</td>
            </tr>
        </tbody>
    );
};

export default FoodReqTable;