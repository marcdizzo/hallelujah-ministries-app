import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  return (
    <div>
        <div className=''>
        <h1 className='blog-title'>Testimonials</h1>
            <div className='section-border blog-icon'></div>
            <div className='section-subtitle dark-subtitle mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus nam, 
                sapiente exercitationem laborum veritatis!
            </div>
            <div>
                
                    <div className='flex justify-between'>
                    <div className='testimonials'>
            <Card color="transparent" shadow={false} className="">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                            Tania Andrew
                            </Typography>
                            <div className="5 flex items-center gap-0">
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            </div>
                        </div>
                        <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                        &quot;I found solution to all my design needs from Creative Tim. I use
                        them as a freelancer in my hobby projects for fun! And its really
                        affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
            </Card>
                    </div>
                    <div className='testimonials'>
            <Card color="transparent" shadow={false} className="">
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        <Avatar
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                            Tania Andrew
                            </Typography>
                            <div className="5 flex items-center gap-0">
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            <StarIcon className="h-5 w-5 text-yellow-700" />
                            </div>
                        </div>
                        <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography>
                        &quot;I found solution to all my design needs from Creative Tim. I use
                        them as a freelancer in my hobby projects for fun! And its really
                        affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
            </Card> 
                    </div>
            

                    </div>

                

            </div>
           
        </div>
    </div>
  )
}

export default Testimonials