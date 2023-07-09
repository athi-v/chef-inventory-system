import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { foodDelete, foodGet, foodUpdate } from '../features/food/foodSlice'

const FoodItem = ({food}) => {

  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedText, setUpdatedText] = useState({...food});


  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
    
  };

  const handleTextChange = (e) => {
    setUpdatedText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

    const handleUpdate = () => {
      dispatch(foodUpdate({ id: food._id, updatedData:updatedText })).then(() => {
        modalClose();
        dispatch(foodGet())
      });
    };

  const updatedFoodItem = useSelector((state) =>
  state.food.food.find((item) => item._id === food._id)
);


useEffect(() => {
  setUpdatedText({...food}); 
}, [food]);


  return (
    <div>
        <div>


        
            {new Date(food.createdAt).toLocaleString()}
            {updatedText.text}
            {updatedText.description}
            {updatedText.quantity}
            {updatedText.price}
            {updatedText.typeList}


                                </div>
        <div><button className='bg-red-800' onClick={() => dispatch(foodDelete(food._id))}>Del X</button>
        <button className='bg-blue-500' onClick={modalOpen}>Edit</button>

        </div>

        {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center w-auto">
    <div className="absolute bg-white rounded-lg p-8 ">
      <h2>Edit Food Item</h2>
      <div>
      <input type="text" value={updatedText.text}  name="text" onChange={handleTextChange} />
      </div>
      <div>
      <input type="text" value={updatedText.description}  name="description" onChange={handleTextChange} />
      </div>
      <div>
      <select
                  id="typeList"
                  name="typeList"
                  value={updatedText.typeList}
                  onChange={handleTextChange}
                  className="border-[1px] rounded p-2"
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="Kota">Kota Varient</option>
                  <option value="Ingredient">Ingredient or Topping</option>
                  <option value="Side">Side Item</option>
                  <option value="Beverage">Beverage</option>

                </select>      </div>

                <div>
      <input type="number" value={updatedText.quantity}  name="quantity" onChange={handleTextChange} />
      </div>

      <div>
      <input type="number" value={updatedText.price}  name="price" onChange={handleTextChange} />
      </div>


      <button className="bg-blue-500" onClick={handleUpdate}>Update</button>
      <button className="bg-red-500" onClick={modalClose}>Close</button>
    </div>
  </div>
)}

    </div>
  )
}

export default FoodItem