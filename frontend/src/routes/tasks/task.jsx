import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { getTasks } from '../../apis/tasks.api'
import { selectAccessToken } from '../../store/user/user.select'
import { getTask } from '../../apis/tasks.api'
import parse from 'html-react-parser';
import './task.styles.scss'

const Task = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const access_token = useSelector(selectAccessToken);
  const {task_id} = useParams();
  const [errors, setErrors] = useState([])
  const navigator = useNavigate();

  useEffect(() => {
    try{
      getTask(task_id, access_token).then((response) => {
        const {data, status} = response;

        if(response.status === 200){
          handleSetTask(data)
        }else{
          handleSetErrors(data)
        }
      }) 
    }catch(error){
      console.log(error);
    }
  }, [])

  const handleSetErrors = (recivedErrors) => {
    const keys = Object.keys(recivedErrors);
    const result = keys.map((key) => (`${key} ` + recivedErrors[key]))
    setErrors(result);
  }

  const handleSetTask = (task) => {
    setCurrentTask(task);
  }

  const handleCloseAlert = (deleteError) => {
    const leftErrors = errors.filter((error) => error !== deleteError)
    setErrors(leftErrors);
  }

  const handleBackTasksPage = () => {
    navigator('/tasks');
  }

  return (
    <Fragment>
      <Outlet/>
        <div className='flex 
        flex-col
        flex-wrap
        items-center 
        justify-center 
        ' >
          <div className='w-full items-center'>
              {
              currentTask ? (
                <div className="p-6 shadow-lg rounded-lg text-center bg-gray-100 text-gray-700 items-center ">
                  <h2 className="font-semibold text-3xl mb-5">{currentTask.title}</h2>
                  <div id='task-description'>
                    {parse(currentTask.description)}
                  </div>
                </div> 
              ) : (
                <div className="p-6 shadow-lg rounded-lg  text-center bg-gray-100 text-red-700">
                  <p>
                    {errors[0]}
                  </p>
                </div> 
              ) 
              }
          </div>
            <button className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 mt-5 rounded-full" onClick={handleBackTasksPage}>back tasks page</button>     
        </div>
    </Fragment>
  )
}

export default Task