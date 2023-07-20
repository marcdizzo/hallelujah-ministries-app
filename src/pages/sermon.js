import { Breadcrumbs } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsPerson, BsClock, BsCloudDownload} from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import axios from '../axios';
import Loading from 'components/loading';

const Sermon = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const sermons = useSelector((state) => state.sermons);
    const [sermon, setSermon] = useState(null);
    const popularSermons = sermons.slice(0,4);
    useEffect(() => {
        axios.get(`/sermons/${id}`).then(({ data }) => {
            setSermon(data.sermon);
        })
    },[id]);

    if(!sermon){
        return <Loading />
    }
    // const image = sermon.pictures[0].url;
  return (
    <div className='wrapper'>
        <div className='dev-header-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className='breadcrumb-title'>
                    <h1>{sermon.title}</h1>
                </div>
                    <Breadcrumbs className='bread-crumbs'>
                        <Link to="/" 
                        className="opacity-60 text-base">
                            Home
                        </Link>
                        <span className='text-blue-gray-700 text-base'>{sermon.title}</span>
                    </Breadcrumbs>
                
        </div>
        <div className="sermon-wrapper my-[80px] mx-20">
            <div className="sermon-img w-full">
                <img 
                src={sermon.pictures[0].url} 
                alt="img" 
                
                />
                <div className="flex gap-5 align-items-center border-b py-4">
                    <div className='flex ml-4 justify-content-center gap-2 align-items-center'>
                        <BsPerson  className='h-6 w-6'/>
                        <span>Sermon by: {sermon.preacher}</span>
                    </div>
                    <div className='flex justify-content-center gap-2 align-items-center'>
                        <BsClock  className='h-6 w-6'/>
                        <span>{sermon.date}</span>
                    </div>
                    <div className='flex justify-content-center gap-2 align-items-center'>
                        <AiOutlineTag  className='h-6 w-6'/>
                        <span>Preacher: {sermon.preacher}</span>
                    </div>
                    <div className='flex justify-content-center gap-2 align-items-center'>
                        <AiOutlineTag  className='h-6 w-6'/>
                        <span>Bible</span>
                    </div>
                    <div className='flex justify-content-center gap-2 align-items-center'>
                        <BsCloudDownload  className='h-6 w-6'/>
                        <span>
                            {/* to be changed to download audio  */}
                            <Link to="/download">
                                Download
                            </Link>  
                        </span>
                    </div>

                </div>
            </div>
            <div className="audio-sermon my-4">
                <AudioPlayer
                    src={sermon.audios[0].url}
                />
            </div>
            <div className="comment mt-[70px]">
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

export default Sermon