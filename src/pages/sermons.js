import { Breadcrumbs } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SermonsList from '../components/sermonsList'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from 'components/pagination'
// import axios from '../axios';
// import { updateSermons } from 'features/sermonSlice'

const Sermons = () => {
  const dispatch = useDispatch();
  const sermons = useSelector((state) => state.sermons);
  const [currentPage, setCurrentPage] = useState(1);
  const [sermonsPerPage, setSermonsPerPage] = useState(4);


  const indexOfLastSermon = currentPage * sermonsPerPage;
  const indexOfFirstSermon = indexOfLastSermon - sermonsPerPage;
  const currentSermons = sermons.slice(indexOfFirstSermon, indexOfLastSermon).sort((a, b) => b.id - a.id);

  // change Page 
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div className='sermon-wrapper'>
      <div className='dev-header-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className='breadcrumb-title'>
                    <h1>Our Sermons</h1>
                </div>
                    <Breadcrumbs className='bread-crumbs'>
                        <Link to="/" 
                        className="opacity-60 text-base">
                            Home
                        </Link>
                        <span className='text-blue-gray-700 text-base'>Our sermons</span>
                    </Breadcrumbs>

      </div>
      <div className='mx-32'>
          <div className='row justify-between  my-5'>
            <div className='col-md-12'>
              <div className="row">
                  {
                    currentSermons.map((sermon) => {
                      return(
                          <SermonsList  {...sermon} />
                      )
                    })
                  }
                  <div className="my-3">
                      <Pagination
                      sermonsPerPage={sermonsPerPage} 
                      totalSermons={sermons.length} 
                      paginate={paginate}
                      />
                  </div>
              </div>
            </div> 
              
          </div>
      </div>
      
      
     
    </div>
  )
}

export default Sermons