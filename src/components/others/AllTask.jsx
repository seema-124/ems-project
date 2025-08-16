import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const {userData }= useContext(AuthContext)

    // if (!userData) return <p>Loading...</p>
    
  return (
    <div className='bg-[#1c1c1c] mt-5 p-5 flex-nowrap'>
        <div className='bg-green-800 border-2 border-green-600 font-bold mb-2 px-4 py-2 flex justify-between rounded'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>failed</h5>
        </div>
        <div className=''>
            {userData.employees.map(function(elem, idx){
            return <div key={idx} className='bg-gray-700 mb-2 px-4 py-2 flex justify-between border-2 border-gray-600 rounded'>
            <h2 className='w-1/5 text-lg text-white'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-lg text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg text-green-400'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg text-red-400'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div> 
        
    </div>
  )
}

export default AllTask