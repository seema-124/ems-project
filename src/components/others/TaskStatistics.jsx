import React from 'react'

const TaskStatistics = ({data}) => {
  return (
    <>
    <div className='flex mt-10 justify-between gap-5 max-w-screen'>
      <div className='bg-blue-400 px-6 py-9 w-1/2 rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.newTask}</h2> 
        <h2 className='text-3xl  text-white font-semibold'>New Task</h2>
      </div>
      <div className='bg-green-400 px-6 py-9 w-1/2 rounded-xl'>
        <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.completed}</h2> 
        <h2 className='text-3xl  text-white font-semibold'>Completed</h2>
      </div>
    </div><div className='flex mt-10 justify-between gap-5 max-w-screen'>
        <div className='bg-yellow-400 px-6 py-9 w-1/2 rounded-xl'>
          <h2 className='text-3xl text-black font-semibold'>{data.taskCounts.active}</h2> 
          <h2 className='text-3xl  text-black font-semibold'>Accepted</h2>
        </div>
        <div className='bg-red-400 px-6 py-9 w-1/2 rounded-xl'>
          <h2 className='text-3xl text-white font-semibold'>{data.taskCounts.failed}</h2> 
          <h2 className='text-3xl text-white font-semibold'>Failed</h2>
        </div>
      </div>
      </>
  )
}

export default TaskStatistics