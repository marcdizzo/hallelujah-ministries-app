import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
      <div className='carousel'>
             <Carousel className="">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full"
          height={400}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Hallelujah Ministries Sunday Prayers
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Prayer will make a man cease from sin,
              entice a man to cease from prayer
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                View Prayers
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Online Sermons Each Sunday Morning 
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             What are you complaining about? said God.
             They won't let Me in either.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to="/sermons">
                All Sermons 
                </Link>
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Church Missions for Fundrasing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              All Peoples are a value to God;
              reaching them with the Gospel.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Join our Mission
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
      </div>
   
      //  <Carousel className="">
      // <img
      //   src="https://cdn.pixabay.com/photo/2018/08/17/10/10/candlelight-3612508_1280.jpg"
      //   alt=""
      //   className="h-full w-full"
      // />
      // <img
      //   src="https://cdn.pixabay.com/photo/2017/07/27/11/16/prayer-2544994_1280.jpg"
      //   alt=""
      //   className="h-full w-full object-cover"
      // />
      // <img
      //   src="https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg"
      //   alt=""
      //   className="h-full w-full object-cover"
      // />
      //  </Carousel>
  )
}

export default Slider