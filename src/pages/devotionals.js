import React, { useState } from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import DevList from '../components/devList';
import Latest from '../components/latest';
import { useSelector } from 'react-redux';
import Pagination from 'components/pagination';

const Devotionals = () => {
    const devotions = useSelector((state) => state.devotions);
    const [currentPage, setCurrentPage] = useState(1);
    const [sermonsPerPage, setSermonsPerPage] = useState(4);


    const indexOfLastDevotion = currentPage * sermonsPerPage;
    const indexOfFirstDevotion = indexOfLastDevotion - sermonsPerPage;
    const currentDevotions = devotions.slice(indexOfFirstDevotion, indexOfLastDevotion); 

    // change Page 
  const paginate = pageNumber => setCurrentPage(pageNumber);
  


  return (
    <>
        <div className='dev-wrapper'>
            <div className='dev-header-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className='breadcrumb-title'>
                    <h1>Our Devotionals</h1>
                </div>
                    <Breadcrumbs className='bread-crumbs'>
                        <Link to="/" 
                        className="opacity-60 text-base">
                            Home
                        </Link>
                        <span className='text-blue-gray-700 text-base'>Our devotionals</span>
                    </Breadcrumbs>

            </div>
            <Latest />
            <div className='sm:mx-20 mt-3'>
            <div className='flex-row sm:mx-5 
             border-gray-300  cursor-pointer border-t
             border-r'>
            {
                currentDevotions.map((devotion) => {
                    return (
                        <>
                            <DevList {...devotion}   />
                            
                        </>
                        
                    )
                })
            }

            </div>

            <div className='my-3 sm:mx-5'>
                <Pagination
                    sermonsPerPage={sermonsPerPage} 
                    totalSermons={devotions.length} 
                    paginate={paginate}
                />
            </div>
            
            </div>
            
            
            {/* <div className='sm:mx-20'>
                            <div className='bg-white px-4 py-3 flex items-center
                        justify-between border-none border-gray-200 lg:px-6'>
                        <div className='flex-1 flex justify-between'>
                            
                                <a href="#" className='relative inline-flex items-center
                            px-4 py-2 border-gray-300 text-sm font-medium
                            rounded-md text-gray-700 bg-white hover:bg-gray-50'
                            
                            >
                                Previous
                            </a>
                            
                                <a href="#"
                                className='ml-3 relative inline-flex items-center px-4
                                py-2 border-gray-300 text-sm font-medium rounded-md
                                text-gray-700 bg-white hover:bg-gray-50'
                                // onClick={() => showNext({item: list[list.length -1]})}
                                >
                                    Next
                                </a>
                            
                                
                            
                        </div>
    
    </div>
            </div> */}
            
        </div>

    </>
  )
}

export default Devotionals