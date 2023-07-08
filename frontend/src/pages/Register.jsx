import { useState } from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
   name: '',
   email: '',
   password: '',
   password2: '' 
  })

  const {name, email, password, password2} = formData

const onChange = (e) =>
{
setFormData((dataState) => ({
  ...dataState, 
  [e.target.name]: e.target.value
}))
}


const onSubmit = (e) =>
{
e.preventDefault()
}

  return (

    <div className="section ">
      <div className="container h-auto md:h-[115vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[40%]'>
      <div><h1 className='text-center font-bold'>Kota King</h1></div>
      <div><p className='text-center font-bold text-2xl'>Welcome</p></div>
      <div><p className='text-center text-sm'>Sign up to Kota King and continue</p></div>

<div>
<form onSubmit={onSubmit} className='flex flex-col gap-8'>
<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Fullname</p>
    <input type="text" id="name" value={name} name="name" onChange={onChange} placeholder='Fullname'  className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Email</p>
    <input type="email" id="email" value={email} name="email" onChange={onChange}  placeholder='Email' className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Password</p>
    <input type="password" id="password" value={password} name="password" onChange={onChange}  placeholder='Password' className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Confirm Password</p>
    <input type="password" id="password2" value={password2} name="password2" placeholder='Confirm Password' className='border-[1px] rounded p-2'/>
  </div>

<div>
<button type="submit" className='bg-blue-400 py-5 rounded text-white font-semibold w-full'>
    Sign Up
  </button>

</div>
</form>



<div className='py-5'><p className='text-sm'>Already have an account? <Link to='/login'><span className='font-semibold text-blue-400'>Log In</span></Link> </p></div>

</div>


      </div>

      </div>
    </div>
  )
}

export default Register