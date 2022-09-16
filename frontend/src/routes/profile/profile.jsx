import { current } from '@reduxjs/toolkit';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { getUserProfile } from '../../apis/user.api';
import {selectuser} from '../../store/user/user.select';

function Profile() {
  const [user, setUser] = useState(null);
  const {user_id} = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    try {
      getUserProfile(user_id).then((response) => {
        const result = response.data;
        setUser(result);
      })
    }catch(errors) {
      console.log(errors);

    }
  }, [])

  const handleNavigateWritersInfosPage = () => {
    navigator(`/users/${user.id}/writers_infos`)
  }

  return (
    <Fragment>
      <div>
        <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">{ user ? user.clients_tasks.length : 0}</p>
                <p className="text-gray-400">Tasks</p>
              </div>
              <div>
                  <p className="font-bold text-gray-700 text-xl">{user ? user.reviews.length : 0 }</p>
                <p className="text-gray-400">reviews</p>
              </div>
                  <div>
                  <p className="font-bold text-gray-700 text-xl">{user ? user.comments.length : 0 }</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
        <button
          onClick={handleNavigateWritersInfosPage}
          className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          writers infos
        </button>
        {/* <button
          className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          Message
        </button> */}
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{user ? user.username: 'No User'} <span className="font-light text-gray-500">age</span></h1>
            <p className="font-light text-gray-600 mt-3">{user ? user.email : "no email"}</p>

            <p className="mt-2 text-black">{user ? user.role : 'no user'}</p>
            <p className="mt-2 text-black">City</p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">description</p>
          </div>

        </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile