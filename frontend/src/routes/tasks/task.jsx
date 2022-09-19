import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getTasks } from '../../apis/tasks.api'
import { selectAccessToken } from '../../store/user/user.select'
import { getTask } from '../../apis/tasks.api'

const Task = ({task_id}) => {
  const access_token = useSelector(selectAccessToken);

  useEffect(() => {
    try{
      getTasks(task_id, access_token).then((response) => {
        console.log(response.data);
      }) 
    }catch(error){
      console.log(error);
    }
  })

  return (
    <Fragment>
      <Outlet/>
      <div>

      </div>
    </Fragment>
  )
}

export default Task