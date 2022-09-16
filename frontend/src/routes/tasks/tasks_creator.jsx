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


function TasksCreator() {
  const [text, setText] = useState('');
  const subjects = useSelector(selectSubjects);
  const categories = useSelector(selectCategories);
  const [currentSubjectID, setCurrentSebjectID] = useState(0);
  const [currentCategories, setCurrentCategories] = useState([{name:'choose subject first'}]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [writersInfos, setWritersInfos] = useState([{user: {username: 'choose category first'}}])
  const [currentWritersInfo, setCurrentWritersInfo] = useState(null)

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
    console.log('result: ', result)
    dispatch(setCategories(result));
  }

    console.log('subject',subjects)
    console.log('categories',categories)
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
  }, [])

  const handleSetCurrentSubject = (event) => {
    const subject_id = event.target.value;
    setCurrentSebjectID(subject_id)
    
    const result = categories.filter((category) => (category.subject_id === parseInt(subject_id)))
    if(result.length === 0){
      setCurrentCategories([{name: 'No Categories'}]);
    }else {
      setCurrentCategories(result);
    }
    
  }

  const handleCreateTask = () => {
    let newErros = [];
    if(currentSubjectID === 0){
      newErros.push('subject must be choose')
    }

    if(currentCategory === null) {
      newErros.push('category must be cchoosech')
    }

    if (currentWritersInfo === null) {
      newErros.push('you have to choose writer')
    }

    if(newErros.length === 0){
      
    }
  }

  return (
    <Fragment>
      <Outlet/>
      <div className='flex flex-col justify-center items-center'>
        <form className="grid grid-flow-row w-3/4 mr-none" onSubmit={handleCreateTask}>
          <div className="flex flex-wrap mb-6 space-x-3">
            <div className="relative min-w-[30%]">
              <label>subject</label>
              <select  onChange={handleSetCurrentSubject} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
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
              <select className="block  appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              {
                currentCategories.map((category) => (<option onClick={() => setCurrentCategory(category)}>{category.name}</option>))
              }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div className="relative min-w-[30%]">
              <label>Writers</label>
              <select className="block  appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              {
                writersInfos.map((writersInfo) => (<option onClick={() => {setCurrentWritersInfo(writersInfo)}}>{writersInfo.user.username}</option>))
              }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            
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
      </div>
    </Fragment>
  )
}

export default TasksCreator