import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { foodDelete, foodGet, foodUpdate } from '../features/food/foodSlice'
import {AiOutlineDelete, AiFillEdit} from 'react-icons/ai'

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
      <div className="flex justify-between table-zebra w-[90%] mx-auto items-center">
    
          <div className='w-full'> {updatedText.text}</div>

<div className='w-full hidden md:block'> {updatedText.description}</div>

<div className='w-full hidden md:block'> {updatedText.typeList}</div>
<div className='w-full'> {updatedText.quantity}</div>


<div className='w-full'> R{updatedText.price}</div>

<div className='flex w-full gap-5'> 
<button
onClick={() => dispatch(foodDelete(food._id))}
>
<AiOutlineDelete/></button>
<button onClick={modalOpen}>
<AiFillEdit />
</button>
</div>
</div>
         

     

      {isModalOpen && (
        <div className="fixed inset-0 flex md:items-center md:justify-center">
          <div className="absolute bg-white rounded-lg p-8  w-full h-[100vh] flex md:items-center justify-center">
          <div className='flex flex-col  p-7 rounded-md gap-5  w-full md:w-[50%]'>
      <div><h1 className='text-center font-bold text-2xl'>Edit Food Item</h1></div>
      <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Name</p>
              <input
                type="text"
                value={updatedText.text}
                name="text"
                onChange={handleTextChange}
                className='border-[1px] rounded p-2 w-full'
              />
            </div>
            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Description</p>
              <input
                type="text"
                value={updatedText.description}
                name="description"
                onChange={handleTextChange}
                className='border-[1px] rounded p-2 w-full'
              />
            </div>
            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Type</p>
              <select
                id="typeList"
                name="typeList"
                value={updatedText.typeList}
                onChange={handleTextChange}
                className="border-[1px] rounded p-2 w-full"
              >
                <option disabled value="">
                  Select
                </option>
                <option value="Kota">Kota Varient</option>
                <option value="Ingredient">Ingredient or Topping</option>
                <option value="Side">Side Item</option>
                <option value="Beverage">Beverage</option>
              </select>{" "}
            </div>

            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Quantity</p>
              <input
                type="number"
                value={updatedText.quantity}
                name="quantity"
                onChange={handleTextChange}
                className='border-[1px] rounded p-2 w-full'
              />
            </div>

            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Price</p>
              <input
                type="number"
                value={updatedText.price}
                name="price"
                onChange={handleTextChange}
                className='border-[1px] rounded p-2 w-full'
              />
            </div>
<div className='flex w-full gap-3 flex-col md:flex-row'>
<button className="bg-blue-500 text-white rounded py-2 font-semibold w-full" onClick={handleUpdate}>
              Update
            </button>
            <button className="bg-red-500 text-white rounded py-2 font-semibold w-full" onClick={modalClose}>
              Close
            </button>
</div>
            
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodItem