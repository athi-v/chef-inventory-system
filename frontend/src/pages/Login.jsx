import { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
   })
 
   const {email, password} = formData
 
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
      <div className="container h-[100vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[40%]'>
      <div><h1 className='text-center font-bold'>Kota King</h1></div>
      <div><p className='text-center font-bold text-2xl'>Welcome</p></div>
      <div><p className='text-center text-sm'>Sign up to Kota King and continue</p></div>

<div>
<form onSubmit={onSubmit} className='flex flex-col gap-8'>


<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Email</p>
    <input type="email" id="email" value={email} name="email" onChange={onChange}  placeholder='Email' className='border-[1px] rounded p-2'/>
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Password</p>
    <input type="password" id="password" value={password} name="password" onChange={onChange}  placeholder='Password' className='border-[1px] rounded p-2'/>
  </div>

 

<div>
<button type="submit" className='bg-blue-400 py-5 rounded text-white font-semibold w-full'>
    Sign In
  </button>

</div>
</form>



<div className='py-5'><p className='text-sm'>Don't have an account? <Link to='/register'><span className='font-semibold text-blue-400'>Sign up</span></Link> </p></div>

</div>


      </div>

      </div>
    </div>
  )
}

export default Login