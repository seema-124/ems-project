import React, {useState} from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler= (e)=>{
    e.preventDefault()
    handleLogin(email,password)  //pass the email, password to parent app
    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-blue-600 rounded-2xl p-20'>
        <h1 className='text-white font-bold text-center text-2xl pb-20'>Log In</h1>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center' >
        <input
        value={email} 
        onChange={(e)=>{
           setEmail(e.target.value)
        }}
        required
        className='text-white outline-none bg-transparent border-2 border-blue-600 px-10 py-3 text-xl rounded-full placeholder:text-gray-400' type='email' placeholder="Email"/>
        <input 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        required className='text-white outline-none bg-transparent border-2 border-blue-600 mt-7 px-10 py-3 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder="Password" />
        <div className='flex flex-row mt-6 pl-3'>
          <input className='outline-none bg-transparent border-blue-600' type="checkbox" />
          <h1 className='text-white pl-3'>Remember me</h1>
          <h1 className='text-blue-600 pl-10'>Forgot Password</h1>
        </div>
        <button className='text-white w-full outline-none bg-blue-600 mt-8 px-10 py-3 text-lg rounded-full'>Log in</button>
        </form>
        </div>
    </div>
  )
}

export default Login