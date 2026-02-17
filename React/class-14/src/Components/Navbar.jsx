import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Navbar = () => {

    const data = useContext(UserDataContext)
  return (
    <div className='h-12 bg-gray-400 w-screen'>
      <h1>Navbar Here</h1>
      <p>{data}</p>
    </div>
  )
}

export default Navbar
