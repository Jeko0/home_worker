import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import { getTasks } from '../../apis/tasks.api'
import { selectAccessToken } from '../../store/user/user.select'
import { getTask } from '../../apis/tasks.api'
import parse from 'html-react-parser';
import htmlT

const Task = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const access_token = useSelector(selectAccessToken);
  const {task_id} = useParams();
  const [errors, setErrors] = useState([])

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

  return (
    <Fragment>
      <Outlet/>
      <div className='content-center container'>
          {
           currentTask ? (
            <div>
              <h1 className='tracking-wider text-black text-center '>{currentTask.title}</h1>
              <p className='text-center underline mt-3'>
                {}
              </p>
            </div>
          ) : (
            <div className='flex items-stretch w-full h-full justify-center'>
              {
                  errors ? (
                    <div className=" w-1/3 ">
                    {errors.map((error) => (
                      <div className="alert-toast flex float-left bottom-0 mt-8 w-5/6 md:w-full max-w-sm" onClick={() => handleCloseAlert(error)}>
                        <label className="close cursor-pointer flex items-start justify-between w-full p-2 bg-red-600 h-24 rounded shadow-lg text-black" title="close">
                          {error}
                          <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                          </svg>
                        </label>
                      </div>
                    )
                    )}
                    </div>
                  ) : ( <></>)
                }
            </div>
          ) 
          }
      </div>
    </Fragment>
  )
}

export default Task