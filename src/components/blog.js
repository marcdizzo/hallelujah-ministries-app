import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Blog = ({_id,title,article,blogImgs}) => {
  return (
        <div>
            <Card className="mt-6 w-90">
                <CardHeader color="blue-gray" className="relative blog-header">
                    <img 
                    src={blogImgs[0].url} 
                    alt="img-blur-shadow blogs-img"  />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography>
                        <p className='line-clamp-3'>
                           {article}
                        </p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link  to={`/blogs/${_id}`}>
                    
                    <Button className='button'>
                        Read Article
                    </Button>
                    </Link>
                    
                </CardFooter>
            </Card>
            
        </div>
  )
}

export default Blog