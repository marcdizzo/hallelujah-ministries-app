import { Breadcrumbs } from '@material-tailwind/react'
import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Loading from 'components/loading';

const Devotional = () => {
    const { id } = useParams();
    const devotions = useSelector((state) => state.devotions)
    const [devotion, setDevotion] = useState(null)
    useEffect(() => {
        axios.get(`/devotions/${id}`).then(({ data }) => {
            setDevotion(data.devotion);
        })
    },[id]);

    if(!devotion){
        return   <Loading />
      }
  return (
    <div className='wrapper'>
        <div className='dev-header-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className='breadcrumb-title'>
                    <h1>{devotion.title}</h1>
                </div>
                    <Breadcrumbs className='bread-crumbs'>
                        <Link to="/" 
                        className="opacity-60 text-base">
                            Home
                        </Link>
                        <span className='text-blue-gray-700 text-base'>{devotion.title}</span>
                    </Breadcrumbs>

      </div>
            <div
            // key={id}
            className='relative  h-[150px] lg:h-[200px]
            xl:h-[300px] 2xl:h-[400px]'>
                <img
                src={devotion.imgs[0].url}
                alt='image'
                className='w-full  object-cover
                h-[150px] sm:h-[150px] lg:h-[200px] xl:h-[300px] 2xl:h-[400px]'
            />
            <div
            className='absolute  sm:ml-20 top-1/3
            w-full sm:text-left xyz-in'
            xyz="fade up-5 rotate-right-50%"
            >
                
                <p className='text-xs  font-mono text-white sm:text-lg'>
                {devotion.date}
                </p>
                <h1 className=' text-xl sm:text-4xl font-bold text-white font-mono'>
                {devotion.title}
                </h1>
            </div>
            </div>
     <div>
            <div>
                <div className='hidden sm:flex w-full justify-center items-center space-x-10 pt-4'>
                <div className='w-[400px]'>
                    <p className='text-center text-lg font-semibold'>
                        Thought of the Day
                    </p>
                </div>
                <div className='w-[400px]'>
                    <p className='text-center text-lg font-semibold'>
                        Payer Focus
                    </p>
                </div>

                </div>
                <div className='mt-3 mb-5 mx-5 sm:flex space-y-5 sm:space-x-10 justify-center items-center'>
                <h2 className='sm:hidden text-center text-xl font-semibold'>
                    Thought of the day
                </h2>
            <div className='sm:w-[500px] py-3 px-5 bg-gray-100 border'>
                <p className='text-center text-md'>
                    {devotion.thought}
                </p>
            </div>
            <h2 className='sm:hidden text-center text-xl font-semibold'>
                Prayer Focus
            </h2>
            <div className='sm:w-[500px] py-3 px-5 bg-gray-100 border'>
                <p className='text-center text-md'>
                {devotion.prayerFocus}
                </p>     
            </div>
        </div>
                <div className='w-auto sm:border border-blue-500 sm:p-5 m-4'>
                
                            
                <div>
                    <p style={{whiteSpace:"pre-wrap"}}   className='text-lg  sm:px-5
                        px-1 font-normal
                        indent-10'>
                           {devotion.description}
                    </p>
                        <h5 className='mt-5 mx-4 text-2xl font-mono'>
                            Prayer
                        </h5>
                    <p className='text-base my-3 mx-4'>
                       {devotion.prayer}
                    </p>
                            </div>

                </div>
            
            </div>
     </div>
        
    </div>
  )
}

export default Devotional