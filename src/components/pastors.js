import React from 'react'
import { Avatar } from "@material-tailwind/react";

const Pastors = () => {
  return (
    <div className='wrapper py-5'>
             <h1 className='blog-title'>Our Pastors</h1>
            <div className='section-border blog-icon'></div>
            <div className='section-subtitle dark-subtitle mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus nam, 
                sapiente exercitationem laborum veritatis!
            </div>
            <div className=' mx-28 pastors-wrapper'>
                <div className="row">
                    <div className="col-md-3 border py-5">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="">
                            <Avatar src="https://vatican.modeltheme.com/wp-content/uploads/2017/11/pastor2.jpg" alt="avatar" size="xxl" />
                        </div>
                        <h2 className='at-user-name mt-4'>Lamech Ssetimba</h2>
                        <p className='at-user_title'>Director</p>

                        </div>

                    </div>
                    <div className="col-md-3 border py-5">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="">
                            <Avatar src="https://vatican.modeltheme.com/wp-content/uploads/2017/11/pastor2.jpg" alt="avatar" size="xxl" />
                        </div>
                        <h2 className='at-user-name mt-4'>Bruno Dias</h2>
                        <p className='at-user_title'>Regional Manager</p>
                        </div>    
                    </div>
                    <div className="col-md-3 border py-5">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className="">
                                <Avatar src="https://vatican.modeltheme.com/wp-content/uploads/2017/11/pastor2.jpg" alt="avatar" size="xxl" />
                            </div>
                            <h2 className='at-user-name mt-4'>John Doe</h2>
                            <p className='at-user_title'>Assitant Manager</p>
                        </div>
                    </div>
                    <div className="col-md-3 border py-5">
                       <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className="">
                                    <Avatar src="https://vatican.modeltheme.com/wp-content/uploads/2017/11/pastor2.jpg" alt="avatar" size="xxl" />
                                </div>
                                <h2 className='at-user-name mt-4'>Bruno Dias</h2>
                                <p className='at-user_title'>Assitant Manager</p>
                        </div>
                    </div>
                </div>


            </div>
    </div>
  )
}

export default Pastors