import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllWritersInfos, getUserWritersInfos } from '../../store/writers_infos/writers_infos';


function WritersInfos() {
  const {user_id} = useParams();

  const [writersInfos, setWritersInfos] = useState([]);

  useEffect(() => {
    if(user_id === 'all') {
      try{
        getAllWritersInfos().then((response) => {
          const result = response.data;
          setWritersInfos(Object.values(result));
        })
      }catch(error) {
        console.log(error);
      }
    }else {
      try{
        getUserWritersInfos(user_id).then((response) => {
          const result = response.data;
          setWritersInfos(Object.values(result));
        })
      } catch(error) {
        console.log(error);
      }
    }
  }, [])

  console.log(writersInfos)
  return (
    <Fragment>
      <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <div className='container w-[70%]' >
      <section className="bg-white py-20 lg:py-[120px]" >
        <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                  <div className="max-w-full overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                          <tr className="bg-primary text-center">
                              <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                border-l border-transparent
                                "
                                >
                                Name
                              </th>
                              <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                "
                                >
                                Subject
                              </th>
                              <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                "
                                >
                                Category
                              </th>
                              <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                "
                                >
                                Raiting
                              </th>
                              
                              <th
                                className="
                                w-1/6
                                min-w-[160px]
                                text-lg
                                font-semibold
                                text-white
                                py-4
                                lg:py-7
                                px-3
                                lg:px-4
                                border-r border-transparent
                                "
                                >
                                Create Task
                              </th>
                          </tr>
                        </thead>
                        <tbody> 
                        {
                          writersInfos.map((writersInfo) => {
                            return (
                              <tr key={writersInfo.id}>
                                  <td
                                    className="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-[#F3F6FF]
                                    border-b border-l border-[#E8E8E8]
                                    "
                                    >
                                    {writersInfo.user.username}
                                  </td>
                                  <td
                                    className="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-white
                                    border-b border-[#E8E8E8]
                                    "
                                    >
                                    {writersInfo.subject.title}
                                  </td>
                                  <td
                                    className="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-white
                                    border-b border-[#E8E8E8]
                                    "
                                    >
                                    Category
                                  </td>
                                  <td
                                    className="
                                    text-center text-dark
                                    font-medium
                                    justify-center
                                    text-base
                                    py-5
                                    px-2
                                    bg-[#F3F6FF]
                                    border-b border-[#E8E8E8]
                                    "
                                    >
                                    <div className='flex justify-center'>
                                      <div className="flex items-center ">
                                          <svg aria-hidden="true" className={ writersInfo.rating / 5 > 0 ? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-300 dark:text-gray-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                          <svg aria-hidden="true" className={(writersInfo.rating / 5 > 0.2)? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-300 dark:text-gray-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                          <svg aria-hidden="true" className={(writersInfo.rating / 5 > 0.4)? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-300 dark:text-gray-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                          <svg aria-hidden="true" className={(writersInfo.rating / 5 > 0.6)? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-300 dark:text-gray-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                          <svg aria-hidden="true" className={(writersInfo.rating / 5 > 0.8)? "w-5 h-5 text-yellow-400" : "w-5 h-5 text-gray-300 dark:text-gray-500"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                      </div>
                                    </div>
                                  </td>
                                  
                                  <td
                                    className="
                                    text-center text-dark
                                    font-medium
                                    text-base
                                    py-5
                                    px-2
                                    bg-white
                                    border-b border-r border-[#E8E8E8]
                                    "
                                    >
                                    <a
                                        href="/"
                                        className="
                                        border border-primary
                                        py-2
                                        px-6
                                        text-primary
                                        inline-block
                                        rounded
                                        hover:bg-primary hover:text-white
                                        "
                                        >
                                        Start
                                    </a>
                                  </td>
                              </tr>
                            )
                          })
                        }
                        </tbody>
                    </table>
                  </div>
              </div>
            </div>
        </div>
      </section>
    </div>
    </Fragment>
  )
}

export default WritersInfos;