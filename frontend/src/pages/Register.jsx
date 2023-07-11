
import { useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {AiOutlineInfoCircle} from 'react-icons/ai'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { registers, reset } from '../features/auth/authSlice'
import Loader from '../components/common/Loader'


const schema = yup.object().shape({
  name: yup.string().required('Please enter name').min(3, 'Name must be atleast 3 characters'),
  email: yup.string().required('Please enter email').email('Invalid email'),
  password: yup.string().required('Please enter password').min(5, 'Password must be atleast 5 characters').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, 'Password must contain letters and numbers, no special characters'),
  password2: yup.string().required('Please confirm password').oneOf([yup.ref('password'), null], 'Passwords must match'),
})


const Register = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {chef, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)


  useEffect(() => {
    if(isError) {

      toast.error('Account already exist!', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } 

    if(isSuccess || chef) {
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [chef, isError, isSuccess, message, navigate, dispatch])


const onSubmit = (data) => {

  dispatch(registers(data))
}


if(isLoading) {
  return <Loader />
}

  return (

    <div className="section ">
      <div className="container h-auto md:h-[115vh] flex m-auto items-center justify-center">
      <div className='flex flex-col md:shadow-xl p-7 rounded-md gap-5 w-[90%] md:w-[40%]'>
      <div><p className='text-center font-bold text-4xl'>Welcome to <span className='font-bold  text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</span>👨‍🍳
</p></div>
      <div><p className='text-center text-sm'>Sign in to  <span className='font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</span> and continue</p></div>

<div>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
<div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Fullname</p>
    <input type="text" {...register('name')}  placeholder='Name'  className='border-[1px] rounded p-2'/>
    {errors.name && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.name.message}</p>}

  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Email</p>

    <input type="email" {...register('email')} placeholder='Email' className='border-[1px] rounded p-2'/>
    {errors.email && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.email.message}</p>}

  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Password</p>
    <input type="password" {...register('password')}  placeholder='Password' className='border-[1px] rounded p-2'/>
    {errors.password && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.password.message}</p>}

  </div>

  <div className='flex flex-col gap-2'>
    <p className='text-sm font-semibold'>Confirm Password</p>
    <input type="password" {...register('password2')}  placeholder='Confirm Password' className='border-[1px] rounded p-2'/>
    {errors.password2 && <p className="text-red-500 text-sm flex items-center gap-2"><AiOutlineInfoCircle/>{errors.password2.message}</p>}

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