import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { setSubjects } from "../../store/subject/subject.action";
import { getSubjects } from "../../apis/subject.api";
import { selectSubjects } from "../../store/subject/subject.select";
import math from '../../files/images/Math.jpg'; 
import english from '../../files/images/English.webp';
import geography from '../../files/images/Geography.webp';
import history from '../../files/images/History.webp';
import chemistry from '../../files/images/Chemistry.jpg';


function Subjects() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const subjects = useSelector(selectSubjects);
  // const [errors, setErrors] = useState([])

  const handleSubjects = (allSugjects) => {
    const result = Object.values(allSugjects);
    dispatch(setSubjects(result));
  }

  const handleSubjectLogo = (title) => {
    switch(title){
      case 'math':
        return math;
      case 'english':
        return english;
      case 'geography':
        return geography;
      case 'history':
        return history;
      case 'chemistry':
        return chemistry;
      default:
        return "no image";
    }
  } 

  useEffect(() => {
    try {
      getSubjects().then((response) => {
        const allSugjects = response.data;
        handleSubjects(allSugjects);
      })
    } catch(errors) {
      console.log(errors);
    }
  }, [])

  const handleNavigateSubjectPage = (subject) => {
    navigator(`${subject.id}/categories`);
  }

  return (
    <Fragment>
      <Outlet/> 
      <div className='justify-center flex'>
        <div className='grid grid-cols-3 gap-10' >
          {
            subjects.map((subject) => (
              <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img onClick={() => handleNavigateSubjectPage(subject)} className='max-h-50' src={handleSubjectLogo(subject.title.toLowerCase())} alt="" />
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {subject.title }</h5>
                      <a onClick={() => handleNavigateSubjectPage(subject)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Subjects;