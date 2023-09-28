import React from 'react'

const TourItem = (props) => {
   
        const { _id, title, city, address, distance, 
            price, maxGroupSize, desc, photo, featured } = props.item;
        return (
            <>
            <tr className="list-item">
            <td>{_id}</td>
            <td>{title}</td>
            <td>{city}</td>
            <td>{address}</td>
            <td>{distance}</td>
            <td>{price}</td>
            <td>{maxGroupSize}</td>
            <td>{desc}</td>
            <td><img src={photo} alt="tour-img" /></td>
            <td>{featured}</td>
            <td className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
            </td>
        </tr>
          
            </>
        );
};

export default TourItem
