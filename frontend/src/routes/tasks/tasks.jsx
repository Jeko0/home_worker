import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../store/user/user.select';
import { getTasks } from '../../apis/tasks.api';
import { Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const access_token = useSelector(selectAccessToken);
  const [errors, setErrors] = useState([]);
  const navigator = useNavigate();

  const handleSetErrors = (errorsResponse) => {
    const keys = Object.keys(errorsResponse);
    const result = keys.map((key) => (`${key} `+ errorsResponse[key]));
    setErrors(result);
  }

  const handleSetTasks = (recivedTasks) => {
    const result = Object.values(recivedTasks);
    setTasks(result);
  }
  

  useEffect(() => {
    try{
      getTasks(access_token).then((response) => {
        const recivedTasks = response.data;
        handleSetTasks(recivedTasks)
      })
    }catch(error){
      handleSetErrors(error);
    }
  }, [])

  const handleNavigateTaskPage = (id) => {
    const task_id = parseInt(id); 
    navigator(`/tasks/${task_id}`);
  }


  return (
    <Fragment>
      <Outlet/> 
      <div className='justify-center flex pt-5'>
        <div className='grid grid-cols-5 gap-10' >
          {
            tasks.map((task) => (
              <div key={task.id} onClick={() => handleNavigateTaskPage(task.id)}  className=" bg-yellow-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <span className="mb-2 container mx-auto flex text-center decoration-solid text-black font-bold tracking-tight dark:text-white"> {task.title}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex 
        flex-col
        flex-wrap
        items-center 
        justify-center '>
        <button className="bg-blue-500 hover:bg-blue-700 mx-auto mt-10 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigator('/tasks/new')}>createTask</button>
      </div>
    </Fragment>
  )
}

export default Tasks;