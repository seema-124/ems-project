import React, { createContext, useEffect, useState } from 'react'
import {setLocalStorage, getLocalStorage} from '../utils/LocalStorage'

export const AuthContext= createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)
    setLocalStorage()
    useEffect(() => {
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})

    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider