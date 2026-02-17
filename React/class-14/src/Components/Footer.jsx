import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Footer = () => {
    const data = useContext(UserDataContext)
  return (
    <div className='h-50 w-screen bg-gray-800 text-white absolute bottom-0'>
      This is Footer {data}
    </div>
  )
}

export default Footer
