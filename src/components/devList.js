import React from 'react'
import { Link } from 'react-router-dom'

const DevList = ({ _id,title,date,imgs,prayer,prayerFocus,thought, description }) => {
  return (
    <>               
                                 <Link to={`/devotions/${_id}`} className='flex border-b
                                 border-l-4 hover:border-l-blue-700 border-gray-300'>
                                     <div className='hidden md:flex md:my-8  md:ml-5 shrink-0'>
                                         <img 
                                         src={imgs[0].url}
                                         alt="image"
                                         width={250}
                                         height={250}
                                         className="rounded-lg"
                                         />
                                     </div>        
                         
                                 <div className='mx-6 flex flex-col my-3'>
                                     <p className='text-sm sm:text-md mt-2 mb-2 font-base text-gray-800
                                     uppercase'>
                                         {date}
                                     </p>
                                     <h2 className=' text-xl sm:text-4xl mb-1 font-semibold'>
                                         {title}
                                     </h2>
                                     <p className='text-base line-clamp-3'>
                                        {description}
                                     </p>
                                     
                                     <Link
                                     to={`/devotions/${_id}`}
                                     className='text-blue-600 underline'
                                     >
                                         Read More
                                     </Link>
                                     
                                 </div>
                                 </Link>
                                 {/* <div   className='flex border-b
                                 border-l-4 hover:border-l-blue-700 border-gray-300'>
                                     <div className='hidden md:flex md:my-8  md:ml-5 shrink-0'>
                                         <img 
                                         src="https://cdn.pixabay.com/photo/2016/01/25/11/25/abbey-1160492_960_720.jpg"
                                         alt="image"
                                         width={250}
                                         height={250}
                                         className="rounded-lg"
                                         />
                                     </div>        
                         
                                 <div className='mx-6 flex flex-col my-3'>
                                     <p className='text-sm sm:text-md mt-2 mb-2 font-base text-gray-800
                                     uppercase'>
                                         23/04/2023
                                     </p>
                                     <h2 className=' text-xl sm:text-4xl mb-1 font-semibold'>
                                         The way to righteousness
                                     </h2>
                                     <p className='text-base line-clamp-3'>
                                     Seventeen years ago, I had a breakthrough and finally understood the Lord’s love for me. 
                                     For decades I had begged God to deliver me from my eating disorders and clinical depression. 
                                     They were taking a toll on my relationships, and I felt like even God had given up on me...
                                     </p>
                                     
                                     <Link
                                     to={`/devotionals/:id`}
                                     className='text-blue-600 underline'
                                     >
                                         Read More
                                     </Link>
                                     
                                 </div>
                                 </div> */}
                            
    
         </>
  )
}

export default DevList