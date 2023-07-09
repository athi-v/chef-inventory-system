import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
    <div>
        <Link to='/login' className="cursor-pointer">Login</Link>
        <Link to='/register' className="cursor-pointer">Register</Link>
        <Link to='/dashboard' className="cursor-pointer">Dashboard</Link>


    </div>
  )
}

export default Home