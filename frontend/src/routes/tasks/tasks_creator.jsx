import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { CKEditor } from "@ckeditor/ckeditor5-react"
import parse from 'html-react-parser';
import { useState, useEffect } from "react";
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import { useSelector } from 'react-redux';
import { selectSubjects } from '../../store/subject/subject.select';
import { selectCategories } from '../../store/category/category.select';
import { getSubjects } from '../../apis/subject.api';
import { useDispatch } from 'react-redux';
import { setSubjects } from '../../store/subject/subject.action';
import { getAllCategories } from '../../apis/category.api';
import { setCategories } from '../../store/category/category.action';
import { getAllWritersInfos } from '../../apis/writers_infos.api';
import { createTask } from '../../apis/tasks.api';
import { selectAccessToken, selectCurrentUser } from '../../store/user/user.select';


function TasksCreator() {
  const access_token = useSelector(selectAccessToken);
  const [text, setText] = useState('');
  const subjects = useSelector(selectSubjects);
  const categories = useSelector(selectCategories);
  const [currentSubjectID, setCurrentSubjectID] = useState(0);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [currentCategoryID, setCurrentCategoryID] = useState(null);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [writersInfos, setWritersInfos] = useState([{user: {username: 'choose category first'}}])
  const [currentWritersInfo, setCurrentWritersInfo] = useState(null)
  const [title, setTitle] = useState('');


  const handleSubjects = (allSugjects) => {
    const result = Object.values(allSugjects);
    dispatch(setSubjects(result));
  }

  const handleCloseAlert = (deleteError) => {
    const leftErrors = errors.filter((error) => error !== deleteError)
    setErrors(leftErrors);
  }

  const handleSetCategories = (categories) => {
    const result = Object.values(categories);
    dispatch(setCategories(result));
  }

  const handleErrorsMessage = (responseErrors) => {
    const keys = Object.keys(responseErrors);
    const result = keys.map((key) => (`${key } ` + responseErrors[key]));
    setErrors(result);
  }

  useEffect(() => {
    if(subjects.length === 0){
      try {
        getSubjects().then((response) => {
          const allSugjects = response.data;
          handleSubjects(allSugjects);
        })
      } catch(errors) {
        console.log(errors);
      }
    }
    if (categories.length === 0){
      getAllCategories().then((response) => {
        const categories = response.data;
        handleSetCategories(categories);
      })
    }
    
    if (currentCategories.length === 0 && subjects.length !== 0){
      const subject_id = subjects[0].id;
      const result = categories.filter((category) => (category.subject_id === parseInt(subject_id)))
      if(result.length === 0){
        setCurrentCategories([{name: 'No Categories'}]);
      }else {
        setCurrentCategories(result);
      }
    }
  }, [subjects])

  const handleSetCurrentSubject = (event) => {
    const subject_id = event.target.value;
    setCurrentSubjectID(subject_id)
    
    const result = categories.filter((category) => (category.subject_id === parseInt(subject_id)))
    if(result.length === 0){
      setCurrentCategories([{name: 'No Categories'}]);
      setCurrentCategoryID(null)
    }else {
      setCurrentCategories(result);
      setCurrentCategoryID(result[0].id)
    }
    
  }

  
  const handleSetWritersInfos = (id) => {
    const category_id = parseInt(id);
    // get writers infos bay category id and set
  }
  
  const handleCreateTask = async (event) => {
    event.preventDefault();

    let newErros = [];
    if(currentSubjectID === 0){
        newErros.push('subject must be choosen')
      }
      
      if(currentCategoryID === null) {
          newErros.push('category must be choosen')
    }
    
    // if (currentWritersInfo === null) {
    //     newErros.push('you have to choose writer')
    //   }
      if(newErros.length === 0){
        const task = {
          title: title,
          description: text,
          salary: 0,
          writer_id: 1,
          category_id: currentCategoryID,
        }
        
        try{
          createTask(task, access_token).then((response) => {
            const result = response.data;
            if(response.status === 201){
              console.log(result)
            }else{
              handleErrorsMessage(result)
            }
          })
        }catch(error){
          setErrors(error)
        }
    }else{
      setErrors(newErros);
    }
  }
  const handleChange = (event) => {
    const {value } = event.target;
    setTitle(value)
  }

  const handleSetCategory = ( event) => {
    const category_id = parseInt(event.target.value);
    setCurrentCategoryID(category_id);
    handleSetWritersInfos(category_id);
  }

  return (
    <div className='w-full'>
      <Outlet/>
      <div className='flex flex-col justify-center items-center w-full'>
        <form className="grid grid-flow-row w-3/4 mr-none" onSubmit={handleCreateTask}>
          <div className="flex flex-wrap mb-6 space-x-3">
            <div className="relative min-w-[30%]">
              <label>subject</label>
              <select onChange={handleSetCurrentSubject} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                <option>choose subject</option>
                {
                  subjects.map((subject) => (<option value={subject.id}>{subject.title}</option>))
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div className="relative min-w-[30%]">
              <label>Categories</label>
              <select onChange={handleSetCategory} className="block  appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                <option>choose category</option>
                {
                  currentCategories.map((category) => (<option value={category.id}>{category.name}</option>))
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div className="relative min-w-[30%]">
              <label>Writers</label>
              <select className="block  appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
              {
                writersInfos.map((writersInfo) => (<option onClick={() => setCurrentWritersInfo(writersInfo)}>{writersInfo.user.username}</option>))
              }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            
          </div>
          <div>
            <input className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} placeholder='title' onChange={handleChange} />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              
              <div className='editor w-full h-full'>
                  <CKEditor
                    name="body"
                    data={text}
                    editor={ClassicEditor}
                    onChange={(e, editor) => {
                      setText(editor.getData())
                    }}
                  ></CKEditor>
              </div>
          </div>
          <div className="flex justify-between">
            <div className="md:w-full">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Create Task
              </button>
            </div>
          </div>
        </form>
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
      </div>
    </div>
  )
}

export default TasksCreator