import React from 'react'

const BookingItem = (props) => {
   
        const { _id, totalAmt, userId, userEmail, tourName, fullName, guestSize, phone, bookAt } = props.item;
        return (
            <>
         
    
    <tr class="list-item">
        <td>{_id}</td>
        <td>{fullName}</td>
        <td>{userEmail}</td>
        <td>{tourName}</td>
        <td>{guestSize}</td>
        <td>{phone}</td>
        <td>{bookAt}</td>
        {/* <td>{totalAmt}</td> */}
        <td><select id="tourSelect">
            <option value="tour1">approve</option>
            <option value="tour2">decline</option>
            </select>
        </td>
    </tr>
          
            </>
        );
};

export default BookingItem
