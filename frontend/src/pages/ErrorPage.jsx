import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='section pt-5 h-[100vh] bg-black'>
    <div className='container mx-auto max-w-[90%] lg:max-screen-lg'>

    <div className='flex justify-between'>


    </div>


<div className='flex flex-col items-center gap-3 h-[80vh] justify-center'>

<div>
<p className='text-lg text-gray-400'>Uh Oh, Page not found🙁</p>
</div>

<div>
<h1 className='font-bold  text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>404</h1>
</div>

<div className='flex'>
<div>

</div>
<div className='flex justify-center items-center bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w-[150px]'>
    <Link to='/'>
Return home</Link>
    </div>
</div>

</div>



    </div>


    </div>
  )
}

export default ErrorPage