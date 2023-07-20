import React from 'react'
import { GiCandleHolder } from "react-icons/gi"
import { LiaHandsSolid } from "react-icons/lia";
import { FaBible } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Numbers = () => {
  return (
    <div className='num-wrapper'>
        <div className='container d-flex gap-10 justify-content-between align-items-center'>
            <div className='d-flex gap-3 justify-content-between align-items-center'>
                <div className='rounded-full  d-flex justify-content-center align-items-center  shadow-lg  icons-wrapper'>
                    <GiCandleHolder className='num-icons text-primary' />
                </div>
                <div className='d-flex stat flex-column relative'>
                   <span className='stat-count text-primary'>523</span>
                   <p className='text-uppercase absolute stat-text'>People</p>
                </div>
            </div>
            <div className='d-flex gap-3 justify-content-between align-items-center'>
                <div className='rounded-full  d-flex justify-content-center align-items-center  shadow-lg  icons-wrapper'>
                    <AiFillHeart  className='num-icons text-primary' />
                </div>
                <div className='d-flex stat flex-column relative'>
                   <span className='stat-count text-primary'>241</span>
                   <p className='text-uppercase absolute stat-text'>Donations</p>
                </div>
            </div>
            <div className='d-flex gap-3 justify-content-between align-items-center'>
                <div className='rounded-full  d-flex justify-content-center align-items-center  shadow-lg  icons-wrapper'>
                    <LiaHandsSolid className='num-icons text-primary' />
                </div>
                <div className='d-flex stat flex-column relative'>
                   <span className='stat-count text-primary'>523</span>
                   <p className='text-uppercase absolute stat-text'>Volunteers</p>
                </div>
            </div>
            <div className='d-flex gap-3 justify-content-between align-items-center'>
                <div className='rounded-full  d-flex justify-content-center align-items-center  shadow-lg  icons-wrapper'>
                    <FaBible className='num-icons text-primary' />
                </div>
                <div className='d-flex stat flex-column relative'>
                   <span className='stat-count text-primary'>186</span>
                   <p className='text-uppercase absolute stat-text'>Sermons</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Numbers