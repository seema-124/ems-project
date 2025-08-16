import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {

  return (
    <div id='tasklist' className='flex items-center overflow-x-auto justify-start mt-10 gap-5 flex-nowrap w-full h-[55%] rounded-t-xl'>
        {data.tasks.map((elem, idx)=>{
            
            if(elem.active)
            {
                return <AcceptTask key={idx} data={elem} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed)
            {
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed)
            {
                return <FailedTask key={idx} data={elem}/>
            }
        })}
    </div>
  )
}

export default TaskList