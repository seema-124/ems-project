import React, {useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import {AuthContext} from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData= useContext(AuthContext)

  // this code shows role of login user in local storage
  useEffect(() => {
    
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser)
      {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
      }
    }
  }, [authData]);
  

  
const handleLogin = (email, password) => {
  // check admin first
  if (email === 'admin@example.com' && password === '123') {
    const adminData = { firstName: 'Admin', email: 'admin@example.com' }
    setUser('admin')
    setloggedInUserData(adminData)
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    return
  }

  // check employees safely
  const employee = authData?.userData?.employees?.find(
  (e) => email === e.email && e.password === password
  )

  if (employee) {
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'employee', data: employee })
    )
    return
  }

  // if nothing matched
  alert("Invalid Credentials")
}

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> : null)}

    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App