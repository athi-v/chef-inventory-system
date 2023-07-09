import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Loader from '../components/common/Loader'


const Register = () => {
  const [formData, setFormData] = useState({
   name: '',
   email: '',
   password: '',
   password2: '' 
  })

  const {name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {chef, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)


  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || chef) {
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [chef, isError, isSuccess, message, navigate, dispatch])



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

if(password !== password2) {
  toast.error('Passwords do not match!')
}
else {
  const chefData = {
    name, email, password,
  }
  dispatch(register(chefData))
  console.log(chefData)
}
}

if(isLoading) {
  <Loader />
}

  return (

    <div className="section ">
      <div className="container h-auto md:h-[115vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[40%]'>
      <div><p className='text-center font-bold text-4xl'>Welcome  <span className='font-bold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</span>👨‍🍳
</p></div>
      <div><p className='text-center text-sm'>Sign in to  <span className='font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</span> and continue</p></div>

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
    <input type="password" id="password2" value={password2} name="password2" onChange={onChange} placeholder='Confirm Password' className='border-[1px] rounded p-2'/>
  </div>

<div>
<button type="submit" className='bg-blue-500 py-5 rounded text-white font-semibold w-full'>
    Sign Up
  </button>

</div>
</form>



<div className='py-5'><p className='text-sm'>Already have an account? <Link to='/login'><span className='font-semibold text-blue-500'>Log In</span></Link> </p></div>
<div className='py-2'><p className='text-sm'>Go back <Link to='/'><span className='font-semibold text-blue-500'>Home</span></Link> </p></div>

</div>


      </div>

      </div>
    </div>
  )
}

export default Register