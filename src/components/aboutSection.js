import React from 'react'

const AboutSection = () => {
  return (
    <div className='wrapper py-5'>
            <h1 className='blog-title'>We Love God. We belive in God</h1>
            <div className='section-border blog-icon'></div>
            <div className='section-subtitle dark-subtitle mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus nam, 
                sapiente exercitationem laborum veritatis!
            </div>

            <div className=' flex mx-20 justify-between items-center'>
            <div className='w-[600px] grid gap-5 '>
                <div className='flex h-[100px] gap-5 justify-center items-center'>
                    <div className='w-[100px] grid place-items-center h-[100px] bg-black'>
                        <h2 className='text-6xl text-center text-white font-bold'>
                            1
                        </h2>
                    </div>
                    <div className=' h-[100px] w-[400px]'>
                            <h3 className=' font-normal text-2xl text-black px-3'>
                            Our Mission
                            </h3>
                            <p className='text-gray-600 text-base font-thin p-3'>
                            Our mission is what we do. The active verb here is invite. 
                            God progresses through gracious invitations.
                            </p>
                    </div>
                </div>
            
            {/* 2 */}

            <div className='flex h-[100px] gap-5 justify-center items-center'>
                    <div className='w-[100px] grid place-items-center h-[100px] bg-black'>
                        <h2 className='text-6xl text-center text-white font-bold'>
                            2
                        </h2>
                    </div>
                    <div className=' h-[100px] w-[400px]'>
                            <h3 className=' font-normal text-2xl text-black px-3'>
                                Our Vision
                            </h3>
                            <p className='text-gray-600 text-base font-thin p-3'>
                                We see our mission as extending God &apos;s kindom and 
                                we seek to help every member find their place.
                            </p>
                    </div>
                </div>
            {/* 3 */}
            <div className='flex h-[100px] gap-5 justify-center items-center'>
                    <div className='w-[100px] grid place-items-center h-[100px] bg-black'>
                        <h2 className='text-6xl text-center text-white font-bold'>
                            3
                        </h2>
                    </div>
                    <div className=' h-[100px] w-[400px]'>
                            <h3 className=' font-normal text-2xl text-black px-3'>
                            Our Values
                            </h3>
                            <p className='text-gray-600 text-base font-thin p-3'>
                            Community is where we most deeply experience 
                            God’s love and grace throughout all stages of life.
                            </p>
                    </div>
                </div>
            {/* 4 */}
            <div className='flex h-[100px] gap-5 justify-center items-center'>
                    <div className='w-[100px] grid place-items-center h-[100px] bg-black'>
                        <h2 className='text-6xl text-center text-white font-bold'>
                            4
                        </h2>
                    </div>
                    <div className=' h-[100px] w-[400px]'>
                            <h3 className=' font-normal text-2xl text-black px-3'>
                                Our Faith
                            </h3>
                            <p className='text-gray-600 text-base font-thin p-3'>
                            All Peoples are of tremendous value to God; reaching 
                            them with the Gospel is our distinct responsibility.
                            </p>
                    </div>
                </div>

            
                </div>
                <img
                src="https://vatican.modeltheme.com/wp-content/uploads/2019/04/about-us-numbers-bg.jpg"
                className='w-[500px]'
                />
        </div>
    </div>
  )
}

export default AboutSection