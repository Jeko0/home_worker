import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setSubjects } from "../../store/subject/subject.action";
import { getSubjects } from "../../store/subject/subject.api";
import { selectSubjects } from "../../store/subject/subject.select";


function Subjects() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const subjects = useSelector(selectSubjects);
  // const [errors, setErrors] = useState([])

  const handleSubjects = (allSugjects) => {
    const array = Object.keys(allSugjects);
    const result = array.map((key) => ([key, allSugjects[key]]))
    dispatch(setSubjects(result));
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
    console.log(subject);
  }

  return (
    <Fragment>
      <Outlet/>
      {
        subjects.map((subject) => (
          <div onClick={() => handleNavigateSubjectPage(subject)} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="" alt="" />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {subject[1].title }</h5>
                  <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>
          </div>
        ))
      }
    </Fragment>
  )
}

export default Subjects;