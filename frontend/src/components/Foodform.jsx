import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {AiOutlineInfoCircle} from 'react-icons/ai'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


import {foodCreate} from '../features/food/foodSlice'
import Navbar from './Navbar'
import Loader from './common/Loader'

const schema = yup.object().shape({
  text: yup.string().required('Please enter name').min(3, 'Name must be atleast 3 characters'),
  description: yup.string().required('Please enter description').min(3, 'Name must be atleast 3 characters'),
  typeList: yup.string().required('Please choose type'),
  quantity: yup.number().typeError('Please enter quantity').positive('Quantity must be a positive number').integer('Quantity must be an integer'),
  price: yup.number().typeError('Please enter price').positive('Price must be a positive number'),
})


const Foodform = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  
  const [foodData, setFoodData] = useState({
    text: '',
    description: '',
    typeList: '',
    quantity: '',
    price: '',
  });

  const { text, description, typeList, quantity, price } = foodData;




    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {food, isLoading, isError, isSuccess, message} = useSelector(
      (state) => state.food)
  

       
  const {chef} = useSelector((state) => state.auth)


  useEffect(() => {
    if(!chef)
    {
    navigate('/login')}
  }, [chef])

     
 const onSubmit = (data) =>
 {
 dispatch(foodCreate(data))

 setFoodData({
  text: '',
      description: '',
      typeList: '',
      quantity: '',
      price: '',
 })
 navigate('/dashboard')
} 

if(isLoading) {
  return <Loader />
}


  return (
<div className="section ">
<Navbar />

      <div className="container md:h-[150vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[50%]'>
      <div><h1 className='text-center font-bold text-2xl'>Add Food Item</h1></div>

<div>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>


<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Name</p>
    <input type="text" id='text' {...register('text')} placeholder='Name' className='border-[1px] rounded p-2'/>
    {errors.text && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.text.message}</p>}

  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Description</p>
    <input type="text" id='description' {...register('description')} placeholder='Description' className='border-[1px] rounded p-2'/>
    {errors.description && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.description.message}</p>}

  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Type</p>
    <select id="typeList" {...register('typeList')}
               
                  className="border-[1px] rounded p-2"
                >
                  <option value="" className='text-grey-200'>
                  Select
                  </option>
                  <option value="Kota">Kota Varient</option>
                  <option value="Ingredient">Ingredient or Topping</option>
                  <option value="Side">Side Item</option>
                  <option value="Beverage">Beverage</option>                
                  </select>
                  {errors.typeList && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.typeList.message}</p>}

                   </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Quantity</p>
    <input type="number" id='quantity' {...register('quantity')} placeholder='Quantity' className='border-[1px] rounded p-2'/>
    {errors.quantity && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.quantity.message}</p>}

  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Price</p>
    <input type="number" id='price' {...register('price')}  placeholder='Price' className='border-[1px] rounded p-2'/>
    {errors.price && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.price.message}</p>}

  </div>

 

<div>
<button type="submit" className='bg-blue-500 py-5 rounded text-white font-semibold w-full'>
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