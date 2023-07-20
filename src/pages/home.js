import React from 'react'
import Slider from '../components/slider'
import Blog from '../components/blog'
import Numbers from '../components/numbers'
import Donate from '../components/donate'
import Testimonials from '../components/testimonials'
import { useSelector } from 'react-redux'
import BlogTitle from 'components/blogTitle'

const Home = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div>
        <Slider />
        <div>
           <BlogTitle />
           <div className='card-wrapper d-flex gap-5 justify-content-between container mb-4'>
              {
                blogs.map((blog) => {
                  return(
                    <Blog  {...blog} />
                  )
                })
              } 
           </div>
           
        </div>
        
        
        <Numbers />
        <Donate />
        <Testimonials />
    </div>
  )
}

export default Home