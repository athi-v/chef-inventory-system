import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {chef} = useSelector((state) => state.auth)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

   const navigate = useNavigate()
  const dispatch = useDispatch()


  const onLogout = () => {
dispatch(logout())
dispatch(reset())
navigate('/login')
  }

  const timer = () => {
    const time = new Date();
  
    if (time.getHours() >= 5 && time.getHours() < 12) {
      return <p>Good morning </p>;
    } else if (time.getHours() >= 12 && time.getHours() <= 18) {
      return <p>Good afternoon </p>;
    } else {
      return <p>Good evening </p>;
    }
  };

  return (
    <div className="relative container mx-auto w-[90%]">

    <div className='flex flex-row items-center justify-between'>
    <button
        className=" my-4 rounded-lg focus:outline-none font-semibold"
        onClick={handleToggle}
      >
        Menu
      </button>
    <div><p className='font-semibold flex'>{timer()}, {chef && chef?.name}</p></div>
    </div>

      

      <div
        className={` bg-white w-96 h-full fixed top-0 right-0 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className=" p-4">
          <div className="flex justify-end items-center mb-4">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none font-semibold"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
          <ul className="flex flex-col w-auto h-full bg-white ">
    <Link to='' className='text-md font-semibold py-3 bg-slate-300 rounded px-2'>Manage</Link>
    <Link to='/add' className='text-md font-semibold py-3'>Add Food Items</Link>
    <Link to='/dashboard' className='text-md font-semibold py-3'>Edit/Delete Food Items</Link>

    <Link to='' className='text-md font-semibold py-3 bg-slate-300 rounded px-2'>Types</Link>

<Link to='/ingredients' className='text-md font-semibold py-3'>Ingredients and Toppings</Link>
<Link to='/beverages' className='text-md font-semibold py-3'>Beverages</Link>
<Link to='/kota' className='text-md font-semibold py-3'>Kota Varieties</Link>
<Link to='/side' className='text-md font-semibold py-3'>Side Items</Link>

<div className='relative '>
<button onClick={onLogout} className='absolute bottom-[-180px] w-full p-2  bg-blue-500 rounded text-white text-md font-semibold place-content-end' >

  Sign Out
</button>
</div>
    </ul>
        </div>
      </div>

      <div className={`p-8 ${isOpen ? 'ml-64' : ''}`}>
  
      </div>
    </div>
  );
};

export default Drawer;
