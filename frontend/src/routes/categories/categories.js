import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCategories, getCategories } from '../../store/category/category.api';
import { selectCategories } from '../../store/category/category.select'
import { setCategories} from '../../store/category/category.action';

function Categories() {
  const categories = useSelector(selectCategories);
  const navigator = useNavigate();
  const {subject_id } = useParams();
  const dispatch = useDispatch();

  const handleNavigateCategoryPage = (category) => {
    navigator(`category/${category.id}`);
  }

  const handleSetCategories = (categories) => {
    const result = Object.values(categories);
    console.log('result: ', result)
    dispatch(setCategories(result));
  }

  useEffect(() => {
    if (subject_id){
      getCategories(subject_id).then((response) => {
        const categories = response.data;
        handleSetCategories(categories);
      })
    } else {
      getAllCategories().then((response) => {
        const categories = response.data;
        handleSetCategories(categories);
        console.log(categories)
      })
    }

  }, [])

  return (
    <div className='justify-center flex'>
        <div className='grid grid-cols-5 gap-10' >
          {
            categories.map((category) => (
              <div className="max-w-xs bg-green-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {category.name }</h5>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Categories