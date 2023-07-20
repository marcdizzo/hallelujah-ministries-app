import React from 'react'
import { motion } from 'framer-motion'
import article from '../images/sermon-article-7.jpg'
import article2 from '../images/sermon-article-9.jpg'

const Events = () => {
  return (
    <motion.div className=' h-[800px] w-full'>
            <h1 className='blog-title'>Recent Events</h1>
            <div className='section-border blog-icon'></div>
            <div className='section-subtitle dark-subtitle mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus nam, 
                sapiente exercitationem laborum veritatis!
            </div>
        
        <div className='h-[500px] mx-10 flex gap-16 items-center my-5'>
             <div className='border-r grid gap-16 relative w-[300px] h-[400px] border-gray-300'>
             { /* Event 1 */}
                <div className='w-full h-[150px] flex-col flex justify-center items-center'>
                    <h6 className='text-sm uppercase font-bold text-black/80'>
                       16 may 2023
                    </h6>
                    <div className='absolute bg-blue-600 right-[-12px] 
                    rounded-full flex justify-center items-center w-[22px] h-[22px]'>
                        <div className='w-[11px] h-[11px] rounded-full bg-white'></div>
                    </div>
                    <h3 className='text-xl uppercase font-bold text-gray-400'>
                        thu 21:30 
                    </h3>
                </div>
                { /* Event 2 */}
                <div className='w-full h-[150px] flex-col flex justify-center items-center'>
                    <h6 className='text-sm uppercase font-bold text-black/80'>
                       24 mar 2023
                    </h6>
                    <div className='absolute bg-blue-600 right-[-12px] 
                    rounded-full flex justify-center items-center w-[22px] h-[22px]'>
                        <div className='w-[11px] h-[11px] rounded-full bg-white'></div>
                    </div>
                    <h3 className='text-xl uppercase font-bold text-gray-400'>
                        tue 18:00 
                    </h3>
                </div>
             </div>
             <div className='w-[700px] h-[500px] gap-5  grid py-8'>
                <div className='w-[800px]  shadow-xl overflow-hidden  h-[200px] flex justify-between items-center'>
                    <div className='w-[600px] h-[200px]'>
                        <h4 className='text-2xl text-black/80 font-medium pt-8 pb-2 px-10'>
                            Event S.Lukes
                        </h4>
                        <p className='text-gray-400 font-thin text-md px-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        </p>
                            <button className='rounded-full uppercase text-base mx-10 my-5 py-2 px-5 text-white
                            bg-indigo-600 hover:bg-black  font-semibold'>
                                    view Event
                            </button>
                    </div>
                    <motion.img
                    whileHover={{scale: 1.05}}
                    src={article}
                    className='w-[200px] h-[200px]'
                    />
                </div>
                {/* Recent 2 */}
                <div className='w-[800px]  shadow-xl overflow-hidden  h-[200px] flex justify-between items-center'>
                    <div className='w-[600px] h-[200px]'>
                        <h4 className='text-2xl text-black/80 font-medium pt-8 pb-2 px-10'>
                          Event S. Louis
                        </h4>
                        <p className='text-gray-400 font-thin text-md px-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        </p>
                            <button className='rounded-full uppercase text-base mx-10 my-5 py-2 px-5 text-white
                            bg-indigo-600 hover:bg-black  font-semibold'>
                                    view Event
                            </button>
                    </div>
                    <motion.img
                    whileHover={{scale: 1.05}}
                    src={article2}
                    className='w-[200px] h-[200px]'
                    />
                </div>
             </div>
        </div>
        </motion.div>
  )
}

export default Events