import { Breadcrumbs } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RiDoubleQuotesR } from "react-icons/ri";
 import axios from "../axios";
import Loading from 'components/loading';
const Blog = () => {
    const { id } = useParams();
    const [blog,setBlog] = useState(null);

    useEffect(() => {
        axios.get(`/blogs/${id}`).then(({ data }) => {
            setBlog(data.blog);
        })
    },[id]);

    if(!blog){
        return <Loading />
    }
  return (
    <div>
        <div className='dev-header-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className='breadcrumb-title'>
                    <h1>Blog</h1>
                </div>
                    <Breadcrumbs className='bread-crumbs'>
                        <Link to="/" 
                        className="opacity-60 text-base">
                            Home
                        </Link>
                        <span className='text-blue-gray-700 text-base'>{blog.title}</span>
                    </Breadcrumbs>
        </div>
        <div className="mt-5 mb-4 mx-20">
            <img  className='blog-img' src={blog.blogImgs[0].url} 
            alt="blogimg" />
        </div>
        <div className='mx-20 my-3'>
            <div className='flex gap-2'>
                <span className='flex gap-2'>
                    Ngo, Our Church 
                    <p className='text-blue-600'>|</p>
                </span>
                <span className='flex gap-2'>
                    {blog.date} 
                    <p className='text-blue-600'>|</p>
                </span>
                <span>Churches</span>

            </div>
        </div>
        <div className="mx-20 mb-5">
            <div className="blog-title2">
                <h3 className='text-left'>
                    {blog.title}
                </h3>
            </div>
            <div className='article mb-3'>
                <p>
                {blog.article} 
                </p>
            </div>
            <div className=' bg-gray-200 quote py-3 px-4 flex gap-4 align-items-center'>
                <RiDoubleQuotesR  className='w-28 h-28 text-gray-500' />

                <p>
                {blog.quote}
                </p>

            </div>
        </div>
        <div className='blog-comments py-5'>
        <div className="comment mx-20">
                <div className='comment-title'>
                    <h1>Leave a comment</h1>
                </div>
                <form  className='d-flex flex-wrap gap-15 justify-content-between'>
                    <div className="w-100">
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                placeholder='Your comment'
                         rows="3"></textarea>
                    </div>
                    <div className="flex-grow-1">
                      <input type="text" placeholder='Your Name' className="h-14 form-control" />
                    </div>
                    <div className="flex-grow-1">
                      <input type="text" placeholder='Your email' className="h-14 form-control" />
                    </div>
                    <div className="flex-grow-1">
                      <input type="text" placeholder='Your website(optional)' className="h-14 form-control" />
                    </div>
                    <div className='commnent-btn w-100 mt-3'>
                        <button className='button border-0'>
                            Add Comment
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Blog