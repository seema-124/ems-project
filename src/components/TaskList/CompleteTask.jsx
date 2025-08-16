import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
        <div className='h-[280px] flex-shrink-0 w-[300px] bg-green-400 rounded-xl p-5  text-white' >
            <div className='flex justify-between'>
                <h3 className='bg-red-600 rounded-md text-sm px-3 py-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 font-medium'>
                {data.taskDescription}
            </p>
            <div className='flex justify-center mt-10'>
            <button className='bg-blue-600 py-1 px-6 w-full text-sm rounded-md'>Complete Task</button>
        </div>
        </div>
    </div>
  )
}

export default CompleteTask