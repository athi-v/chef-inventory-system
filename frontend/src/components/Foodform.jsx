import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {foodCreate} from '../features/food/foodSlice'

const Foodform = () => {

    const [text, setText] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

     
 const onSubmit = (e) =>
 {
 e.preventDefault()
 dispatch(foodCreate({text}))
 setText('')

}

  return (
<div className="section ">
      <div className="container h-[100vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[40%]'>
      <div><h1 className='text-center font-bold text-2xl'>Add Item</h1></div>

<div>
<form onSubmit={onSubmit} className='flex flex-col gap-8'>


<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Food</p>
    <input type="text" id="text"  name="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Item' className='border-[1px] rounded p-2'/>
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