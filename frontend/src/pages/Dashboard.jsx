import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import Foodform from '../components/Foodform'
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
  navigate('/')}

  dispatch(foodGet())

  return () => {
    dispatch(reset())
  }
}, [chef, navigate, isError, message, dispatch])

if(isLoading) {
  <Loader />
}
  
  return (
    <div>
<Navbar />

<Foodform />

<div>
  {food.length > 0 ? 
  (<div>
  {food.map((foodItem) => (
<FoodItem key={foodItem._id} food={foodItem} />


  ))}
  </div>) : (<p>Start setting up</p>)}
</div>

    </div>
  )
}

export default Dashboard