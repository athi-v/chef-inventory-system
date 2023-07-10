import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='section pt-5 h-[100vh] bg-black'>
    <div className='container mx-auto max-w-[90%] lg:max-screen-lg'>

    <div className='flex justify-between'>
    <div className='text-3xl font-bold text-white'>
    <Link to='/'>
    Cheffy
</Link>
    </div>
    <div className='flex gap-5'>
    <div className='flex justify-center items-center bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w-auto'>
    <Link to='/login'> Login </Link>
</div>
    <div className='flex justify-center items-center bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w=auto'>
    <Link to='/register'> Sign Up </Link>
    </div>

    
    </div>

   

    </div>


<div className='flex flex-col items-center gap-3 h-[80vh] justify-center'>

<div>
<p className='text-lg text-gray-400'>Manage food items with 👨‍🍳</p>
</div>

<div>
<h1 className='font-bold  text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Cheffy</h1>
</div>

<div className='flex justify-center items-center bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w-[100px]'>
    <a href='https://github.com/athi-v/chef-inventory-system' target='_blank'>
Github</a>
    </div>

    <div>
    <h1 className='text-white font-semibold text-md'>To run locally:</h1>
    <div className="mockup-code w-[100px] md:w-auto">
  <pre data-prefix="$"><code>git clone https://github.com/athi-v/chef-inventory-system.git</code></pre>
  <pre data-prefix="$"><code>cd chef-inventory-system</code></pre>
  <pre data-prefix="$"><code>npm install</code></pre>
  <pre data-prefix="$"><code>cd frontend</code></pre>
  <pre data-prefix="$"><code>npm install</code></pre>
  <pre data-prefix="$"><code>cd ../</code></pre>
  <pre data-prefix="$"><code>npm run dev</code></pre>


</div>
    </div>

</div>



    </div>


    </div>
  )
}

export default Home