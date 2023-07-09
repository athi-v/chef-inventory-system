import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {foodCreate} from '../features/food/foodSlice'
import Loader from './common/Loader'

const Foodform = () => {

    const [foodData, setFoodData] = useState({
      text: '',
      description: '',
      typeList: '',
      quantity: 0,
      price: 0,
    })

    const { text, description, typeList, quantity, price } = foodData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {food, isLoading, isError, isSuccess, message} = useSelector(
      (state) => state.food)
  
   const onChange = (e) =>
      {
      setFoodData((dataState) => ({
        ...dataState, 
        [e.target.name]: e.target.value
      }))
      }
       

     
 const onSubmit = (e) =>
 {
 e.preventDefault()
 const foodData = {
  text, description, typeList, quantity, price}

 dispatch(foodCreate(foodData))
 setFoodData({
  text: '',
      description: '',
      typeList: '',
      quantity: 0,
      price: 0,
 })
} 

if(isLoading) {
  <Loader />
}

  return (
<div className="section ">
      <div className="container h-[100vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[50%]'>
      <div><h1 className='text-center font-bold text-2xl'>Add Item</h1></div>

<div>
<form onSubmit={onSubmit} className='flex flex-col gap-8'>


<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Name</p>
    <input type="text" id="text"  name="text" value={text} onChange={onChange} placeholder='Name' className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Description</p>
    <input type="text" id="description"  name="description" value={description} onChange={onChange} placeholder='Description' className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Type</p>
    <select
                  id="typeList"
                  name="typeList"
                  value={typeList}
                  onChange={onChange}
                  className="border-[1px] rounded p-2"
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="Kota">Kota Varient</option>
                  <option value="Ingredient">Ingredient or Topping</option>
                  <option value="Side">Side Item</option>
                  <option value="Beverage">Beverage</option>                </select> </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Quantity</p>
    <input type="number" id="quantity"  name="quantity" value={quantity} onChange={onChange} placeholder='Item' className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Price</p>
    <input type="number" id="price"  name="price" value={price} onChange={onChange} placeholder='Item' className='border-[1px] rounded p-2'/>
  </div>

 

<div>
<button type="submit" className='bg-blue-400 py-5 rounded text-white font-semibold w-full'>
    Add Item
  </button>

</div>
</form>




</div>


      </div>

      </div>
    </div>
  )
}

export default Foodform