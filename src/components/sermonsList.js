import React from 'react'
import { BiSolidShareAlt } from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { PiDownloadFill  } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';

const SermonsList = ({_id,title,preacher,date,pictures}) => {
    let location = useLocation();
  return (
        <div className='sermonlist-wrapper  col-md-6 my-3'>
                    <Link to={`/sermons/${_id}`} className="ser-wrapper" >
                    <div className=" shadow-ser hover:shadow-xl p-0 m-0">
                                <div className="row  d-flex align-items-center">
                                    <div className="col-3">
                                        <img 
                                        src={pictures[0].url}
                                        className='img-fluid img-sermon object-fit-cover'
                                        alt="img" />
                                    </div>
                                    <div className="col-9  px-4">
                                        <div className='d-flex  justify-content-between align-items-center'>
                                            <div className=''>
                                                <h4>{title}</h4>
                                                <span className='d-flex gap-1'>
                                                    <p>By{preacher}|</p>
                                                    <p>{date}</p>
                                                </span>
                                            </div>
                                            <div className='d-flex justify-content-between gap-3 pr-2'>
                                                <div className='first-icons d-flex flex-column gap-2'>
                                                    <div className='rounded-full p-1 bg-black'>
                                                    <BiSolidShareAlt className='text-white' />
                                                    </div>
                                                    <div className='rounded-full p-1 bg-black'>
                                                    <FaHeadphones className='text-white' />
                                                    </div>
                                                </div>
                                                <div className="second-icons  d-flex flex-column gap-2">
                                                    <div className='rounded-full p-1 bg-black'>
                                                    <BsCameraVideoFill className='text-white' />
                                                    </div>
                                                    <div className='rounded-full p-1 bg-black'>
                                                    <PiDownloadFill className='text-white' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                    </Link>
    </div>
    
  )
}

export default SermonsList