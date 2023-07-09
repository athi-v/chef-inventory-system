import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { reset, logout } from '../features/auth/authSlice'
const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {chef} = useSelector((state) => state.auth)

  const onLogout = () => {
dispatch(logout())
dispatch(reset())
navigate('/')
  }

  return (
<div className='flex items-center justify-between mx-auto max-w-[90%] py-3'>

    <div className="drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="flex items-center gap-2"><p><AiOutlineMenu/></p> <p>Menu</p> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-white text-white -content">
      {/* Sidebar content here */}
<button onClick={onLogout} className='bg-red-400 py-2 rounded' >
  Sign Out
</button>    </ul>
  </div>
</div>

<div><p>Good Morning, {chef && chef?.name}</p></div>


</div>

  )
}

export default Navbar