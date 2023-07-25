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
                    
                    <Button>
                        Read Article
                    </Button>
                    </Link>
                    
                </CardFooter>
            </Card>
            {/* <Card className="mt-6 w-96 ">
                <CardHeader color="blue-gray" className="relative h-52">
                    <img src="https://vatican.modeltheme.com/wp-content/uploads/2019/03/sermon-article-9-800x500.jpg"
                     alt="img-blur-shadow"/>
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    God Will Renew Your Joy in Ministry
                    </Typography>
                    <Typography>
                    Somehow, in the midst of our best attempts as leaders to challenge the powers and principalities, we.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Read Article</Button>
                </CardFooter>
            </Card> */}
            {/* <Card className="mt-6 w-96 ">
                <CardHeader color="blue-gray" className="relative h-52">
                    <img 
                    src="https://vatican.modeltheme.com/wp-content/uploads/2019/03/sermon-article-1-800x500.jpg" 
                    alt="img-blur-shadow"/>
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    Common Mistakes Preachers Make
                    </Typography>
                    <Typography>
                    Somehow, in the midst of our best attempts as leaders to challenge the powers and principalities, we.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Read Article</Button>
                </CardFooter>
            </Card> */}
        </div>
  )
}

export default Blog