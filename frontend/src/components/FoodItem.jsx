import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { foodDelete, foodGet, foodUpdate } from '../features/food/foodSlice'
import {AiOutlineDelete, AiFillEdit, AiOutlineInfoCircle} from 'react-icons/ai'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import Loader from './common/Loader'

const schema = yup.object().shape({
  text: yup.string().required('Please enter name').min(3, 'Name must be atleast 3 characters'),
  description: yup.string().required('Please enter description').min(3, 'Name must be atleast 3 characters'),
  typeList: yup.string().required('Please choose type'),
  quantity: yup.number().typeError('Please enter quantity').positive('Quantity must be a positive number').integer('Quantity must be an integer'),
  price: yup.number().typeError('Please enter price').positive('Price must be a positive number'),
})

const FoodItem = ({food}) => {

  const {register, handleSubmit, formState: {errors}, setValue} = useForm({
    resolver: yupResolver(schema)
  })


  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedText, setUpdatedText] = useState({...food});


  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };



    const handleUpdate = (data) => {

      const { text, description, typeList, quantity, price } = data;
    const updatedData = {
      text,
      description,
      typeList,
      quantity,
      price
    }

      dispatch(foodUpdate({ id: food._id, updatedData})).then(() => {
        modalClose();
        dispatch(foodGet())
      });
    };




const {isLoading} = useSelector(
  (state) => state.food)

  useEffect(() => {
    setUpdatedText({ ...food });
  }, [food]);

useEffect(() => {
  setValue('text', updatedText.text);
  setValue('description', updatedText.description);
  setValue('typeList', updatedText.typeList);
  setValue('quantity', updatedText.quantity);
  setValue('price', updatedText.price);
}, [updatedText, setValue]);

if(isLoading) {
  return <Loader />
}

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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleUpdate)}>
      <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Name</p>
              <input
                type="text"
                {...register('text')}
                className='border-[1px] rounded p-2 w-full'
              />
                  {errors.text && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.text.message}</p>}

            </div>
            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Description</p>
              <input
                type="text"
                {...register('description')}
                className='border-[1px] rounded p-2 w-full'
              />
                                {errors.description && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.description.message}</p>}

            </div>
            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Type</p>
              <select
                id="typeList"
                {...register('typeList')}
                className="border-[1px] rounded p-2 w-full"
              >
                <option value="">
                  Select
                </option>
                <option value="Kota">Kota Varient</option>
                <option value="Ingredient">Ingredient or Topping</option>
                <option value="Side">Side Item</option>
                <option value="Beverage">Beverage</option>
              </select>{" "}
              {errors.typeList && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.typeList.message}</p>}

            </div>

            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Quantity</p>
              <input
                type="number"
                {...register('quantity')}
                className='border-[1px] rounded p-2 w-full'
              />
                            {errors.quantity && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.quantity.message}</p>}

            </div>

            <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Price</p>
              <input
                type="number"
                {...register('price')}

                className='border-[1px] rounded p-2 w-full'
              />
                            {errors.price && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.price.message}</p>}

            </div>
<div className='flex w-full gap-3 flex-col md:flex-row py-4'>
<button type="submit" className="bg-blue-500 text-white rounded py-2 font-semibold w-full" >
              Update
            </button>
            <button type="button" className="bg-red-500 text-white rounded py-2 font-semibold w-full" onClick={modalClose}>
              Close
            </button>
</div>
</form>
            
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodItem