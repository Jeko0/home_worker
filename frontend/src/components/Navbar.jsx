import React, { Fragment } from 'react';
import logo from '../logo.jpg'
import { selectCurrentUser } from '../store/user/user.select';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../store/user/user.action';


export const Navbar = () => {

  const currentUser = useSelector(selectCurrentUser);
  const navigator = useNavigate();
  const dispatch = useDispatch()

  console.log(currentUser);

  const handleStart = () => {
    navigator('/auth');
  }

  const handleLogOut = () => {
    dispatch(setCurrentUser());
  }
  
  const IconOption = () => (
    <div>
      <img src={logo}
      className='rounded-full'
      style={{width: '80px', height: '80px'}} />
    </div>
  );

  return (
    <Fragment>
      <nav     className="relative flex flex-wrap bg-slate-200 px-2 items-center justify-between px-2 py-3 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600  mb-3">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
              <IconOption/>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-7 text-2xl">Home Worker</span>
          </a>
          <div className="flex md:order-2">
              { currentUser ? (<button onClick={handleLogOut} type="button" className="text-black bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{currentUser.email}</button>) : (
                <button onClick={handleStart} type="button" className="text-black bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started!</button>
              )
              }
              
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between mr-12 items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white text-xl" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Our Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl">Our writers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </Fragment>
  )
}