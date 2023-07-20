import React, { useEffect, useState } from 'react'
import { Table,  } from 'antd';
import { useSelector } from 'react-redux';


const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const [gridData,setGridData] = useState([])

  useEffect(() => {
      getData();
  })
  const getData = () => {
    setGridData(
      blogs.map((blog) => ({
        blogImgs: blog.blogImgs[0].url,
        _id: blog._id,
        title: blog.title,
        date: blog.date,
      }))
    )
  }
  const columns = [
    {
      title: 'Blog Image',
      dataIndex: 'blogImgs',
      render: blogImgs => <img src={blogImgs} className='w-20 h-20' alt="blogimg" />
    },
    {
      title: 'Blog ID',
      dataIndex: '_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    
  ];
  
  return (
    <div className='mt-[50px]'>
        <Table 
        columns={columns}
        dataSource={gridData}
        pagination={
            { pageSize: 5}
        }
        />
    </div>
  )
}

export default Blogs