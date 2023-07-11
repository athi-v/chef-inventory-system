<<<<<<< HEAD
import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Loader from '../components/common/Loader'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
   })
 
   const {email, password} = formData

   
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {chef, isLoading, isError, isSuccess, message} = useSelector(
=======
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {toast} from 'react-toastify'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { login, reset } from '../features/auth/authSlice'
import Loader from '../components/common/Loader'


const schema = yup.object().shape({
  email: yup.string().required('Please enter email').email('Invalid email'),
  password: yup.string().required('Please enter password'),
})

const Login = () => {


  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
   
   const navigate = useNavigate()
   const dispatch = useDispatch()
 
   const {chef, isLoading, isError, isSuccess, message} = useSelector(
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
    (state) => state.auth)


  useEffect(() => {
    if(isError) {
<<<<<<< HEAD
      toast.error(message)
    }
=======
      toast.error('Wrong email/password!', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      }    

>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
    if(isSuccess || chef) {
      navigate('/dashboard')
    }

    dispatch(reset())
<<<<<<< HEAD

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
 const chefData = {
   email, password,
}
dispatch(login(chefData))
console.log(chefData)
=======
  }, [chef, isError, isSuccess, message, navigate, dispatch])

 
 
 const onSubmit = (data) => {
dispatch(login(data))
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
}

if(isLoading) {
  <Loader />
}


 

  return (
    <div className="section ">
      <div className="container h-[100vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[40%]'>
      <div><p className='text-center font-bold text-4xl'>Welcome to <span className='font-bold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</span>👨‍🍳
</p></div>
      <div><p className='text-center text-sm'>Sign in to  <span className='font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</span> and continue</p></div>

<div>
<<<<<<< HEAD
<form onSubmit={onSubmit} className='flex flex-col gap-8'>
=======
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)

 
<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Email</p>
<<<<<<< HEAD
    <input type="email" id="email" value={email} name="email" onChange={onChange}  placeholder='Email' className='border-[1px] rounded p-2'/>
=======
    <input type="email" {...register('email')}  placeholder='Email' className='border-[1px] rounded p-2'/>
    {errors.email && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.email.message}</p>}

>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Password</p>
<<<<<<< HEAD
    <input type="password" id="password" value={password} name="password" onChange={onChange}  placeholder='Password' className='border-[1px] rounded p-2'/>
=======
    <input type="password" {...register('password')}  placeholder='Password' className='border-[1px] rounded p-2'/>
    {errors.password && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.password.message}</p>}
              
>>>>>>> c6b67e94 (improved frontend, added validation login + registration)
  </div>

 

<div>
<button type="submit" className='bg-blue-500 py-5 rounded text-white font-semibold w-full'>
    Sign In
  </button>

</div>
</form>



<div className='py-5'><p className='text-sm'>Don't have an account? <Link to='/register'><span className='font-semibold text-blue-500'>Sign up</span></Link> </p></div>
<div className='py-2'><p className='text-sm'>Go back <Link to='/'><span className='font-semibold text-blue-500'>Home</span></Link> </p></div>

</div>


      </div>

      </div>
    </div>
  )
}

export default Login