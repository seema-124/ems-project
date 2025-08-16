import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const {userData, setUserData}= useContext(AuthContext)
  // console.log("userData :",userData);
  

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [task, setNewTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    
    const task= {taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed: false }
    setNewTask(task)
    
    const employees= userData?.employees || []
    
    
    employees.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(task)
        elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1
        
        
      }
    })
      setUserData({ ...userData, employees })
      console.log(employees);

    setTaskTitle("")
    setTaskDescription("")
    setTaskDate("")
    setAssignTo("")
    setCategory("")
  }

  return (
    <div>
        <div className="text-white">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-wrap bg-[#1a1a1a] w-full items-start justify-between mt-10 p-7">
          <div className='w-1/2'>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className='text-sm px-2 py-1 w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="text" placeholder="Make a UI Design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className='text-sm px-2 py-1 w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className='text-sm px-2 py-1 w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className='text-sm px-2 py-1 w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="text" placeholder="design, development, etc." />
            </div>
          </div>
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className=' text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
            className='w-full h-44 text-sm px-4 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-10 py-2 text-center rounded text-sm mt-5 w-full">Create Task</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask