import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'
const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {chef} = useSelector((state) => state.auth)

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
<div className='flex items-center justify-between mx-auto max-w-[90%] py-3'>

    <div className="drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="flex items-center gap-2 cursor-pointer"><p><AiOutlineMenu/></p> <p className='font-semibold'>Menu</p> </label>
  </div> 
  <div className="drawer-side z-10 ">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-white -content">
    <Link to='' className='text-md font-semibold py-3 bg-slate-300 rounded px-2'>Manage</Link>
    <Link to='/add' className='text-md font-semibold py-3'>Add Food Items</Link>
    <Link to='/dashboard' className='text-md font-semibold py-3'>Edit/Delete Food Items</Link>

    <Link to='' className='text-md font-semibold py-3 bg-slate-300 rounded px-2'>Types</Link>

<Link to='/ingredients' className='text-md font-semibold py-3'>Ingredients and Toppings</Link>
<Link to='/beverages' className='text-md font-semibold py-3'>Beverages</Link>
<Link to='/kota' className='text-md font-semibold py-3'>Kota Varieties</Link>
<Link to='/side' className='text-md font-semibold py-3'>Side Items</Link>

<button onClick={onLogout} className='absolute bottom-5 w-[90%] p-2  bg-blue-500 rounded text-white text-md font-semibold place-content-end' >
  Sign Out
</button>    </ul>
  </div>
</div>

<div><p className='font-semibold flex'>{timer()}, {chef && chef?.name}</p></div>


</div>

  )
}

export default Navbar