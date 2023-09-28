import React,{useState} from 'react'
import "../styles/settings.css"
import { BASE_URL } from '../../../admin/src/utils/config'


const AddTour = () => {


const [formData, setFormData] = useState({
  title:'',
  city:'',
  address:'',
  distance:'',
  price:'',
  maxGroupSize:'',
  description:'',
  reviews:'',
  photo:null,
});

const handleChange = (e) => {
  const { id, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [id]: value }));
};

const handleFileChange = (e) => {
  const photoFile = e.target.files[0];
  setFormData((prevData) => ({ ...prevData, photo: photoFile }));
};

const handleClick = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.title);
  formDataToSend.append('city', formData.city);
  formDataToSend.append('address', formData.address);
  formDataToSend.append('distance', formData.distance);
  formDataToSend.append('price', formData.price);
  formDataToSend.append('maxGroupSize', formData.maxGroupSize);
  formDataToSend.append('description', formData.description);
  formDataToSend.append('reviews', formData.reviews);
  formDataToSend.append('photo', formData.photo);

  try {
    const res = await fetch(`${BASE_URL}/tours`, {
      method: 'POST',
      body: formDataToSend,
    });

    

    if (res.ok) {
      console.log('Data sent successfully');
    } else {
      console.error('Failed to send data');
    }
  } catch (err) {
    console.error('Error:', err);
  alert(err.message);
  }
};

// add tours end


  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Add Tours</h2>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Add new tours package details here
          </p>
          <form onSubmit={handleClick}>
            <div className="form__group">
              <div>
              <label htmlFor="title">Title</label>
                  <input type="text" 
                  placeholder="Chitwan National Park" 
                  id="title"
                  value={formData.title}
                  onChange={handleChange} />
              </div>

              <div>
                <label>City</label>
                <input type="text" 
                placeholder=" Sauraha" 
                id ='city' 
                value={formData.city}
                onChange={handleChange}/>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Address</label>
                <input type="text" 
                placeholder="Sauraha Chowk, Chitwan " 
                id='address'
                value={formData.address} 
                onChange={handleChange}/>
              </div>

              <div>
                <label>Distance</label>
                <input type="number" 
                placeholder="In km" 
                id='distance' 
                value={formData.distance}
                onChange={handleChange}/>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Price</label>
                <input type="number" 
                placeholder="In NRs." 
                id='price' 
                value={formData.price}
                onChange={handleChange}/>
              </div>

              <div>
                <label>Max-Group Size</label>
                <input type="Number" 
                id='maxGroupSize' 
                placeholder="1-10" 
                value={formData.maxGroupSize}
                onChange={handleChange}/>
              </div>
            </div>
            <div className="form__group">
              <div>
                <label>Description</label>
                <input type="text" 
                placeholder="Short discription of tour" 
                id='description' 
                value={formData.description}
                onChange={handleChange}/>
              </div>

              <div>
                <label>review</label>
                <input type="text" 
                placeholder="review" 
                id='reviews'
                value={formData.reviews} 
                onChange={handleChange} />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label>Your Photo</label>
                
                <input type="file" 
                placeholder="choose file" 
                id='photo' 
                accept="image/*"
                onChange={handleFileChange} />
              </div>

              <div className="profile__img-btns">
                {/* <button className="dlt__btn">Reset</button> */}
                <button className="update__btn" type='submit'>Add tours</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTour
