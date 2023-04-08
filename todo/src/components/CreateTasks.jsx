import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreateTasks({tasks,setTasks}) {
    const [task,setTask] = useState({
        id:"",
        name:"",
        status:"todo"
    });

    // console.log(task);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(task.name.length < 3) return 
        setTasks((prev) => {
            const list = [...prev, task]
            localStorage.setItem("tasks",JSON.stringify(list));

            return list
        })
    }
  return (
    <form onSubmit={handleSubmit} >
        <input type='text' className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1' onChange={(e) => setTask({...task,id: uuidv4(), name: e.target.value})} value={task.name} />
        <button className='bg-cyan-500 rounded-md px-4 h-12 text-white ' >Create</button>
    </form>
  )
}

export default CreateTasks