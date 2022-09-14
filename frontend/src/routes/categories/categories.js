import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../store/category/category.api';
import { selectCategories } from '../../store/category/category.select'

function Categories() {
  const categories = useSelector(selectCategories);
  const navigator = useNavigate();
  console.log(categories)

  const handleNavigateCategoryPage = (category) => {
    navigator(`category/${category.id}`);
  }

  useEffect(() => {
    // getCategories().then((response) => {
    //   const categories = response.data.categories.
    // })
  })

  return (
    <div className='justify-center flex'>
        <div className='grid grid-cols-3 gap-10' >
          {
            categories.map((category) => (
              <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {category.title }</h5>
                      <a onClick={() => handleNavigateCategoryPage(category)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Read more
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Categories