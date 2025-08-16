import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const logOutUser=()=>{

    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-center justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data?.firstName || 'Admin'}👋</span></h1>
        <button onClick={logOutUser} className='bg-blue-600 hover:bg-blue-700 text-lg font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header