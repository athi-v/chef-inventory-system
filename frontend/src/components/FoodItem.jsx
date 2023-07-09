import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { foodDelete, foodUpdate } from '../features/food/foodSlice'

const FoodItem = ({food}) => {

  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedText, setUpdatedText] = useState(food.text);


  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const handleTextChange = (e) => {

    setUpdatedText(e.target.value);
    };

    const handleUpdate = () => {
      const updatedData = { text: updatedText };
      dispatch(foodUpdate({ id: food._id, updatedData })).then(() => {
        // Update the local state with the latest updated text
        setUpdatedText(updatedText);
        modalClose();
      });
    };

  const updatedFoodItem = useSelector((state) =>
  state.food.food.find((item) => item._id === food._id)
);


useEffect(() => {
  setUpdatedText(food.text); // Update the local state with the initial text
}, [food.text]);


  return (
    <div>
        <div>
            {new Date(food.createdAt).toLocaleString()}
            {updatedText}
                                </div>
        <div><button className='bg-red-800' onClick={() => dispatch(foodDelete(food._id))}>Del X</button>
        <button className='bg-blue-500' onClick={modalOpen}>Edit</button>

        </div>

        {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="absolute bg-white rounded-lg p-8">
      <h2>Edit Food Item</h2>
      <input type="text" value={updatedText} onChange={handleTextChange} />
      <button className="bg-blue-500" onClick={handleUpdate}>Update</button>
      <button className="bg-red-500" onClick={modalClose}>Close</button>
    </div>
  </div>
)}

    </div>
  )
}

export default FoodItem