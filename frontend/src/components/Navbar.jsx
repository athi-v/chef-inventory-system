import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
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
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

<div><p>Good Morning</p></div>


</div>

  )
}

export default Navbar