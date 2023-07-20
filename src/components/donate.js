import React from 'react'
import { Progress } from "@material-tailwind/react";

const Donate = () => {
  return (
    <div className='wrapper'>
        <div>
            <h1 className='blog-title'>Donate</h1>
            <div className='section-border blog-icon'></div>
            <div className='section-subtitle dark-subtitle mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus nam, 
                sapiente exercitationem laborum veritatis!
            </div>
        </div>
        <div className='mt-3 container px-4'>
            <div className='row'>
                <div className="col-6">
                    <h2 className="donate-title">
                        Joshua Needs a New Heart
                    </h2>
                    <div className="d-flex justify-content-between gap-4">
                        <div className='d-img mb-3'>
                         <img
                          src="https://vatican.modeltheme.com/wp-content/uploads/2019/03/sermon-article-1-600x600.jpg"
                          className='donate-img img-fluid' alt="donate_img" />
                        </div>
                        <div className='d-flex flex-column'>
                            <p className='d-desc'>
                            Phasellus placerat augue erat. Maecenas fermentum erat eu quam 
                            pretium 
                            tempor are erat augue. Phasellus placerat augue premium erat 
                            placerat.
                            </p>
                            <div className='donate-btn mt-5'>
                                <button className='button border-0 uppercase'>
                                    Donate
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-6 pt-3">
                    <div className='donar-section mt-3 shadow-2xl text-center py-3 px-4'>
                        <div className='mt-3'>
                            <div className="flex w-full flex-col gap-4">
                                <Progress color='orange' value={62.60}  size="lg" label="Funded" />
                            </div>
                        </div>
                        <p className='mt-5'>$31,130.00 donated of $5,000.00 goal</p>
                        <p>2 donars</p>
                        <p>Campaign has ended</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Donate