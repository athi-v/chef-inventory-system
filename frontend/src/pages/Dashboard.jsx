import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import FoodItem from '../components/FoodItem'

import Navbar from '../components/Navbar'
import { foodGet, reset } from '../features/food/foodSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

const {chef} = useSelector((state) => state.auth)
const {food, isLoading, isError, message} = useSelector((state) => state.food)
useEffect(() => {
  if(isError) {
console.log(message)
  }
  if(!chef)
  {
  navigate('/login')}

  dispatch(foodGet())


}, [chef, navigate, isError, message, dispatch])

if(isLoading) {
  <Loader />
}
  
const totalCash = food.reduce((acc, curr) => acc + curr.price, 0);
const totalQuantity = food.reduce((acc, curr) => acc + curr.quantity, 0);


  return (
    <div >
<Navbar />

<div className='w-[90%] mx-auto pt-10'>
  <h1 className='text-3xl font-bold'>Dashboard</h1>
</div>

<div className="stats shadow flex items-center mx-auto w-[90%] my-5">
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Cost</div>
    <div className="stat-value"> R{totalCash}
</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Quantity</div>
    <div className="stat-value">{totalQuantity}</div>
  </div>
  
  
</div>

<div>
<div  className="flex justify-between table-zebra w-[90%] mx-auto items-center font-bold bg-gray-200">
            <div className='w-full'>Name</div>
            <div className='w-full hidden md:block'>Description</div>
            <div className='w-full hidden md:block'>Type</div>
            <div className='w-full'>Quantity</div>
            <div className='w-full'>Price</div>
            <div className='w-full'>Manage</div>

</div>


  {food.length > 0 ? 
  (
 
        
       
       
          food.map((foodItem) => (

<FoodItem key={foodItem._id} food={foodItem} />
))

  ) : (<div className='flex flex-col items-center justify-center font-semibold'><p>Start Adding Data</p> <div><Link to='/add'><div className='bg-blue-500 w-full p-2 text-white rounded flex items-center justify-center'>Add</div></Link></div></div>)}
</div>


    </div>
  )
}

export default Dashboard